import React, { useState } from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa"; // Icons for rating and location
import "./restaurant-card.scss"; // CSS for styling the card
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RestaurantCard = ({ name, imageUrl, rating, location }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  function toTitleCase(text) {
    return text
      ?.toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const handleFavoriteToggle = () => {
    setIsFavorited((prev) => !prev);
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
          backgroundColor: isFavorited ? "#fc7b6b" : "#e0e0e0",
          color: isFavorited ? "#fff" : "#000",
          "&:hover": {
            backgroundColor: isFavorited ? "#e25445" : "#d0d0d0",
          },
          "&:focus": {
            outline: "none",
          },
        }}
      >
        {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
