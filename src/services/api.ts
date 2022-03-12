import axios from "axios";

export const api = axios.create({
    baseURL: "https://controlefinanceiroo.netlify.app/api",
})