// src/components/Footer.js
import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" className="footer-logo-img" />
          <p className="footer-description">Bringing quality services to your doorstep.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="/"  className="social-icon"><i className="bi bi-facebook"></i></a></li>
            <li><a href="/"  className="social-icon"><i className="bi bi-twitter"></i></a></li>
            <li><a href="/"  className="social-icon"><i className="bi bi-linkedin"></i></a></li>
            <li><a href="/"  className="social-icon"><i className="bi bi-instagram"></i></a></li>
            <li><a href="/"  className="social-icon"><i className="bi bi-youtube"></i></a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p><i className="bi bi-envelope"></i> support@sportstxt.com</p>
          <p><i className="bi bi-geo-alt"></i> NMS PRODUCTIONS EUROPE B.V.<br />Herengracht 257, 1016 BJ,<br />Amsterdam, The Netherlands</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SportsTXT. All Rights Reserved.</p>
        <div className="footer-terms">
          <a href="/">Terms of Service</a> | <a href="/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
