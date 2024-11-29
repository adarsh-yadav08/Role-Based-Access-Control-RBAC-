import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import '../styles/Register.css';

// Component for user registration
const Register = () => {
  // State to store the user's registration details
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    roles: []
  });

  const navigate = useNavigate();

  // Handle input change for form fields
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle role selection
  const handleRoleChange = (e) => {
    setUserData({ ...userData, roles: [e.target.value] });  // Store role as an array
  };

  // Handle form submission to register the user
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Call the register service to send the user's details to the backend
      await register(userData);
      // Redirect the user to the login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <form onSubmit={handleRegister} className="register-form">
      <input 
        type="text" 
        name="username" 
        placeholder="Username" 
        onChange={handleChange} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        onChange={handleChange} 
        required 
      />
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        onChange={handleChange} 
        required 
      />
      <select name="roles" onChange={handleRoleChange} required>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;