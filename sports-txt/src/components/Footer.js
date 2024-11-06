// src/components/Footer.js
import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image

const Footer = () => {
  return (
    <footer className="bg-light text-black py-4">
      <div className="container text-center">
        <img src={logo} alt="Logo" className="mb-3" style={{ width: '150px' }} />       
        <div className="mb-3">
          <a href="/privacy-policy" className="text-black mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-black mx-2">Terms of Service</a>
          <a href="/contact" className="text-black mx-2">Contact</a>
        </div>

        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black mx-2">
            <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black mx-2">
            <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black mx-2">
            <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black mx-2">
            <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </div>
        <div>
        <p className="mb-0">© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
