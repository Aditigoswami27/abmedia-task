// src/components/PopularDestinations.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDestinations } from '../api/destinations';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Skeleton,
  Box,
} from '@mui/material';

// Displays a grid of popular destinations fetched from the API
const PopularDestinations = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['destinations'],
    queryFn: fetchDestinations,
  });
  
  // Show loading skeletons while data is being fetched
  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {[1, 2, 3, 4].map((i) => (
          <Grid item xs={6} sm={6} md={3} key={i}>
            <Skeleton variant="rectangular" width="100%" height={180} />
            <Skeleton />
            <Skeleton width="60%" />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (isError) return <p>Something went wrong!</p>;  // Handle error state

  return (
    <Box id="destinations" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Explore Most Popular Destinations
      </Typography>
      <Grid container spacing={2}>
        {data.map((dest) => (
          <Grid item xs={6} md={3} key={dest._id}>
            <Card
              sx={{
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 4,
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={dest.image || 'https://via.placeholder.com/300'}
                alt={dest.name}
              />
              <CardContent>
                <Typography variant="h6">{dest.name}</Typography>
                <Typography color="text.secondary">
                  Starting from ₹{dest.price}/-
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularDestinations;
