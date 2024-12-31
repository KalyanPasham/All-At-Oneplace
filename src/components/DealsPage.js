import React, { useState } from 'react';
import { Button, ButtonGroup, Card, CardContent, Typography } from '@mui/material';

// Import deals from individual brand files
import unitedDeals from '../brands/united';
import spiritDeals from '../brands/spirit';
import greyhoundDeals from '../brands/greyhound';
import subwayDeals from '../brands/subway';
import dominosDeals from '../brands/dominos';
import walgreensDeals from '../brands/walgreens';
import cvsDeals from '../brands/cvs';
import chipotleDeals from '../brands/chipotle';
import wendysDeals from '../brands/wendys';
import costcoDeals from '../brands/costco';
import rossDeals from '../brands/ross';
import HMDeals from "../brands/h&m";

// Combine all deals into one array
const allDeals = [
    ...unitedDeals,
    ...spiritDeals,
    ...greyhoundDeals,
    ...subwayDeals,
    ...dominosDeals,
    ...walgreensDeals,
    ...cvsDeals,
    ...chipotleDeals,
    ...wendysDeals,
    ...costcoDeals,
    ...rossDeals,
    ...HMDeals,
];

const DealsPage = () => {
    // State to handle the selected filter
    const [selectedFilter, setSelectedFilter] = useState('All');

    // Filter deals based on the selected category
    const filteredDeals =
        selectedFilter === 'All'
            ? allDeals
            : allDeals.filter((deal) => deal.category === selectedFilter);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Today's Deals</h1>

            {/* Filter Buttons */}
            <ButtonGroup
                variant="contained"
                aria-label="deal filters"
                style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}
            >
                <Button onClick={() => setSelectedFilter('All')}>All Deals</Button>
                <Button onClick={() => setSelectedFilter('Travel')}>Travel</Button>
                <Button onClick={() => setSelectedFilter('Food')}>Food</Button>
                <Button onClick={() => setSelectedFilter('Health & Pharmacy')}>
                    Health & Pharmacy
                </Button>
                <Button onClick={() => setSelectedFilter('Clothing')}>Clothing</Button>
                <Button onClick={() => setSelectedFilter('Hot Deals')}>Hot Deals</Button>
                <Button onClick={() => setSelectedFilter('Today Deals')}>Today Deals</Button>
                <Button onClick={() => setSelectedFilter('Savings')}>Savings</Button>
            </ButtonGroup>

            {/* Deals List */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
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
                                onClick={() => window.open(deal.affiliateLink, '_blank')}
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
