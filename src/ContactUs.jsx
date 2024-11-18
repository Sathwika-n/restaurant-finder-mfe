import React, { useState } from "react";

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
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We’re here to help you find the perfect dining experience! Whether you
        have a question, feedback, or a suggestion to improve our service, we’d
        love to hear from you.
      </p>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          <strong>Email:</strong> support@eatsnearyou.com
        </p>
        <p>
          <strong>Phone:</strong> +123 456 7890
        </p>
        <p>
          <strong>Business Hours:</strong> Monday – Friday, 9:00 AM to 6:00 PM
        </p>
      </section>

      <section className="feedback">
        <h2>Have a Suggestion?</h2>
        <p>
          Is there a feature you'd like to see or a restaurant you'd like us to
          add? Let us know through our feedback form.
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      </section>

      <section className="social-media">
        <h2>Follow Us for the Latest Updates</h2>
        <p>Stay connected for dining tips and more:</p>
        <div className="social-links">
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
        </div>
      </section>

      <section className="response-time">
        <p>
          We strive to respond to all inquiries within 24 hours. Thank you for
          being part of our community!
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
