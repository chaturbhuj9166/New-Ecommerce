import axios from "axios";

const baseURL = import.meta.env.PROD
  ? import.meta.env.VITE_API_PROD
  : import.meta.env.VITE_BASEURL;

const instance = axios.create({
  baseURL,
  withCredentials: true
});

export default instance;
