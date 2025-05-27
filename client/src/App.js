import React from 'react';
import Hero from './components/Hero';
import TopSellingPackages from './components/TopSellingPackages';
import PopularDestinations from './components/PopularDestinations';
import { CssBaseline, Container } from '@mui/material';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Hero />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <PopularDestinations />
        <TopSellingPackages />
        {/* Removed Advantages as file doesn't exist */}
      </Container>
      <Footer />
    </>
  );
};

export default App;
