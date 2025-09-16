import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="company-name">Sugandha</h2>
          <p className="company-subtitle">Farms and Nursery</p>
        </div>
        <div className="contact-info">
          <div className="contact-line">
            <strong>Address:</strong> 123 Green Valley Road, Garden District, Mumbai - 400001
          </div>
          <div className="contact-line">
            <strong>Email:</strong> info@sugandhafarns.com | sales@sugandhafarns.com
          </div>
          <div className="contact-line">
            <strong>Phone:</strong> +91 98765 43210 | +91 87654 32109
          </div>
        </div>
        <button className="contact-button">Get in Touch</button>
      </div>
    </section>
  );
};

export default ContactUs;