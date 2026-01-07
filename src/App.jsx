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
        <div className="relative z-30 pb-12">
          <BookingCard />
        </div>
      </div>
      <Services />
      <PackagesCarousel />
      <AdventureSection />
      <Footer />
    </div>
  );
}

export default App;
