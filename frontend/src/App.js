import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './pages/heroSection';
import ArrivalsSection from './pages/arrivalSection';
import Footer from './components/footer';
import ShopPaintings from './pages/shop';
import ProductPage from './pages/product';
import CheckoutPage from './pages/checkout';
import Login from './components/login';
import Signup from './components/signup';
import About from './pages/about';

function App() {
  const [userName, setUserName] = useState("");  // State to store the username

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar userName={userName} />  {/* Pass userName for greeting */}
              <HeroSection />
              <ArrivalsSection />
              <Footer />
            </>
          } />
          <Route path="/shop" element={
            <>
              <Navbar userName={userName} />
              <ShopPaintings />
              <Footer />
            </>
          } />

          <Route path="/about" element={
            <>
              <Navbar userName={userName} />
              <About />
              <Footer />
            </>
          } />

          <Route path="/login" element={<Login setUserName={setUserName} />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/product/:productId" element={
            <>
              <Navbar userName={userName} />
              <ProductPage />
              <Footer />
            </>
          } />

          <Route path="/checkout" element={
            <>
              <Navbar userName={userName} />
              <CheckoutPage />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
