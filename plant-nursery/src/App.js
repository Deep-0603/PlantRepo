import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import FlashCards from './components/FlashCards';
import OurClients from './components/OurClients';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <FlashCards />
      <OurClients />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default App;