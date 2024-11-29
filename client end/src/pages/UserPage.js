// UserPage.js - This page is accessible to users with the "User" role

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserPage.css';  // Import the external CSS file

const UserPage = () => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    const token = localStorage.getItem('token');
    if(token) {
      localStorage.removeItem('token');
      navigate('/');
    }
    else {
    // Remove user data from localStorage
    localStorage.removeItem('user');

    // Redirect to HomePage
    navigate('/');
    }
  };

  return (
    <div className="user-page">
      <h1 className="welcome-message">Welcome, User!</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserPage;