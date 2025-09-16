import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Sugandha Farms provides the highest quality plants. Their service is exceptional and plants arrive in perfect condition. I highly recommend them for all your gardening needs.",
      name: "Priya Sharma"
    },
    {
      id: 2,
      text: "Amazing variety of plants and excellent customer support. My garden has never looked better thanks to their healthy and beautiful plants. Will definitely order again!",
      name: "Raj Patel"
    },
    {
      id: 3,
      text: "Professional service and top-quality nursery products. They helped me create the perfect indoor garden setup. The plants are thriving and my home looks amazing.",
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