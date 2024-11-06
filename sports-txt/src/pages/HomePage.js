// src/pages/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="container mt-4">
      {/* Masthead Section */}
      <section className="text-center my-5">
        <h1>Creating Value Off the Pitch with a Fan First Engagement Platform</h1>
        <p>Find fellow fans of your favorite teams! Create an account now and join the millions of sports enthusiasts around the world!</p>
        <button className="btn btn-primary">Become a Member</button>
      </section>

      {/* Alternating 50/50 Sections */}
      <section className="my-5">
        <div className="row">
          <div className="col-md-6">
            <h2>What Is SportsTXT?</h2>
            <p>Being a sports fan is not just about watching games. SportsTXT is
              an online platform designed to deliver the ultimate sports fan
              experience. Engage with other fans, get insider facts about your
              favorite teams, and so much more.</p>
          </div>
          <div className="col-md-6">
            <h2>Section 2 - Right</h2>
            <p>block placeholder</p>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Section 3 - Left</h2>
            <p>block placeholder</p>
          </div>
          <div className="col-md-6">
            <h2>How It Works</h2>
            <p>SportsTXT is a fully customizable community platform that
              connects directly with members and fans in real-time giving them
              a true sense of belonging.
              It provides sports clubs and teams with a unique opportunity to
              create more personalized experiences and open up new revenue
              streams. You’ll be able to capture valuable data and tailor content
              to specific member segments.</p>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="row">
          <div className="col-md-6">
            <h2>What Is SportsTXT?</h2>
            <p>Being a sports fan is not just about watching games. SportsTXT is
              an online platform designed to deliver the ultimate sports fan
              experience. Engage with other fans, get insider facts about your
              favorite teams, and so much more.</p>
          </div>
          <div className="col-md-6">
            <h2>Section 2 - Right</h2>
            <p>block placeholder</p>
          </div>
        </div>
      </section>

      {/* The Platform of Firsts Section */}
      <section className="my-5">
        <h2>The Platform of Firsts</h2>
        <div className="row">
          <div className="col-md-3">
            <h3>Members First</h3>
            <p>It's time to elevate your fan engagement beyond just using social
              media and SportsTXT brings your members straight into the heart
              of your club through exclusive stories, new experiences, games
              and unique offers.</p>
          </div>
          <div className="col-md-3">
            <h3>Safety First</h3>
            <p>SportsTXT offers 24/7 protection for sports clubs with real-time
              monitoring and content analysis powered by a combination of
              human expertise and AI technology. With SportsTXT, clubs can be
              confident in the quality and safety of their reputation and all
              user-generated content.</p>
          </div>
          <div className="col-md-3">
            <h3>Data First</h3>
            <p>Contrary to social media, you have full ownership of your data.
              Your personal dashboard collects and analyzes important insights
              about members' usage of the platform, demographics and other
              data to help you make better business decisions.</p>
          </div>
          <div className="col-md-3">
            <h3>Value First</h3>
            <p>By making a few small tweaks in the way you present your content,
              you will be amazed at how it can significantly boost your profits.
              You have the opportunity to set your content prices based on your
              own judgment and enhance its worth with the support of sponsors.</p>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="text-center my-5">
        <h2>Get in touch</h2>
        <button className="btn btn-primary">Build A Unified Community with SportsTXT</button>
      </section>
    </div>
  );
};

export default HomePage;
