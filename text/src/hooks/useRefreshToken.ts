import axios from "axios";

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function onTokenRefreshed(token: string) {
	refreshSubscribers.forEach((callback) => callback(token));
	refreshSubscribers = [];
}

function addRefreshSubscriber(callback: (token: string) => void) {
	refreshSubscribers.push(callback);
}

const useRefreshToken = () => {
	const refresh = async () => {
		if (!isRefreshing) {
			isRefreshing = true;
			try {
				const response = await axios.get("auth/refresh");
				const accessToken = response.data.data.accessToken;
				onTokenRefreshed(accessToken);
				isRefreshing = false;
				return accessToken;
			} catch (error) {
				isRefreshing = false;
				return Promise.reject(error);
			}
		} else {
			return new Promise((resolve) => {
				addRefreshSubscriber((token: string) => {
					resolve(token);
				});
			});
		}
	};

	return refresh;
};

export default useRefreshToken;
