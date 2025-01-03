import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const categories = ['Travel', 'Food', 'Hot Deals', 'Today\'s Deals', 'Savings', 'Clothing'];

const Header = () => (
    <AppBar position="static" style={{ backgroundColor: '#4CAF50' }}>
        <Toolbar>
            {/* Make "Deals Aggregator" clickable and navigate to the /deals page */}
            <Link to="/deals" style={{ textDecoration: 'none', flexGrow: 1 }}>
                <Typography variant="h6" style={{ color: 'white' }}>
                    Deals Aggregator
                </Typography>
            </Link>

            <Box style={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
                <SearchIcon />
                <InputBase
                    placeholder="Search deals…"
                    inputProps={{ 'aria-label': 'search' }}
                    style={{ color: 'white', marginLeft: 8 }}
                />
            </Box>

            {/* Sign In and Sign Up Links */}
            <Link to="/signin" style={{ textDecoration: 'none', marginRight: '10px' }}>
                <Button color="inherit">Sign In</Button>
            </Link>

            {/* Render buttons dynamically from the categories array */}
            {categories.map((category) => (
                <Button color="inherit" key={category}>
                    {category}
                </Button>
            ))}
        </Toolbar>
    </AppBar>
);

export default Header;
