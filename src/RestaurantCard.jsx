import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa"; // Icons for rating and location
import "./restaurant-card.scss"; // CSS for styling the card
import { Box, Typography } from "@mui/material";

const RestaurantCard = ({ name, imageUrl, rating, location }) => {
  function toTitleCase(text) {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <Box className="restaurant-card">
      {/* Image Section */}
      <img src={imageUrl} alt={`${name}`} className="restaurant-image" />

      {/* Details Section */}
      <Box className="restaurant-details">
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
