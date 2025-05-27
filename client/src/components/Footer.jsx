// src/components/Footer.jsx

import React from 'react';
import { Box, Typography, Container, Grid, Avatar } from '@mui/material';

// Static testimonials data for footer section
const testimonials = [
  {
    name: 'Aarav Mehta',
    review: 'Loved the experience! Everything was organized perfectly.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Priya Sharma',
    review: 'A seamless journey from start to finish. Highly recommend!',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Rohan Singh',
    review: 'Great destinations and value for money!',
    avatar: 'https://i.pravatar.cc/150?img=56',
  },
];

// Footer component displaying traveler testimonials and copyright
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 6,
        backgroundColor: '#f8f8f8',
        borderTop: '1px solid #ddd',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom>
          What Our Travelers Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((t, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  p: 3,
                  boxShadow: 2,
                  borderRadius: 2,
                  textAlign: 'center',
                  backgroundColor: 'white',
                  height: '100%',
                }}
              >
                <Avatar
                  src={t.avatar}
                  alt={t.name}
                  sx={{ width: 64, height: 64, mx: 'auto', mb: 2 }}
                />
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  "{t.review}"
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
                  — {t.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ mt: 6 }}
        >
          © 2025 ABMedia Travels. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
