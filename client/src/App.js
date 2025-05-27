import React from 'react';
import Hero from './components/Hero';
import TopSellingPackages from './components/TopSellingPackages';
import PopularDestinations from './components/PopularDestinations';
import { CssBaseline, Container } from '@mui/material';
import Footer from './components/Footer';

// Main App layout with Hero, packages, and footer
const App = () => {
  return (
    <>
      <CssBaseline />  {/* Resets browser styling */}
      <Hero />        {/* Hero section with banner */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <PopularDestinations />   {/* Most popular destinations */}
        <TopSellingPackages />    {/* Top selling packages */}
      </Container>
      <Footer />
    </>
  );
};

export default App;
