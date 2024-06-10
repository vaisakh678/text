import axios from "axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

const http = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

let accessToken: string | null = null;

const useHttp = () => {
	const refresh = useRefreshToken();

	useEffect(() => {
		const request_interceptor = http.interceptors.request.use(
			async (request) => {
				request.headers.Authorization = `Bearer ${accessToken ?? ""}`;
				return request;
			},
			(error) => {
				return Promise.reject(error);
			}
		);

		const response_interceptor = http.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error.config;
				if (error.response && error.response.status === 401 && !prevRequest.send) {
					prevRequest.send = true;
					accessToken = await refresh();
					prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
					return http(prevRequest);
				} else if (error.response && error.response.status === 403) {
					// store.dispatch(logout());
				}
				return Promise.reject(error);
			}
		);

		return () => {
			http.interceptors.request.eject(request_interceptor);
			http.interceptors.response.eject(response_interceptor);
		};
	}, [refresh]);

	return http;
};

export default useHttp;
