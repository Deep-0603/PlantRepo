import React from 'react';
import './FlashCards.css';

const FlashCards = () => {
  const cards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
      title: "Indoor Plants",
      subtitle: "Perfect for your home decoration"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300&h=200&fit=crop",
      title: "Garden Plants",
      subtitle: "Beautiful outdoor garden varieties"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=300&h=200&fit=crop",
      title: "Flowering Plants",
      subtitle: "Colorful blooms for every season"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&h=200&fit=crop",
      title: "Medicinal Plants",
      subtitle: "Natural herbs for health benefits"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
      title: "Succulents",
      subtitle: "Low maintenance desert plants"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300&h=200&fit=crop",
      title: "Fruit Plants",
      subtitle: "Fresh fruits from your own garden"
    }
  ];

  return (
    <section className="flashcards" id="plants">
      <div className="container">
        <div className="cards-grid">
          {cards.map(card => (
            <div key={card.id} className="card">
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