import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { getCurrentUser } from '../services/authService';

// A component to protect routes based on the user's roles
const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem('token');
  
  // Decode the token to get the user's roles
  let currentUser = null;
  if (token) {
    const decodedToken = jwtDecode(token);
    currentUser = {
      roles: decodedToken.roles
    };
  }
  else {
    currentUser = getCurrentUser();
  }

  // Check if the user has an allowed role
  if (currentUser && currentUser.roles && allowedRoles.includes(currentUser.roles[0])) {
    return <Outlet />;  // This will render child components
  }

  // Otherwise, redirect to the login page
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
