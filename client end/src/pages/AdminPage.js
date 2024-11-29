// AdminPage.js - This page is accessible to users with the "Admin" role

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminPage.css';  // Import the external CSS file

const AdminPage = () => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');

    // Redirect to HomePage
    navigate('/');
  };

  return (
    <div className="admin-page">
      <h1 className="welcome-message">Welcome, Admin!</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminPage;