import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlashCards.css';

// Import local category images
import indoorPlantsImg from '../asset/images/categories/indoor-plants.jpg';
import floweringPlantsImg from '../asset/images/categories/flowering-plants.jpg';
import winterPlantsImg from '../asset/images/categories/winter-plants.jpg';
import summerPlantsImg from '../asset/images/categories/summer-plants.jpg';
import rainyPlantsImg from '../asset/images/categories/rainy-plants.jpg';
import outdoorPlantsImg from '../asset/images/categories/outdoor-plants.jpg';
import tabletopPlantsImg from '../asset/images/categories/tabletop-plants.jpg';
import grassImg from '../asset/images/categories/grass.jpg';

const FlashCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      image: indoorPlantsImg,
      title: "Indoor Plants",
      subtitle: "Perfect for your home decoration",
      category: "indoor-plants"
    },
    {
      id: 2,
      image: floweringPlantsImg,
      title: "Flowering Plants",
      subtitle: "Colorful blooms for every season",
      category: "flowering-plants"
    },
    {
      id: 3,
      image: winterPlantsImg,
      title: "Winter Season Plants",
      subtitle: "Hardy plants that thrive in cold weather",
      category: "winter-plants"
    },
    {
      id: 4,
      image: summerPlantsImg,
      title: "Summer Season Plants",
      subtitle: "Heat-resistant plants for sunny seasons",
      category: "summer-plants"
    },
    {
      id: 5,
      image: rainyPlantsImg,
      title: "Rainy Season Plants",
      subtitle: "Plants that love monsoon weather",
      category: "rainy-plants"
    },
    {
      id: 6,
      image: outdoorPlantsImg,
      title: "Outdoor Plants",
      subtitle: "Beautiful garden and landscape plants",
      category: "outdoor-plants"
    },
    {
      id: 7,
      image: tabletopPlantsImg,
      title: "Table Top Plants",
      subtitle: "Small plants perfect for desks and tables",
      category: "tabletop-plants"
    },
    {
      id: 8,
      image: grassImg,
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