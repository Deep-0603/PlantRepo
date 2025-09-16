import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PlantCategory.css';

const plantsData = {
  'indoor-plants': [
    {
      id: 1,
      name: 'Snake Plant',
      image: 'https://images.unsplash.com/photo-1509423350716-97f2360af8e4?w=300&h=300&fit=crop',
      description: 'Perfect for beginners, requires minimal care and purifies air.'
    },
    {
      id: 2,
      name: 'Monstera Deliciosa',
      image: 'https://images.unsplash.com/photo-1545165375-5b8ab446c99d?w=300&h=300&fit=crop',
      description: 'Beautiful large leaves, brings tropical vibes to any room.'
    },
    {
      id: 3,
      name: 'Pothos',
      image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=300&h=300&fit=crop',
      description: 'Easy-growing vine plant, excellent for hanging baskets.'
    },
    {
      id: 4,
      name: 'Peace Lily',
      image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=300&h=300&fit=crop',
      description: 'Elegant white flowers, thrives in low light conditions.'
    },
    {
      id: 5,
      name: 'Rubber Plant',
      image: 'https://images.unsplash.com/photo-1586093218818-bc3f4b3c9b6a?w=300&h=300&fit=crop',
      description: 'Glossy green leaves, great statement plant for corners.'
    },
    {
      id: 6,
      name: 'ZZ Plant',
      image: 'https://images.unsplash.com/photo-1597150492038-b3de04b2b2d8?w=300&h=300&fit=crop',
      description: 'Extremely drought tolerant, perfect for busy lifestyles.'
    }
  ],
  'flowering-plants': [
    {
      id: 7,
      name: 'Rose Bush',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=300&h=300&fit=crop',
      description: 'Classic beauty with fragrant blooms in various colors.'
    },
    {
      id: 8,
      name: 'Hibiscus',
      image: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=300&h=300&fit=crop',
      description: 'Vibrant tropical flowers, blooms throughout the season.'
    },
    {
      id: 9,
      name: 'Marigold',
      image: 'https://images.unsplash.com/photo-1595859608246-d7bbd0085dbc?w=300&h=300&fit=crop',
      description: 'Bright orange and yellow flowers, easy to grow annual.'
    },
    {
      id: 10,
      name: 'Sunflower',
      image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=300&h=300&fit=crop',
      description: 'Tall and cheerful, follows the sun throughout the day.'
    },
    {
      id: 11,
      name: 'Dahlia',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop',
      description: 'Stunning variety of colors and shapes, summer bloomer.'
    },
    {
      id: 12,
      name: 'Petunia',
      image: 'https://images.unsplash.com/photo-1597002725671-2c7c8c3f1b8d?w=300&h=300&fit=crop',
      description: 'Colorful trumpet-shaped flowers, great for containers.'
    }
  ],
  'winter-plants': [
    {
      id: 25,
      name: 'Winter Jasmine',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      description: 'Bright yellow flowers that bloom in winter months.'
    },
    {
      id: 26,
      name: 'Pansy',
      image: 'https://images.unsplash.com/photo-1553692618-de8f99cd5fed?w=300&h=300&fit=crop',
      description: 'Colorful flowers that thrive in cool winter weather.'
    },
    {
      id: 27,
      name: 'Winter Cherry',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=300&fit=crop',
      description: 'Ornamental plant with bright red berries in winter.'
    },
    {
      id: 28,
      name: 'Cyclamen',
      image: 'https://images.unsplash.com/photo-1515734674582-ace79194576a?w=300&h=300&fit=crop',
      description: 'Beautiful indoor flowering plant for winter season.'
    }
  ],
  'summer-plants': [
    {
      id: 29,
      name: 'Bougainvillea',
      image: 'https://images.unsplash.com/photo-1558618666-9e0c9885e46a?w=300&h=300&fit=crop',
      description: 'Vibrant flowering vine that loves hot summer sun.'
    },
    {
      id: 30,
      name: 'Zinnia',
      image: 'https://images.unsplash.com/photo-1597002897721-a3d732c5b6e0?w=300&h=300&fit=crop',
      description: 'Colorful annual flowers perfect for summer gardens.'
    },
    {
      id: 31,
      name: 'Portulaca',
      image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=300&h=300&fit=crop',
      description: 'Drought-resistant flower that blooms all summer.'
    },
    {
      id: 32,
      name: 'Ixora',
      image: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=300&h=300&fit=crop',
      description: 'Tropical shrub with clusters of bright flowers.'
    }
  ],
  'rainy-plants': [
    {
      id: 33,
      name: 'Begonia',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop',
      description: 'Beautiful flowering plant that thrives in monsoon.'
    },
    {
      id: 34,
      name: 'Caladium',
      image: 'https://images.unsplash.com/photo-1596348086656-c4d0a5f5c5fe?w=300&h=300&fit=crop',
      description: 'Colorful foliage plant perfect for rainy season.'
    },
    {
      id: 35,
      name: 'Impatiens',
      image: 'https://images.unsplash.com/photo-1597002725671-2c7c8c3f1b8d?w=300&h=300&fit=crop',
      description: 'Continuous blooming flowers that love moisture.'
    },
    {
      id: 36,
      name: 'Coleus',
      image: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?w=300&h=300&fit=crop',
      description: 'Vibrant colored leaves, perfect for monsoon planting.'
    }
  ],
  'outdoor-plants': [
    {
      id: 37,
      name: 'Bonsai Tree',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300&h=300&fit=crop',
      description: 'Miniature trees perfect for outdoor garden display.'
    },
    {
      id: 38,
      name: 'Palm Tree',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop',
      description: 'Tropical trees that create beautiful outdoor landscapes.'
    },
    {
      id: 39,
      name: 'Croton',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop',
      description: 'Colorful outdoor shrub with vibrant foliage.'
    },
    {
      id: 40,
      name: 'Ficus',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop',
      description: 'Large outdoor tree perfect for landscaping.'
    }
  ],
  'tabletop-plants': [
    {
      id: 41,
      name: 'Mini Cactus',
      image: 'https://images.unsplash.com/photo-1509423350716-97f2360af8e4?w=300&h=300&fit=crop',
      description: 'Tiny decorative cactus perfect for desk spaces.'
    },
    {
      id: 42,
      name: 'Small Fern',
      image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=300&h=300&fit=crop',
      description: 'Compact fern ideal for small indoor spaces.'
    },
    {
      id: 43,
      name: 'Air Plant',
      image: 'https://images.unsplash.com/photo-1545165375-5b8ab446c99d?w=300&h=300&fit=crop',
      description: 'Unique plants that grow without soil, perfect for tables.'
    },
    {
      id: 44,
      name: 'Mini Succulent',
      image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=300&h=300&fit=crop',
      description: 'Small succulent arrangements for desktop decoration.'
    }
  ],
  'grass': [
    {
      id: 45,
      name: 'Bermuda Grass',
      image: 'https://images.unsplash.com/photo-1558618666-1c815d2bf6b7?w=300&h=300&fit=crop',
      description: 'Durable lawn grass that withstands heavy foot traffic.'
    },
    {
      id: 46,
      name: 'Zoysia Grass',
      image: 'https://images.unsplash.com/photo-1541618456493-64e6c5b63d82?w=300&h=300&fit=crop',
      description: 'Dense, soft grass perfect for residential lawns.'
    },
    {
      id: 47,
      name: 'St. Augustine Grass',
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=300&h=300&fit=crop',
      description: 'Thick, lush grass ideal for warm climate lawns.'
    },
    {
      id: 48,
      name: 'Ornamental Grass',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2ac5?w=300&h=300&fit=crop',
      description: 'Decorative grass varieties for landscape design.'
    }
  ]
};

const categoryNames = {
  'indoor-plants': 'Indoor Plants',
  'flowering-plants': 'Flowering Plants',
  'herbs': 'Herbs',
  'succulents': 'Succulents',
  'winter-plants': 'Winter Season Plants',
  'summer-plants': 'Summer Season Plants',
  'rainy-plants': 'Rainy Season Plants',
  'outdoor-plants': 'Outdoor Plants',
  'tabletop-plants': 'Table Top Plants',
  'grass': 'Grass'
};

const PlantCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const plants = plantsData[category] || [];
  const categoryName = categoryNames[category] || 'Plants';

  // Scroll to top when component mounts or category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="plant-category">
      <div className="container">
        <div className="category-header">
          <h1 className="category-title">{categoryName}</h1>
          <p className="category-description">
            Discover our beautiful collection of {categoryName.toLowerCase()} perfect for your home and garden.
          </p>
        </div>

        <div className="plants-grid">
          {plants.map(plant => (
            <div key={plant.id} className="plant-card">
              <div className="plant-image">
                <img src={plant.image} alt={plant.name} />
              </div>
              <div className="plant-info">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-description">{plant.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantCategory;