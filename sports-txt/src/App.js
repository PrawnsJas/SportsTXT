// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      {/* Navbar displayed on all pages */}
      <Navbar />

      {/* Define routes for each page */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
