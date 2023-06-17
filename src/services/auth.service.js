import axios from "axios";
import { getToken, removeToken, setToken } from "./helpers";

const BASE_URL = "http://3.89.221.7:3000";

const axiosInstance = axios.create({ baseURL: BASE_URL });

const token = getToken();

if (token) {
	setToken(token);
}

export function login({ email, password }) {
	return axiosInstance
		.post(`${BASE_URL}/login`, { email, password })
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export function verify({ code }) {
	return axiosInstance
		.post(`${BASE_URL}/verify`, { code })
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export function getMe() {
	return axiosInstance
		.get(`${BASE_URL}/me`)
		.then((response) => response.data)
		.catch((error) => {
			console.log(error);
			if (error.response.status === 404) {
				removeToken();
			}
			return {
				error: true,
				name: error.response.data?.error?.name || "Error",
				message: error.response.data?.error || "Error",
			};
		});
}

export function changeBlockStatus() {
	return axiosInstance
		.put(`${BASE_URL}/me/block_status`)
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export { axiosInstance };
