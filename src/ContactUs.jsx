import React, { useState } from "react";
import "./contact.scss";
import { Box, Button, Typography } from "@mui/material";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (e.g., send data to API or email)
    console.log("Feedback submitted: ", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box className="contact-container">
      <Typography variant="title">Contact Us</Typography>
      <Typography variant="reviewContent">
        We're here to help you find the perfect dining experience! Whether you
        have a question, feedback, or a suggestion to improve our service, we'd
        love to hear from you.
      </Typography>

      <Box className="contact-info">
        <Typography variant="columnHeading">Get in Touch</Typography>
        <Box>
          <Typography>
            <strong>Email:</strong> support@eatsnearyou.com
          </Typography>
        </Box>
        <Box>
          <Typography>
            <strong>Phone:</strong> +123 456 7890
          </Typography>
        </Box>
        <Box>
          <Typography>
            <strong>Business Hours:</strong> Monday – Friday, 9:00 AM to 6:00 PM
          </Typography>
        </Box>
      </Box>

      <Box className="feedback">
        <h2>Have a Suggestion?</h2>
        <Box>
          Is there a feature you'd like to see or a restaurant you'd like us to
          add? Let us know through our feedback form.
        </Box>

        <Box>
          <Box>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Box>

          <Box>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Box>

          <Box>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Box>

          <Button variant="contained" onClick={handleSubmit}>
            Submit Feedback
          </Button>
        </Box>
      </Box>

      <Box className="social-media">
        <Typography variant="columnHeading">
          Follow Us for the Latest Updates
        </Typography>
        <Typography variant="columnHeading">
          Stay connected for dining tips and more:
        </Typography>
        <Box className="social-links">
          <a
            href="https://www.facebook.com/EatsNearYou"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/EatsNearYour"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/EatsNearYou"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </Box>
      </Box>

      <Box className="response-time">
        <Typography>
          We strive to respond to all inquiries within 24 hours. Thank you for
          being part of our community!
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUs;
