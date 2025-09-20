import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PlantCategory.css';

// Import indoor plant images
import snakePlantImg from '../asset/images/plants/indoor/snake-plant.jpg';
import monsteraImg from '../asset/images/plants/indoor/monstera.jpg';
import pothosImg from '../asset/images/plants/indoor/pothos.jpg';
import peaceLilyImg from '../asset/images/plants/indoor/peace-lily.jpg';
import rubberPlantImg from '../asset/images/plants/indoor/rubber-plant.jpg';
import zzPlantImg from '../asset/images/plants/indoor/zz-plant.jpg';
import succulentImg from '../asset/images/plants/indoor/succulent.jpg';

// Import flowering plant images
import roseBushImg from '../asset/images/plants/flowering/rose-bush.jpg';
import hibiscusImg from '../asset/images/plants/flowering/hibiscus.jpg';
import marigoldImg from '../asset/images/plants/flowering/marigold.jpg';
import sunflowerImg from '../asset/images/plants/flowering/sunflower.jpg';
import dahliaImg from '../asset/images/plants/flowering/dahlia.jpg';
import petuniaImg from '../asset/images/plants/flowering/petunia.jpg';

// Import winter plant images
import winterJasmineImg from '../asset/images/plants/winter/winter-jasmine.jpg';
import pansyImg from '../asset/images/plants/winter/pansy.jpg';
import winterCherryImg from '../asset/images/plants/winter/winter-cherry.jpg';
import cyclamenImg from '../asset/images/plants/winter/cyclamen.jpg';

// Import summer plant images
import bougainvilleaImg from '../asset/images/plants/summer/bougainvillea.jpg';
import zinniaImg from '../asset/images/plants/summer/zinnia.jpg';
import portulacaImg from '../asset/images/plants/summer/portulaca.jpg';
import ixoraImg from '../asset/images/plants/summer/ixora.jpg';
import cosmoImg from '../asset/images/plants/summer/cosmo.jpg';
import jasmineImg from '../asset/images/plants/summer/jasmine.jpg';

// Import rainy plant images
import begoniaImg from '../asset/images/plants/rainy/begonia.jpg';
import caladiumImg from '../asset/images/plants/rainy/caladium.jpg';
import impatiensImg from '../asset/images/plants/rainy/impatiens.jpg';
import coleusImg from '../asset/images/plants/rainy/coleus.jpg';
import lotusImg from '../asset/images/plants/rainy/Lotus.jpg';
import rainyHibiscusImg from '../asset/images/plants/rainy/Hibiscus.jpg';

// Import outdoor plant images
import bonsaiImg from '../asset/images/plants/outdoor/bonsai.jpg';
import palmTreeImg from '../asset/images/plants/outdoor/palm-tree.jpg';
import crotonImg from '../asset/images/plants/outdoor/croton.jpg';
import ficusImg from '../asset/images/plants/outdoor/ficus.jpg';
import climberImg from '../asset/images/plants/outdoor/Climber.jpg';
import hedgeImg from '../asset/images/plants/outdoor/Hedge.jpg';

// Import tabletop plant images
import miniCactusImg from '../asset/images/plants/tabletop/mini-cactus.jpg';
import smallFernImg from '../asset/images/plants/tabletop/small-fern.jpg';
import airPlantImg from '../asset/images/plants/tabletop/air-plant.jpg';
import miniSucculentImg from '../asset/images/plants/tabletop/mini-succulent.jpg';
import jadeImg from '../asset/images/plants/tabletop/jade.jpg';

// Import grass images
import bermudaGrassImg from '../asset/images/plants/grass/bermuda-grass.jpg';
import zoysiaGrassImg from '../asset/images/plants/grass/zoysia-grass.jpg';
import stAugustineGrassImg from '../asset/images/plants/grass/st-augustine-grass.jpg';
import ornamentalGrassImg from '../asset/images/plants/grass/ornamental-grass.jpg';
import mexicanGrassImg from '../asset/images/plants/grass/Mexican Grass.jpg';
import nilgiriImg from '../asset/images/plants/grass/Nilgiri.jpg';

const plantsData = {
  'indoor-plants': [
    {
      id: 1,
      name: 'Snake Plant',
      image: snakePlantImg,
      description: 'Perfect for beginners, requires minimal care and purifies air.'
    },
    {
      id: 2,
      name: 'Monstera Deliciosa',
      image: monsteraImg,
      description: 'Beautiful large leaves, brings tropical vibes to any room.'
    },
    {
      id: 3,
      name: 'Pothos',
      image: pothosImg,
      description: 'Easy-growing vine plant, excellent for hanging baskets.'
    },
    {
      id: 4,
      name: 'Peace Lily',
      image: peaceLilyImg,
      description: 'Elegant white flowers, thrives in low light conditions.'
    },
    {
      id: 5,
      name: 'Rubber Plant',
      image: rubberPlantImg,
      description: 'Glossy green leaves, great statement plant for corners.'
    },
    {
      id: 6,
      name: 'ZZ Plant',
      image: zzPlantImg,
      description: 'Extremely drought tolerant, perfect for busy lifestyles.'
    },
    {
      id: 49,
      name: 'Succulent',
      image: succulentImg,
      description: 'Low maintenance plant perfect for indoor decoration.'
    }
  ],
  'flowering-plants': [
    {
      id: 7,
      name: 'Rose Bush',
      image: roseBushImg,
      description: 'Classic beauty with fragrant blooms in various colors.'
    },
    {
      id: 8,
      name: 'Hibiscus',
      image: hibiscusImg,
      description: 'Vibrant tropical flowers, blooms throughout the season.'
    },
    {
      id: 9,
      name: 'Marigold',
      image: marigoldImg,
      description: 'Bright orange and yellow flowers, easy to grow annual.'
    },
    {
      id: 10,
      name: 'Sunflower',
      image: sunflowerImg,
      description: 'Tall and cheerful, follows the sun throughout the day.'
    },
    {
      id: 11,
      name: 'Dahlia',
      image: dahliaImg,
      description: 'Stunning variety of colors and shapes, summer bloomer.'
    },
    {
      id: 12,
      name: 'Petunia',
      image: petuniaImg,
      description: 'Colorful trumpet-shaped flowers, great for containers.'
    }
  ],
  'winter-plants': [
    {
      id: 25,
      name: 'Winter Jasmine',
      image: winterJasmineImg,
      description: 'Bright yellow flowers that bloom in winter months.'
    },
    {
      id: 26,
      name: 'Pansy',
      image: pansyImg,
      description: 'Colorful flowers that thrive in cool winter weather.'
    },
    {
      id: 27,
      name: 'Winter Cherry',
      image: winterCherryImg,
      description: 'Ornamental plant with bright red berries in winter.'
    },
    {
      id: 28,
      name: 'Cyclamen',
      image: cyclamenImg,
      description: 'Beautiful indoor flowering plant for winter season.'
    }
  ],
  'summer-plants': [
    {
      id: 29,
      name: 'Bougainvillea',
      image: bougainvilleaImg,
      description: 'Vibrant flowering vine that loves hot summer sun.'
    },
    {
      id: 30,
      name: 'Zinnia',
      image: zinniaImg,
      description: 'Colorful annual flowers perfect for summer gardens.'
    },
    {
      id: 31,
      name: 'Portulaca',
      image: portulacaImg,
      description: 'Drought-resistant flower that blooms all summer.'
    },
    {
      id: 32,
      name: 'Ixora',
      image: ixoraImg,
      description: 'Tropical shrub with clusters of bright flowers.'
    },
    {
      id: 50,
      name: 'Cosmo',
      image: cosmoImg,
      description: 'Beautiful annual flower that blooms throughout summer.'
    },
    {
      id: 51,
      name: 'Jasmine',
      image: jasmineImg,
      description: 'Fragrant flowering plant perfect for summer gardens.'
    }
  ],
  'rainy-plants': [
    {
      id: 33,
      name: 'Begonia',
      image: begoniaImg,
      description: 'Beautiful flowering plant that thrives in monsoon.'
    },
    {
      id: 34,
      name: 'Caladium',
      image: caladiumImg,
      description: 'Colorful foliage plant perfect for rainy season.'
    },
    {
      id: 35,
      name: 'Impatiens',
      image: impatiensImg,
      description: 'Continuous blooming flowers that love moisture.'
    },
    {
      id: 36,
      name: 'Coleus',
      image: coleusImg,
      description: 'Vibrant colored leaves, perfect for monsoon planting.'
    },
    {
      id: 52,
      name: 'Lotus',
      image: lotusImg,
      description: 'Sacred aquatic flower that thrives in monsoon season.'
    },
    {
      id: 53,
      name: 'Hibiscus',
      image: rainyHibiscusImg,
      description: 'Large tropical flowers perfect for rainy season blooming.'
    }
  ],
  'outdoor-plants': [
    {
      id: 37,
      name: 'Bonsai Tree',
      image: bonsaiImg,
      description: 'Miniature trees perfect for outdoor garden display.'
    },
    {
      id: 38,
      name: 'Palm Tree',
      image: palmTreeImg,
      description: 'Tropical trees that create beautiful outdoor landscapes.'
    },
    {
      id: 39,
      name: 'Croton',
      image: crotonImg,
      description: 'Colorful outdoor shrub with vibrant foliage.'
    },
    {
      id: 40,
      name: 'Ficus',
      image: ficusImg,
      description: 'Large outdoor tree perfect for landscaping.'
    },
    {
      id: 54,
      name: 'Climber',
      image: climberImg,
      description: 'Climbing plants perfect for outdoor walls and trellises.'
    },
    {
      id: 55,
      name: 'Hedge',
      image: hedgeImg,
      description: 'Dense shrubs ideal for creating outdoor boundaries.'
    }
  ],
  'tabletop-plants': [
    {
      id: 41,
      name: 'Mini Cactus',
      image: miniCactusImg,
      description: 'Tiny decorative cactus perfect for desk spaces.'
    },
    {
      id: 42,
      name: 'Small Fern',
      image: smallFernImg,
      description: 'Compact fern ideal for small indoor spaces.'
    },
    {
      id: 43,
      name: 'Air Plant',
      image: airPlantImg,
      description: 'Unique plants that grow without soil, perfect for tables.'
    },
    {
      id: 44,
      name: 'Mini Succulent',
      image: miniSucculentImg,
      description: 'Small succulent arrangements for desktop decoration.'
    },
    {
      id: 56,
      name: 'Jade',
      image: jadeImg,
      description: 'Lucky plant perfect for tabletop decoration and Feng Shui.'
    }
  ],
  'grass': [
    {
      id: 45,
      name: 'Bermuda Grass',
      image: bermudaGrassImg,
      description: 'Durable lawn grass that withstands heavy foot traffic.'
    },
    {
      id: 46,
      name: 'Zoysia Grass',
      image: zoysiaGrassImg,
      description: 'Dense, soft grass perfect for residential lawns.'
    },
    {
      id: 47,
      name: 'St. Augustine Grass',
      image: stAugustineGrassImg,
      description: 'Thick, lush grass ideal for warm climate lawns.'
    },
    {
      id: 48,
      name: 'Ornamental Grass',
      image: ornamentalGrassImg,
      description: 'Decorative grass varieties for landscape design.'
    },
    {
      id: 57,
      name: 'Mexican Grass',
      image: mexicanGrassImg,
      description: 'Vibrant grass variety perfect for landscaping.'
    },
    {
      id: 58,
      name: 'Nilgiri',
      image: nilgiriImg,
      description: 'Premium grass variety from the Nilgiri hills.'
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