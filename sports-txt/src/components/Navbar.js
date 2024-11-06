import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo only white.png';
import '../custom.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logo} 
            alt="SportsTXT Logo" 
            style={{ height: '40px', width: 'auto', marginRight: '10px' }} 
            className="d-inline-block align-top"
          />
          <span className="d-none d-lg-inline">SportsTXT</span> 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-custom ms-2" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
