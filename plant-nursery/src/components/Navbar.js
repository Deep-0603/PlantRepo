import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Sugandha</h2>
          {/* <span>Farms & Nursery</span> */}
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#plants" className="nav-link">Plants</a>
          </li>
          <li className="nav-item">
            <a href="#clients" className="nav-link">Clients</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" className="nav-link">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;