import React from 'react';
import '../custom.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Section 1: Company Introduction */}
      <section className="about-company-intro">
        <div className="container">
          <h2 className="about-section-title">About SportsTXT</h2>
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
      <section className="about-key-people">
        <div className="container">
          <h2 className="about-section-title">Key People</h2>
          <div className="about-row justify-content-between">
            {/* Replace with actual key people info */}
            <div className="col-md-3">
              <div className="about-card">
                <img
                  src="https://via.placeholder.com/150"
                  className="about-card-img-top"
                  alt="Key person"
                />
                <div className="about-card-body">
                  <h5 className="about-card-title">John Doe</h5>
                  <p className="about-card-text">CEO, NMS Productions BV</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="about-card">
                <img
                  src="https://via.placeholder.com/150"
                  className="about-card-img-top"
                  alt="Key person"
                />
                <div className="about-card-body">
                  <h5 className="about-card-title">Jane Smith</h5>
                  <p className="about-card-text">COO, NMS Productions BV</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="about-card">
                <img
                  src="https://via.placeholder.com/150"
                  className="about-card-img-top"
                  alt="Key person"
                />
                <div className="about-card-body">
                  <h5 className="about-card-title">Alice Johnson</h5>
                  <p className="about-card-text">CTO, NMS Productions BV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <div className="about-cta-block border-top">
        <section className="text-center my-5">
            <h2>Get in touch</h2>
            <button className="btn btn-outline-blue">Build A Unified Community with SportsTXT</button>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
