import React from 'react';
import './OurClients.css';

const OurClients = () => {
  const clients = [
    {
      id: 1,
      name: "Green Gardens Co.",
      logo: "https://via.placeholder.com/150x80/4CAF50/white?text=GG"
    },
    {
      id: 2,
      name: "Nature's Best",
      logo: "https://via.placeholder.com/150x80/8BC34A/white?text=NB"
    },
    {
      id: 3,
      name: "Botanical Paradise",
      logo: "https://via.placeholder.com/150x80/9C27B0/white?text=BP"
    },
    {
      id: 4,
      name: "Urban Jungle",
      logo: "https://via.placeholder.com/150x80/FF9800/white?text=UJ"
    },
    {
      id: 5,
      name: "Plant Haven",
      logo: "https://via.placeholder.com/150x80/2196F3/white?text=PH"
    },
    {
      id: 6,
      name: "Eco Garden",
      logo: "https://via.placeholder.com/150x80/795548/white?text=EG"
    }
  ];

  return (
    <section className="our-clients" id="clients">
      <div className="container">
        <h2 className="section-heading">Our Clients</h2>
        <div className="clients-grid">
          {clients.map(client => (
            <div key={client.id} className="client-logo">
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;