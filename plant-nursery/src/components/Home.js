import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Sugandha</h1>
          <p className="hero-subtitle">Farms and Nursery</p>
          <p className="hero-description">
            Your trusted partner in bringing nature's beauty to your home and garden.
            We provide premium quality plants, expert care advice, and everything you need
            to create your perfect green space.
          </p>
          <button className="hero-button">Explore Our Plants</button>
        </div>
        <div className="hero-images">
          <div className="image-column-left">
            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop" alt="Beautiful plants" />
            <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=200&fit=crop" alt="Garden view" />
          </div>
          <div className="image-column-right">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=420&fit=crop" alt="Lush plants" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;