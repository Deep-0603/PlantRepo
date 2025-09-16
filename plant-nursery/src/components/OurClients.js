import React from 'react';
import { motion } from 'framer-motion';
import './OurClients.css';

// Import client logos
import stAngelLogo from '../asset/st angel.png';
import cpwdLogo from '../asset/cpwd.jpg';
import pwdLogo from '../asset/pwd.jpg';
import ndmcLogo from '../asset/ndmc.png';
import delhiUniversityLogo from '../asset/delhi university.jpg';
import aicteLogo from '../asset/aicte-logo.svg';
import governmentBuildingLogo from '../asset/government-office.svg';
import parliamentHouseLogo from '../asset/parliament-building.svg';

const OurClients = () => {
  const clients = [
    {
      id: 1,
      name: "St Angel School",
      logo: stAngelLogo,
      description: "Leading Educational Institution"
    },
    {
      id: 2,
      name: "AICTE",
      logo: aicteLogo,
      description: "All India Council for Technical Education"
    },
    {
      id: 3,
      name: "CPWD",
      logo: cpwdLogo,
      description: "Central Public Works Department"
    },
    {
      id: 4,
      name: "PWD Delhi",
      logo: pwdLogo,
      description: "Public Works Department"
    },
    {
      id: 5,
      name: "NDMC",
      logo: ndmcLogo,
      description: "New Delhi Municipal Council"
    },
    {
      id: 6,
      name: "Delhi University",
      logo: delhiUniversityLogo,
      description: "Premier University"
    },
    {
      id: 7,
      name: "Government Office",
      logo: governmentBuildingLogo,
      description: "Government Administration"
    },
    {
      id: 8,
      name: "Parliament House",
      logo: parliamentHouseLogo,
      description: "Legislative Assembly"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12
      }
    }
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8,
      rotateX: 20
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="our-clients" id="clients">
      <div className="container">
        <motion.div
          className="clients-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="section-heading"
            variants={titleVariants}
          >
            Our Trusted Clients
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            Proud to serve leading organizations across various sectors
          </motion.p>
        </motion.div>

        <motion.div
          className="clients-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              className="client-card"
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(45, 80, 22, 0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="client-logo-container">
                <motion.img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo-img"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <div className="logo-overlay"></div>
              </div>
              
              <div className="client-info">
                <h3 className="client-name">{client.name}</h3>
                <p className="client-description">{client.description}</p>
              </div>
              
              <div className="client-badge">
                <span className="badge-text">Trusted Partner</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="clients-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="stat-item">
            <motion.span 
              className="stat-number"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              8+
            </motion.span>
            <span className="stat-label">Trusted Clients</span>
          </div>
          <div className="stat-item">
            <motion.span 
              className="stat-number"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              150+
            </motion.span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <motion.span 
              className="stat-number"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              7+
            </motion.span>
            <span className="stat-label">Years Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;