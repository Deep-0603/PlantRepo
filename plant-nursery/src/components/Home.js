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
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" alt="Beautiful plants" />
        </div>
      </div>
    </section>
  );
};

export default Home;