import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingCard from './components/BookingCard';
import Services from './components/Services';
import PackagesCarousel from './components/PackagesCarousel';
import AdventureSection from './components/AdventureSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen font-poppins">
      <Navbar />
      <div className="relative">
        <Hero />
        
      </div>
      <Services />
      <PackagesCarousel />
      <AdventureSection />
      <Footer />
    </div>
  );
}

export default App;
