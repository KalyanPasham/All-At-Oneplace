import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
    <Box
        sx={{
            textAlign: 'center',
            padding: 2,
            backgroundColor: '#4CAF50',
            color: 'white',
            marginTop: 2,
        }}
    >
        <Typography variant="body2">© 2024 Deals Aggregator. All rights reserved.</Typography>
    </Box>
);

export default Footer;
