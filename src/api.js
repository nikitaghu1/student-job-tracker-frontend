import axios from "axios";

// Dynamically use the backend URL from .env
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/jobs",
});

export const fetchJobs = () => API.get("/");
export const createJob = (job) => API.post("/", job);
export const updateJob = (id, updated) => API.patch(`/${id}`, updated);
export const deleteJob = (id) => API.delete(`/${id}`);
