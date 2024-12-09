import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
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
          <li><a href="#about">About Us</a></li>
          <li><a href="#transformation">Services</a></li>
          <li><a href="#values">Enroll</a></li>
          <li><a href="#center">Center</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#video">Video</a></li>
          <li><a href="#registercase">Register Case</a></li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button
          className="btn"
          onClick={() => document.getElementById('donate-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          DONATE
        </button>
        <Link to="/login" className="btn login-btn">
          LOGIN
        </Link>
      </div>
    </header>
  );
};

export default Header;
