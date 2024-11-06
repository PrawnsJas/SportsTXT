import React from 'react';
import '../custom.css'; 
import logo from '../assets/NMS Productions.png';

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* Left section - Black background */}
      <div className="contact-left">
        <h2>Amsterdam Office</h2>
        <p>NMS PRODUCTIONS EUROPE B.V.Herengracht 257, 1016 BJ,
        Amsterdam, The Netherlands</p>
        <img 
            src={logo} 
            alt="SportsTXT Logo" 
            style={{ height: '40px', width: 'auto', marginRight: '10px' }} 
            className="d-inline-block align-top"
          />
          <p>NMS PRODUCTIONS EUROPE B.V.</p>
{/*         <address>
          NMS PRODUCTIONS EUROPE B.V.<br />
        </address> */}
      </div>

      {/* Right section - Image background */}
      <div className="contact-right">
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="industry" className="form-label">Industry</label>
              <input type="text" className="form-control" id="industry" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
