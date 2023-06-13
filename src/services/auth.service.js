import axios from "axios";

const BASE_URL = "http://3.89.221.7:3000";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export function login({ email, password }) {
	return axiosInstance
		.post(`${BASE_URL}/login`, { email, password })
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			message: error.response.data?.error?.msg || "Error",
		}));
}

export function getMe() {
	return axiosInstance
		.get(`${BASE_URL}/me`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		})
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			message: error.response.data?.error || "Error",
		}));
}

export { axiosInstance };
