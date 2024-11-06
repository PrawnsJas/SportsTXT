import React, { useState } from 'react';
import '../custom.css';  // Import the custom CSS for styling

const FeaturesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3;
  const slides = [
    { title: "Fanzone", description: "Empower your supporters in the Fanzone, a moderated platform for interaction and involvement. Fans can create public and private subgroups for sharing content and building a supportive community. Enhance your organization's community engagement with the Fanzone." },
    { title: "Video", description: "Make your members feel special by offering them workouts, interviews, live matches, and even behind-the-scenes content. We support a range of video platforms, so you can easily upload videos from your phone." },
    { title: "Podcasts", description: "Weekly updates, interviews, or tip of the week? Record a podcast on your phone and share it with your community." },
    { title: "SMS", description: "Want to get your fans instantly involved with the latest updates? Send personalized SMS messages straight to your members' phones and show them that you value their membership." },
    { title: "Photo", description: "Publish photos from, games, training sessions or events. There’s no limit to how much you choose to share. Make it more personal by adding emojis, customizing colors and including text. It’s a great way to document and share all the big moments." },
    { title: "Polls", description: "Get real-time feedback from your fans. Ask questions and test their knowledge with our online quizzes and voting features." },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index === 0 ? 0 : 3); // 0 for first set (0, 1, 2) and 3 for second set (3, 4, 5)
  };

  return (
    <div className="features-container">
      <h1 className="text-center">Features</h1>
      <p className="mb-5">On SportsTXT, you’ll find a great mix of features enabling sports clubs and athletes to connect directly with their fans.</p>

      {/* Carousel Section */}
      <div className="carousel-container">
        <div className="carousel-slides">
          {slides.slice(currentSlide, currentSlide + slidesToShow).map((slide, index) => (
            <div key={index} className="features-card">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="dots-container">
        <div
          className={`dot ${currentSlide === 0 ? 'active' : ''}`}
          onClick={() => handleDotClick(0)}
        ></div>
        <div
          className={`dot ${currentSlide === 3 ? 'active' : ''}`}
          onClick={() => handleDotClick(3)}
        ></div>
      </div>

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

export default FeaturesPage;
