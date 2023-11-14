import axios from "axios";

export const makeRequest = axios.create({
    baseURL : import.meta.env.VITE_BACKEND_URL,
    headers: { Authorization: 'Bearer ' + import.meta.env.VITE_MONGO_API_KEY }
});