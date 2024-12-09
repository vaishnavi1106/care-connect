import React from 'react';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg'; // Import the image here
import './Hero.css';

const Hero = () => (
  <section
    className="hero"
    style={{ backgroundImage: `url(${hero3})` }} // Use the imported image here
  >
    <div className="hero-text">
      <h1>Give shelter to homeless people</h1>
      <p>You can read some information about homeless people in India. Click on the learn more button.</p>
      <button className="btn">Learn More</button>
    </div>
    <div className="hero-images">
      <img src={hero1} alt="Group of children" />
      <img src={hero2} alt="Smiling children" />
    </div>
  </section>
);

export default Hero;
