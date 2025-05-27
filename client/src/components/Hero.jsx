import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById('top-packages');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(https://plus.unsplash.com/premium_photo-1663126360762-4674086793df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Container>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Discover Your Next Adventure
        </Typography>
        <Typography variant="h6" gutterBottom>
          Explore breathtaking destinations and best-selling packages
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
          onClick={handleScroll}
        >
          Book Now
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
