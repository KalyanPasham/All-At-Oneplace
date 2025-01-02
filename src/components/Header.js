import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const categories = ['Travel', 'Food', 'Hot Deals', 'Today\'s Deals', 'Savings', 'Clothing'];

const Header = () => (
    <AppBar position="static" style={{ backgroundColor: '#4CAF50' }}>
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                Deals Aggregator
            </Typography>
            <Box style={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
                <SearchIcon />
                <InputBase
                    placeholder="Search deals…"
                    inputProps={{ 'aria-label': 'search' }}
                    style={{ color: 'white', marginLeft: 8 }}
                />
            </Box>

            {/* Use Link for Sign Up */}
            <Link to="/signup" style={{ textDecoration: 'none' }}>
                <Button color="inherit">Sign Up</Button>
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
