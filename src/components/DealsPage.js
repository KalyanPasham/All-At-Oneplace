import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, ButtonGroup } from '@mui/material'; // Material UI components
import UnitedImage from '../assets/united.jpg';  // Image for United Airlines
import SubwayImage from '../assets/subway.jpg';  // Image for Subway
import DominosImage from '../assets/dominos.jpg';  // Image for Domino's
import GreyhoundImage from '../assets/greyhound.jpg';  // Image for Greyhound Bus
import SpiritImage from '../assets/spirit.jpg';  // Image for Spirit Airlines
import WalgreensImage from '../assets/walgreens.jpg';  // Walgreens image
import CVSImage from '../assets/cvs.jpg';  // CVS image
import ChipotleImage from '../assets/chipotle.jpg';  // Chipotle image
import WendyImage from '../assets/wendy.jpg';  // Wendy's image

const mockDeals = [
    {
        id: 1,
        title: 'Flight to NYC',
        category: 'Travel',
        subcategory: 'Flight',
        company: 'United Airlines',
        price: 200,
        image: UnitedImage,  // United Airlines image
        affiliateLink: 'https://www.united.com/en/us',
    },
    {
        id: 2,
        title: 'Flight to LA',
        category: 'Travel',
        subcategory: 'Flight',
        company: 'Spirit Airlines',
        price: 180,
        image: SpiritImage,  // Spirit Airlines image
        affiliateLink: 'https://www.spirit.com/',
    },
    {
        id: 3,
        title: 'Bus to Boston',
        category: 'Travel',
        subcategory: 'Bus',
        company: 'Greyhound',
        price: 30,
        image: GreyhoundImage,  // Greyhound Bus image
        affiliateLink: 'https://www.greyhound.com/',
    },
    {
        id: 4,
        title: 'Large Pepperoni Pizza',
        category: 'Food',
        subcategory: 'Pizza',
        company: 'Domino\'s',
        price: 12,
        image: DominosImage,  // Domino's image
        affiliateLink: 'https://www.dominos.com/',
    },
    {
        id: 5,
        title: 'Chicken Sandwich',
        category: 'Food',
        subcategory: 'Sandwiches',
        company: 'Subway',
        price: 10,
        image: SubwayImage,  // Subway image
        affiliateLink: 'https://www.subway.com/',
    },
    {
        id: 6,
        title: 'Flu Shot at Walgreens',
        category: 'Health & Pharmacy',
        subcategory: 'Flu Shots',
        company: 'Walgreens',
        price: 40,
        image: WalgreensImage,  // Walgreens image
        affiliateLink: 'https://www.walgreens.com/',
    },
    {
        id: 7,
        title: 'CVS Pharmacy Discount',
        category: 'Health & Pharmacy',
        subcategory: 'Discounts',
        company: 'CVS',
        price: 10,
        image: CVSImage,  // CVS image
        affiliateLink: 'https://www.cvs.com/',
    },
    {
        id: 8,
        title: 'Chipotle Burrito Deal',
        category: 'Food',
        subcategory: 'Burrito',
        company: 'Chipotle',
        price: 8,
        image: ChipotleImage,  // Chipotle image
        affiliateLink: 'https://www.chipotle.com/',
    },
    {
        id: 9,
        title: 'Wendy\'s 4 for $4 Meal',
        category: 'Food',
        subcategory: 'Combo Meal',
        company: 'Wendy\'s',
        price: 4,
        image: WendyImage,  // Wendy's image
        affiliateLink: 'https://www.wendys.com/',
    },
];

const DealsPage = () => {
    // State to handle the selected filter
    const [selectedFilter, setSelectedFilter] = useState('All');

    // Filter deals based on the selected category
    const filteredDeals = selectedFilter === 'All'
        ? mockDeals
        : mockDeals.filter(deal => deal.category === selectedFilter);

    return (
        <div>
            <h1>Today's Deals</h1>

            {/* Filter Buttons */}
            <ButtonGroup variant="contained" aria-label="deal filters" style={{ marginBottom: '20px' }}>
                <Button onClick={() => setSelectedFilter('All')}>All Deals</Button>
                <Button onClick={() => setSelectedFilter('Travel')}>Travel</Button>
                <Button onClick={() => setSelectedFilter('Food')}>Food</Button>
                <Button onClick={() => setSelectedFilter('Hot Deals')}>Hot Deals</Button>
                <Button onClick={() => setSelectedFilter('Today Deals')}>Today Deals</Button>
                <Button onClick={() => setSelectedFilter('Savings')}>Savings</Button>
            </ButtonGroup>

            {/* Deals List */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {filteredDeals.map((deal) => (
                    <Card key={deal.id} style={{ width: '300px' }}>
                        <img
                            src={deal.image}
                            alt={deal.title}
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h6">{deal.title}</Typography>
                            <Typography color="textSecondary">{deal.company}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {deal.subcategory}
                            </Typography>
                            <Typography variant="h5">${deal.price}</Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ marginTop: '10px' }}
                                onClick={() => window.location.href = deal.affiliateLink}
                            >
                                View Deal
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DealsPage;
