import React from "react";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Eats Near You</strong>, your trusted companion for
        discovering the best dining experiences near you!
      </p>
      <p>
        We understand that finding the perfect place to eat—whether for a casual
        outing, a family dinner, or a special occasion—can be a challenge.
        That’s why we’ve created a platform that makes it easy for you to
        explore top-rated restaurants customized to your preferences.
      </p>

      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <ul>
          <li>
            <strong>Personalized Recommendations:</strong> Use our search
            feature to find restaurants that match your tastes and location.
          </li>
          <li>
            <strong>Ratings and Reviews:</strong> We curate authentic ratings
            and reviews from fellow food enthusiasts to help you make delicious
            decisions.
          </li>
          <li>
            <strong>Convenience at Your Fingertips:</strong> From cozy cafes to
            fine dining, we ensure you’ll always find the best options nearby.
          </li>
        </ul>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          At <strong>Eats Near You</strong>, we aim to connect people with great
          food and memorable dining experiences. Whether you’re exploring new
          cuisines or revisiting favorites, our platform is designed to save you
          time and effort while delivering excellent results.
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Up-to-date information about restaurants and reviews.</li>
          <li>
            A growing community of food lovers who share their experiences.
          </li>
          <li>
            We’re more than just a search tool; we’re your gateway to
            discovering the flavors of your favorite destinations and beyond.
          </li>
        </ul>
      </section>

      <section className="join-us">
        <h2>Join Us on This Culinary Journey</h2>
        <p>
          Start exploring now and let <strong>Eats Near You</strong> guide you
          to your next favorite meal!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
