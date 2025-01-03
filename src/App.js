import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Header Component
import Footer from './components/Footer';  // Footer Component
import DealsPage from './components/DealsPage';  // Deals Page Component
import SignInPage from './components/SignInPage';  // Sign In Page Component
import HomePage from './components/HomePage';  // Home Page Component

const App = () => (
    <Router>
        <div>
            {/* Header Section */}
            <Header />

            {/* Main Routing Section */}
            <Routes>
                {/* Default route to show all deals */}
                <Route path="/" element={<DealsPage />} />  {/* Show All Deals */}

                {/* Route to show all deals */}
                <Route path="/deals" element={<DealsPage />} />  {/* Deals Aggregator Page */}

                {/* Route to show deals filtered by category */}
                <Route path="/deals/:category" element={<DealsPage />} />  {/* Deals Page with category filtering */}

                {/* Route for Sign In */}
                <Route path="/signin" element={<SignInPage />} />  {/* Sign In Page */}

                {/* Route for Home Page */}
                <Route path="/home" element={<HomePage />} />  {/* Home Page */}
            </Routes>

            {/* Footer Section */}
            <Footer />
        </div>
    </Router>
);

export default App;
