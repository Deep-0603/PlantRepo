import React from 'react';
import './OurClients.css';

// Import client logos
import stAngelLogo from '../asset/st angel.png';
import maxFortLogo from '../asset/max fort.png';
import cpwdLogo from '../asset/cpwd.jpg';
import pwdLogo from '../asset/pwd.jpg';
import ndmcLogo from '../asset/ndmc.png';
import delhiUniversityLogo from '../asset/delhi university.jpg';

const OurClients = () => {
  const clients = [
    {
      id: 1,
      name: "St Angel School",
      logo: stAngelLogo
    },
    {
      id: 2,
      name: "Max Fort",
      logo: maxFortLogo
    },
    {
      id: 3,
      name: "CPWD",
      logo: cpwdLogo
    },
    {
      id: 4,
      name: "PWD Delhi",
      logo: pwdLogo
    },
    {
      id: 5,
      name: "NDMC",
      logo: ndmcLogo
    },
    {
      id: 6,
      name: "Delhi University",
      logo: delhiUniversityLogo
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