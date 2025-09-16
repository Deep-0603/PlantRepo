import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on a different page, navigate to home page
      navigate('/');
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If on home page, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on a different page, navigate to home page and then scroll
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <div className="logo-text">
            <h2 className="logo-main">SUGANDHA</h2>
            <span className="logo-sub">Farms & Nursery</span>
          </div>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
          </li>
          <li className="nav-item">
            <a href="#plants" className="nav-link" onClick={(e) => handleNavClick(e, 'plants')}>Plants</a>
          </li>
          <li className="nav-item">
            <a href="#clients" className="nav-link" onClick={(e) => handleNavClick(e, 'clients')}>Clients</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" className="nav-link" onClick={(e) => handleNavClick(e, 'testimonials')}>Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;