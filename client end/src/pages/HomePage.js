import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

// HomePage component with links to login and register
const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Home Page</h1>
      <Link to="/login">Login</Link> {/* Link to the login page */}
      <Link to="/register">Register</Link> {/* Link to the registration page */}
    </div>
  );
};

export default HomePage;