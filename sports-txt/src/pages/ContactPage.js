// src/pages/ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-5">Contact Us</h1>

      {/* Address Section */}
      <section className="mb-4">
        <h2>Amsterdam Office</h2>
        <address>
          NMS PRODUCTIONS EUROPE B.V.<br />
          Herengracht 257, 1016 BJ, Amsterdam, The Netherlands
        </address>
      </section>

      {/* Contact Form */}
      <section className="mb-4">
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
      </section>

      {/* CTA Block */}
      <section className="text-center mt-5">
        <p>Build A Unified Community with SportsTXT</p>
      </section>
    </div>
  );
};

export default ContactPage;
