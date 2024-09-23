// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import ArrivalsSection from './components/arrivalSection';
import Footer from './components/footer';
import ShopPaintings from './components/shop';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
         
          <Route path="/" element={
            <>
              <HeroSection />
              <ArrivalsSection />
            </>
          } />
        
          <Route path="/shop" element={<ShopPaintings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
