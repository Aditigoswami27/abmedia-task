// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import TopSellingPackages from '../components/TopSellingPackages';
import Footer from '../components/Footer';

// Renders the main landing page layout with all core sections
const HomePage = () => {
  return (
    <div>
      <Hero />   {/* Hero banner with CTA */}
      <PopularDestinations />  {/* Grid of popular travel destinations */}
      <TopSellingPackages />    {/* List of top selling packages */}
      <Footer />   {/* Testimonials + Footer info */}
    </div>
  );
};

export default HomePage;
