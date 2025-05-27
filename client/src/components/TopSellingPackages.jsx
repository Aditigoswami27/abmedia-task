// src/components/TopSellingPackages.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTopPackages } from '../api/packages';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Skeleton,
  Button,
  Box,
} from '@mui/material';

const TopSellingPackages = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['topPackages'],
    queryFn: fetchTopPackages,
  });

  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {[1, 2, 3, 4].map((i) => (
          <Grid item xs={6} md={3} key={i}>
            <Skeleton variant="rectangular" width="100%" height={180} />
            <Skeleton />
            <Skeleton width="60%" />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (isError) return <p>Failed to load packages</p>;

  return (
    <Box id="top-packages" sx={{ mt: 6 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Top Selling Tour Packages of India
      </Typography>
      <Grid container spacing={2}>
        {data.map((pkg) => (
          <Grid item xs={6} md={3} key={pkg._id}>
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
                image={pkg.image || 'https://via.placeholder.com/300'}
                alt={pkg.title}
              />
              <CardContent>
                <Typography variant="h6">{pkg.title}</Typography>
                <Typography color="text.secondary">₹{pkg.price}</Typography>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ mt: 1 }}
                  onClick={() =>
                    document
                      .getElementById('top-packages')
                      .scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopSellingPackages;
