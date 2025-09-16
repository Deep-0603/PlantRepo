import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import FlashCards from './components/FlashCards';
import OurClients from './components/OurClients';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import PlantCategory from './components/PlantCategory';

const HomePage = () => (
  <>
    <Home />
    <About />
    <FlashCards />
    <OurClients />
    <Testimonials />
    <ContactUs />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<PlantCategory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;