// services/api.js
import axios from "axios";
// import API_BASE_URL from "../config";

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const loginUser = async (postData) => {
  const response = await api.post("/login", postData);
  return response.data;
};

export const signupUser = async (postData) => {
  const response = await api.post("/signup", postData);
  return response.data;
};

export const searchRestaurants = async (postData) => {
  const response = await api.post("/maps/nearby_restaurants", postData);
  return response.data;
};

export const reverseGeocode = async (postData) => {
  const response = await api.post("/maps/reverse_geocode", postData);
  return response.data;
};

export default api;
