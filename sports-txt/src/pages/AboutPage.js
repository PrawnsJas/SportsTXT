import React from 'react';
import { Link } from 'react-router-dom';
import '../custom.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Section 1: Company Introduction */}
      <section className="company-intro">
        <div className="container py-5">
          <h2 className="section-title">About SportsTXT</h2>
          <p>
            SportsTXT is an initiative from NMS Productions BV, a division of
            New Media Services, a global company specializing in delivering
            intelligent outsourcing services through a combination of machine
            learning and human-powered activities.
          </p>
          <p>
            From fans to brands to individual content creators, NMSP designs
            and builds collaborative online platforms for our users to
            communicate, connect, learn, and share.
          </p>
        </div>
      </section>

      {/* Section 2: Key People */}
      <section className="key-people">
        <div className="container py-5">
          <h2 className="section-title">Key People</h2>
          <div className="row">
            {/* Replace with actual key people info */}
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Key person"
                />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">CEO, NMS Productions BV</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Key person"
                />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">COO, NMS Productions BV</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Key person"
                />
                <div className="card-body">
                  <h5 className="card-title">Alice Johnson</h5>
                  <p className="card-text">CTO, NMS Productions BV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action (CTA) */}
      <section className="cta-block">
        <div className="container text-center py-5">
          <h2>Get in touch</h2>
          <p>Build a Unified Community with SportsTXT</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
