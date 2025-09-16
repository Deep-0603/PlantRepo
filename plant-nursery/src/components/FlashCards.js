import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlashCards.css';

const FlashCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
      title: "Indoor Plants",
      subtitle: "Perfect for your home decoration",
      category: "indoor-plants"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=300&h=200&fit=crop",
      title: "Flowering Plants",
      subtitle: "Colorful blooms for every season",
      category: "flowering-plants"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      title: "Winter Season Plants",
      subtitle: "Hardy plants that thrive in cold weather",
      category: "winter-plants"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=300&h=200&fit=crop",
      title: "Summer Season Plants",
      subtitle: "Heat-resistant plants for sunny seasons",
      category: "summer-plants"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1596348086656-c4d0a5f5c5fe?w=300&h=200&fit=crop",
      title: "Rainy Season Plants",
      subtitle: "Plants that love monsoon weather",
      category: "rainy-plants"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300&h=200&fit=crop",
      title: "Outdoor Plants",
      subtitle: "Beautiful garden and landscape plants",
      category: "outdoor-plants"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1509423350716-97f2360af8e4?w=300&h=200&fit=crop",
      title: "Table Top Plants",
      subtitle: "Small plants perfect for desks and tables",
      category: "tabletop-plants"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1558618666-1c815d2bf6b7?w=300&h=200&fit=crop",
      title: "Grass",
      subtitle: "Various grass types for lawns and landscapes",
      category: "grass"
    }
  ];

  const handleCardClick = (category) => {
    navigate(`/category/${category}`);
    // Scroll to top when navigating to category page
    window.scrollTo(0, 0);
  };

  return (
    <section className="flashcards" id="plants">
      <div className="container">
        <h2 className="section-heading">Our Plants</h2>
        <div className="cards-grid">
          {cards.map(card => (
            <div
              key={card.id}
              className="card"
              onClick={() => handleCardClick(card.category)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashCards;