// src/pages/FeaturesPage.js
import React from 'react';

const FeaturesPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-5">Features</h1>

      {/* Fanzone Section */}
      <section className="mb-4">
        <h2>Fanzone</h2>
        <p>
          Empower your supporters in the Fanzone, a moderated platform for interaction and involvement. Fans can create public and private subgroups for sharing content and building a supportive community. Enhance your organization's community engagement with the Fanzone.
        </p>
      </section>

      {/* Video Section */}
      <section className="mb-4">
        <h2>Video</h2>
        <p>
          Make your members feel special by offering them workouts, interviews, live matches, and even behind-the-scenes content. We support a range of video platforms, so you can easily upload videos from your phone.
        </p>
      </section>

      {/* Podcasts Section */}
      <section className="mb-4">
        <h2>Podcasts</h2>
        <p>
          Weekly updates, interviews, or tips of the week? Record a podcast on your phone and share it with your community.
        </p>
      </section>

      {/* SMS Section */}
      <section className="mb-4">
        <h2>SMS</h2>
        <p>
          Want to get your fans instantly involved with the latest updates? Send personalized SMS messages straight to your members' phones and show them that you value their membership.
        </p>
      </section>

      {/* Photo Section */}
      <section className="mb-4">
        <h2>Photo</h2>
        <p>
          Publish photos from games, training sessions, or events. Make it more personal by adding emojis, customizing colors, and including text. It’s a great way to document and share all the big moments.
        </p>
      </section>

      {/* Polls Section */}
      <section className="mb-4">
        <h2>Polls</h2>
        <p>
          Get real-time feedback from your fans. Ask questions and test their knowledge with our online quizzes and voting features.
        </p>
      </section>

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

export default FeaturesPage;
