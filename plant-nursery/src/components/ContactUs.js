import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="company-name">SUGANDHA</h2>
          <p className="company-subtitle">Farms and Nursery</p>
        </div>
        <div className="contact-info">
          <div className="contact-box">
            <p><strong>Address:</strong> Maan Enclave Villl, near Gurukul, Khera Khurd-110082, Delhi </p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> info@sugandhafarms.com</p>
          </div>
        </div>
        <button className="contact-button">Get in Touch</button>
      </div>
    </section>
  );
};

export default ContactUs;