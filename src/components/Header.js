
import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const categories = ['Travel', 'Food', 'Hot Deals', 'Today\'s Deals', 'Savings'];

const Header = () => (
    <AppBar position="static" style={{ backgroundColor: '#4CAF50' }}>
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Deals Aggregator
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
                <SearchIcon />
                <InputBase
                    placeholder="Search deals…"
                    inputProps={{ 'aria-label': 'search' }}
                    style={{ color: 'white', marginLeft: 8 }}
                />
            </Box>
            {categories.map((category) => (
                <Button color="inherit" key={category}>{category}</Button>
            ))}
        </Toolbar>
    </AppBar>
);

export default Header;

                