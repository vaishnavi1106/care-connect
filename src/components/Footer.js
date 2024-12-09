import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div>© 2024 Next Gen Builders</div>
    <div>Contact: info@ngb.com | 123-456-7890</div>
    <button className="btn" onClick={() => window.location.href = '/donate'}>CONTACT</button>
  </footer>

);

export default Footer;
