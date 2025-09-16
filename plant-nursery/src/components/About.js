import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-heading">About Us</h2>
          <p className="about-description">
            With over 15 years of experience in the nursery business, Sugandha Farms and Nursery
            has been dedicated to providing the highest quality plants and exceptional customer service.
            Our passion for gardening and commitment to sustainable practices has made us a trusted
            name in the community.
          </p>
          <p className="about-description">
            We specialize in a wide variety of indoor plants, outdoor garden plants, flowering plants,
            medicinal herbs, and succulents. Our expert team is always ready to provide guidance on
            plant care, garden design, and creating the perfect green space for your home or office.
          </p>
          <div className="about-features">
            <div className="feature">
              <h3>15+ Years Experience</h3>
              <p>Trusted expertise in plant care</p>
            </div>
            <div className="feature">
              <h3>Premium Quality</h3>
              <p>Only the healthiest plants</p>
            </div>
            <div className="feature">
              <h3>Expert Guidance</h3>
              <p>Professional plant care advice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;