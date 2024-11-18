import React, { useState } from "react";
import "./profile.scss";
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import RestaurantCard from "../RestaurantCard";

const Profile = () => {
  // State for the form fields
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Error state for validation
  const [formErrors, setFormErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangePassword = () => {
    let isValid = true;
    const errors = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    if (!formData?.oldPassword) {
      errors.oldPassword = "Old Password is required";
      isValid = false;
    }
    if (!formData?.newPassword) {
      errors.newPassword = "New Password is required";
      isValid = false;
    }
    if (!formData?.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
      isValid = false;
    }

    // Check password length
    if (formData?.newPassword && formData?.newPassword.length < 8) {
      errors.newPassword = "Password must be at least 8 characters";
      isValid = false;
    }

    // Check if passwords match
    if (formData?.newPassword !== formData?.confirmPassword) {
      errors.confirmPassword = "Confirm Password does not match New Password";
      isValid = false;
    }

    setFormErrors(errors);

    if (!isValid) {
      //   setIsLoading(false);
      return;
    }
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function toTitleCase(text) {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <Box className="profile-content">
      <Box className="profile-title">
        <Typography variant="columnHeading" color="#004687">
          MY PROFILE
        </Typography>
      </Box>
      <Box className="profile-details-container">
        <Box className="profile-details">
          {/* <Typography variant="category" color="#004687">
            PROFILE DETAILS
          </Typography> */}
          <Box className="profile">
            <Typography variant="boldHaveAccount">Full Name:</Typography>
            <Typography variant="cardTitle">
              {toTitleCase(
                JSON.parse(sessionStorage.getItem("user"))?.username
              )}
            </Typography>
          </Box>
          <Box className="profile">
            <Typography variant="boldHaveAccount">Email:</Typography>
            <Typography variant="cardTitle">
              {toTitleCase(JSON.parse(sessionStorage.getItem("user"))?.email)}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid container className="tabs">
        <Grid item size={{ xs: 6 }}>
          <Box className="favourites">
            <Typography variant="category" color="#004687">
              FAVOURITES
            </Typography>
            <Box>
              <RestaurantCard
                name="Spicy Kitchen"
                imageUrl="https://placehold.co/300x300"
                rating="4.4"
                location="Shankar Vilas"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item size={{ xs: 6 }}>
          <Box className="my-reviews">
            <Typography variant="category" color="#004687">
              MY REVIEWS
            </Typography>
            <Box>
              <RestaurantCard
                name="Spicy Kitchen"
                imageUrl="https://placehold.co/300x300"
                rating="4.4"
                location="Shankar Vilas"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
