import React from 'react';
import { Link } from 'react-router-dom'; // For routing
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import logo from '../assets/logo.png';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="header-text">
        <h1>CARE-CONNECT</h1>
      </div>
      <nav className="navbtn">
        <ul>
          <li><ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink></li>
          <li><ScrollLink to="transformation" smooth={true} duration={500}>Services</ScrollLink></li>
          <li><ScrollLink to="values" smooth={true} duration={500}>Enroll</ScrollLink></li>
          <li><ScrollLink to="center" smooth={true} duration={500}>Center</ScrollLink></li>
          <li><ScrollLink to="gallery" smooth={true} duration={500}>Gallery</ScrollLink></li>
          <li><ScrollLink to="video" smooth={true} duration={500}>Video</ScrollLink></li>

          {/* Use React Router Link for routing to Registercase page */}
          <li>
            <Link to="/registercase">Register Case</Link>
          </li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button
          className="btn"
          onClick={() =>
            document.getElementById('donate-section')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          DONATE
        </button>

        {/* Corrected to use Link for navigation */}
        <Link to="/Login" className="btn login-btn">
          LOGIN
        </Link>
      </div>
    </header>
  );
};

export default Header;
