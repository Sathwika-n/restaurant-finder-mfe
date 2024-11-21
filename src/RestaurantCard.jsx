import React, { useState } from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa"; // Icons for rating and location
import "./restaurant-card.scss"; // CSS for styling the card
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useMutation } from "@tanstack/react-query";
import { addFavorite, removeFavorite } from "./services/api";
import { useQueryClient } from "@tanstack/react-query";

const RestaurantCard = ({
  name,
  imageUrl,
  rating,
  location,
  restaurant_id,
  isFavorite,
}) => {
  const queryClient = useQueryClient();
  function toTitleCase(text) {
    return text
      ?.toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const addMutation = useMutation({
    mutationFn: addFavorite, // Ensure addFavorite is the mutation function
    onSuccess: (data) => {
      console.log("Added Favorite", data);
      queryClient.invalidateQueries(["userFavourites"]);
    },
    onError: (error) => {
      console.error("Unable to add Favorite", error);
    },
  });

  const removeMutation = useMutation({
    mutationFn: removeFavorite, // Ensure addFavorite is the mutation function
    onSuccess: (data) => {
      console.log("Removed Favorite", data);
    },
    onError: (error) => {
      console.error("Unable to remove Favorite", error);
    },
  });

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeMutation.mutate({
        user_id: JSON.parse(sessionStorage.getItem("user")).user_id,
        restaurant_id: restaurant_id,
      });
    } else if (!isFavorite) {
      addMutation.mutate({
        user_id: JSON.parse(sessionStorage.getItem("user"))?.user_id,
        restaurant_id: restaurant_id,
      });
    }

    // setIsFavorited((prev) => !prev);
  };
  return (
    <Box className="restaurant-card">
      {/* Image Section */}
      <img src={imageUrl} alt={`${name}`} className="restaurant-image" />

      <IconButton
        onClick={handleFavoriteToggle}
        sx={{
          position: "absolute",
          top: "16px",
          right: "16px",
          backgroundColor: isFavorite ? "#fc7b6b" : "#e0e0e0",
          color: isFavorite ? "#fff" : "#000",
          "&:hover": {
            backgroundColor: isFavorite ? "#e25445" : "#d0d0d0",
          },
          "&:focus": {
            outline: "none",
          },
        }}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      {/* Details Section */}
      <Box className="restaurant-details" sx={{ position: "relative" }}>
        <Typography variant="cardTitle">{toTitleCase(name)}</Typography>
        <Box className="restaurant-info">
          <Box className="restaurant-rating">
            <FaStar className="icon" />
            <span>{rating}</span>
          </Box>
          <Box className="restaurant-location">
            <FaMapMarkerAlt className="icon" />
            <span>{location}</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantCard;
