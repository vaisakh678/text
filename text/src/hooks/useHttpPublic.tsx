import axios from "axios";

const httpPublic = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

const useHttpPublic = () => {
	return httpPublic;
};

export default useHttpPublic;
