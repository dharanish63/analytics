import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:5000/",
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
export default apiClient;