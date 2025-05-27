// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import TopSellingPackages from '../components/TopSellingPackages';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PopularDestinations />
      <TopSellingPackages />
      <Footer />
    </div>
  );
};

export default HomePage;
