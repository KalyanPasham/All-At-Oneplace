import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import DealsPage from './components/DealsPage';  // Import DealsPage
import SignUpPage from './components/SignUpPage';  // Import SignUpPage
import SignInPage from './components/SignInPage';  // Import SignInPage
import HomePage from './components/HomePage';

const App = () => (
    <Router>
        <div>
            <Header />
            <Routes>
                {/* Display DealsPage as the main page */}
                <Route path="/" element={<DealsPage />} />  {/* All deals */}

                <Route path="/signup" element={<SignUpPage />} />  {/* Sign Up Page */}
                <Route path="/signin" element={<SignInPage />} />  {/* Sign In Page */}
            </Routes>
            <Footer />
        </div>
    </Router>
);

export default App;
