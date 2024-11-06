// src/pages/HomePage.js
import React from 'react';
import sec1 from '../assets/david-morris.jpg';
import sec2 from '../assets/eddieo.jpg';
import sec3 from '../assets/omar.jpg';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';

const HomePage = () => {
  return (
    <div className="container-fluid">
      {/* Masthead Section */}
      <div className="masthead">
        <section className="text-center my-5 text-light">
          <h1>Creating Value Off the Pitch with a Fan First Engagement Platform</h1>
          <p>Find fellow fans of your favorite teams! Create an account now and join the millions of sports enthusiasts around the world!</p>
          <button className="btn btn-outline-custom">Become a Member</button>
        </section>
      </div>

        {/* Alternating 50/50 Sections */}
        <div className="alternating">
            <section className="my-5">
                <div className="row">
                  <div className="col-md-6">
                    <h2>What Is SportsTXT?</h2>
                    <p>Being a sports fan is not just about watching games. SportsTXT is
                      an online platform designed to deliver the ultimate sports fan
                      experience. Engage with other fans, get insider facts about your
                      favorite teams, and so much more.</p>
                  </div>
                  <div className="col-md-6 sec-img">
                    <img src={sec1} alt="What is SportsTXT" className="section-img" />

                  </div>
                </div>
              </section>
            

            <section className="my-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={sec2} alt="How it works" className="section-img" />
                </div>
                <div className="col-md-6">
                  <h2>Our Mission</h2>
                  <p>Our mission is to provide our users with a seamless and enjoyable
                  online experience, offering a diverse range of high-quality content
                  and services that inform, inspire, and engage. Through innovative
                  design and intuitive functionality, we aim to create a platform that
                  connects people and facilitates meaningful interactions.</p>
                </div>
              </div>
            </section>

            <section className="my-5">
              <div className="row">
                <div className="col-md-6">
                  <h2>How It Works</h2>
                  <p>SportsTXT is a fully customizable community platform that
                    connects directly with members and fans in real-time giving them
                    a true sense of belonging. <br /><br />
                    It provides sports clubs and teams with a unique opportunity to
                    create more personalized experiences and open up new revenue
                    streams. You’ll be able to capture valuable data and tailor content
                    to specific member segments.</p>
                </div>
                <div className="col-md-6">
                  <img src={sec3} alt="Wha" className="section-img" />
                </div>
              </div>
            </section>
        </div>
        
      {/* The Platform of Firsts Section */}
      <div className="platform">
        <section>
          <h1 className="text-center mb-5">The Platform of Firsts</h1>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card shadow">
                <img src={card1} alt="Members First Icon" className="card-img-top" />
                <div className="card-body">
                  <h2 className="card-title">Members First</h2>
                  <p className="card-text">
                    It's time to elevate your fan engagement beyond just using social media. SportsTXT brings your members straight into the heart of your club through exclusive stories, new experiences, games, and unique offers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow">
                <img src={card2} alt="Safety First Icon" className="card-img-top" />
                <div className="card-body">
                  <h2 className="card-title">Safety First</h2>
                  <p className="card-text">
                    SportsTXT offers 24/7 protection for sports clubs with real-time monitoring and content analysis powered by a combination of human expertise and AI technology. Clubs can be confident in the quality and safety of their reputation and all user-generated content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow">
                <img src={card3} alt="Data First Icon" className="card-img-top" />
                <div className="card-body">
                  <h2 className="card-title">Data First</h2>
                  <p className="card-text">
                    Contrary to social media, you have full ownership of your data. Your personal dashboard collects and analyzes important insights about members' usage of the platform, demographics, and other data to help you make better business decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow">
                <img src={card4} alt="Value First Icon" className="card-img-top" />
                <div className="card-body">
                  <h2 className="card-title">Value First</h2>
                  <p className="card-text">
                    By making a few small tweaks in the way you present your content, you will be amazed at how it can significantly boost your profits. You have the opportunity to set your content prices based on your own judgment and enhance its worth with the support of sponsors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      

      {/* CTA Block */}
      <div className="cta-block border-top">
        <section className="text-center my-5">
            <h2>Get in touch</h2>
            <button className="btn btn-outline-blue">Build A Unified Community with SportsTXT</button>
          </section>
        </div>
      </div>
    
  );
};

export default HomePage;
