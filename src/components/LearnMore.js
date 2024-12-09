// src/components/LearnMore.js
import React from 'react';
import './LearnMore.css'; // Optional CSS for styling

const LearnMore = () => {
  return (
    <div className="learn-more-container">
      <h1>Learn More</h1>
      <p>
        Welcome to the Learn More page! Here you can find additional information about our services,
        values, and mission. Explore and get to know more about us.
      </p>
      <button onClick={() => window.history.back()} className="go-back-btn">
        Go Back
      </button>
    </div>
  );
};

export default LearnMore;
