import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get the token from the query parameters in the URL
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('token');

    if (token) {
      // Save the token to localStorage
      localStorage.setItem('token', token);

      // Decode the token to get user roles
      const decodedToken = JSON.parse(atob(token.split('.')[1]));

      // Store the user information in localStorage
      localStorage.setItem('user', JSON.stringify({
        userId: decodedToken.userId,
        roles: decodedToken.roles
      }));

      // Redirect based on the user's role
      if (decodedToken.roles.includes('Admin')) {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } else {
      // If there's no token, navigate to login page
      navigate('/login');
    }
  }, [navigate, location.search]);

  return <div>Loading...</div>;
};

export default OAuthCallback;