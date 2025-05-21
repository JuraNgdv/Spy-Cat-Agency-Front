import axios from "axios";

// @ts-ignore
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export default axiosInstance;