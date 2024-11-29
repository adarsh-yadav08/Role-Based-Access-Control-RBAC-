import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

// Define the base URL for the authentication-related API endpoints
const API_URL = 'https://vrv-security-intern-assignment.onrender.com/api/auth';

// Register a new user by sending the user's details to the backend
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Log in a user by sending their credentials and storing the JWT in local storage
export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  if (response.data.token) {
    const userData = {
      token: response.data.token,
      roles: jwtDecode(response.data.token).roles // Decode the token and store roles
    };
    localStorage.setItem('user', JSON.stringify(userData));
  }
  return response.data;
};

// Log out the user by removing the stored JWT and user data from local storage
export const logout = () => {
  localStorage.removeItem('user');
};

// Get the currently logged-in user by retrieving the user data from local storage
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  if (user) {
    const decodedToken = jwtDecode(JSON.parse(user).token); // Decode the token
    // Attach roles from the decoded token
    return {
      ...JSON.parse(user),
      roles: decodedToken.roles
    };
  }
  return null;
};
