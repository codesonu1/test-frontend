import axios from "axios";
const SERVER_URL = "http://localhost:9000/api/v1/";
export const api = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
