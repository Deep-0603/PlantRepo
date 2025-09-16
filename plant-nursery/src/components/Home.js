import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleExploreClick = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to plants section
      const plantsSection = document.getElementById('plants');
      if (plantsSection) {
        plantsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on a different page, navigate to home page and then scroll
      navigate('/', { replace: true });
      setTimeout(() => {
        const plantsSection = document.getElementById('plants');
        if (plantsSection) {
          plantsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <section className="home" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Bringing Nature Home,</h1>
          <p className="hero-subtitle">One Plant at a Time</p>
          <p className="hero-description">
          At Sugandha Farms and Nursery, we nurture nature with love and care. From indoor greens vibrant flowering plants, we bring freshness, beauty, and tranquility to your home and office.
          </p>
          <button className="hero-button" onClick={handleExploreClick}>Explore Our Plants</button>
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