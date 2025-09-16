import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Highest quality plants with exceptional service. Highly recommended!",
      name: "Priya Sharma"
    },
    {
      id: 2,
      text: "Amazing variety and excellent support. My garden looks perfect!",
      name: "Raj Patel"
    },
    {
      id: 3,
      text: "Professional service and top-quality products. Plants are thriving!",
      name: "Meera Singh"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-heading">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-text">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;