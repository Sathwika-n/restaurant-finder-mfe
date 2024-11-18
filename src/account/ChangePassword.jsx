import React, { useState } from "react";
import "./change-password.scss";
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";

const ChangePassword = () => {
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
    <Box className="change-password">
      <Typography variant="columnHeading" color="#004687">
        CHANGE PASSWORD
      </Typography>
      <Box className="change-password-container">
        <Box className="change-password-form">
          <Box>
            <Typography variant="h6">
              {toTitleCase(JSON.parse(sessionStorage.getItem("user")).email)}
            </Typography>
          </Box>

          <Box>
            <TextField
              required
              name="oldPassword"
              type="password"
              placeholder="Your Old Password"
              value={formData?.oldPassword}
              onChange={handleInputChange}
              margin="normal"
            />
            {formErrors?.oldPassword && (
              <FormHelperText
                error
                sx={{ marginLeft: 2, fontStyle: "DM Sans" }}
              >
                {formErrors?.oldPassword}
              </FormHelperText>
            )}
          </Box>

          <Box>
            <TextField
              required
              name="newPassword"
              type="password"
              placeholder="Your New Password"
              value={formData?.newPassword}
              onChange={handleInputChange}
              margin="normal"
            />
            {formErrors?.newPassword && (
              <FormHelperText
                error
                sx={{ marginLeft: 2, fontStyle: "DM Sans" }}
              >
                {formErrors?.newPassword}
              </FormHelperText>
            )}
          </Box>

          <Box>
            <TextField
              required
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData?.confirmPassword}
              onChange={handleInputChange}
              margin="normal"
            />
            {formErrors?.confirmPassword && (
              <FormHelperText
                error
                sx={{ marginLeft: 2, fontStyle: "DM Sans" }}
              >
                {formErrors?.confirmPassword}
              </FormHelperText>
            )}
          </Box>

          <Button variant="regular" onClick={handleChangePassword}>
            Change Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;
