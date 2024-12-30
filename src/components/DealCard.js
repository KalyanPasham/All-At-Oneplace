
import React from 'react';

const DealCard = ({ deal }) => (
    <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', borderRadius: '5px', maxWidth: '300px' }}>
        <h3>{deal.title}</h3>
        <p><strong>Store:</strong> {deal.store}</p>
        <p><strong>Price:</strong> ${deal.price}</p>
    </div>
);

export default DealCard;
                