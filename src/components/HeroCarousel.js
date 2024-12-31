import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroCarousel = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            backgroundImage: 'url("https://via.placeholder.com/1500x300")',
            backgroundSize: 'cover',
            color: 'white',
        }}
    >
        <Box textAlign="center">
            <Typography variant="h4" gutterBottom>
                Best Deals of the Day!
            </Typography>
            <Button variant="contained" color="secondary">
                Shop Now
            </Button>
        </Box>
    </Box>
);

export default HeroCarousel;

//Day Two