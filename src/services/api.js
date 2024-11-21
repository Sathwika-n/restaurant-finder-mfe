// services/api.js
import { useQuery } from "@tanstack/react-query";
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

export const forgotPassword = async (postData) => {
  const response = await api.post("/forgot-password", postData);
  return response.data;
};

export const changePassword = async (postData) => {
  const response = await api.put("/change-password", postData);
  return response.data;
};

export const addFavorite = async (postData) => {
  const response = await api.post("/maps/add_favorite", postData);
  return response.data;
};

export const removeFavorite = async (postData) => {
  const response = await api.post("/maps/remove_favorite", postData);
  return response.data;
};

const fetchUserReviews = async (userId) => {
  const response = await api.get(`/maps/user_reviews_by_user_id`, {
    params: { user_id: userId },
  });
  return response.data;
};
const fetchUserFavourites = async (userId) => {
  const response = await api.get(`/maps/user_favorites/${userId}`);
  return response.data;
};

// Use the `useQuery` hook
export const useUserReviews = (userId) => {
  return useQuery({
    queryKey: ["userReviews", userId],
    queryFn: () => fetchUserReviews(userId),
    enabled: !!userId, // Ensures query runs only when `userId` is provided
    staleTime: 300000, // (Optional) Keep data fresh for 5 minutes
  });
};
export const useUserFavourites = (userId) => {
  return useQuery({
    queryKey: ["userFavourites", userId],
    queryFn: () => fetchUserFavourites(userId),
    enabled: !!userId, // Ensures query runs only when `userId` is provided
    staleTime: 300000, // (Optional) Keep data fresh for 5 minutes
  });
};

export default api;
