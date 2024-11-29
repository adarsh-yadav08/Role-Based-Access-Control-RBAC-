import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import '../styles/Login.css';

// Component for user login
const Login = () => {
  // State to store the user's login credentials
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  // Handle input change for form fields
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle form submission to log the user in
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Call the login service to send the credentials and receive a JWT
      await login(credentials);
      const currentUser = JSON.parse(localStorage.getItem('user'));
      if(currentUser.roles.includes('Admin')) {
        navigate('/admin');
      }
      else if(currentUser.roles.includes('User')) {
        navigate('/user');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleGoogleLogin = async () => {
    window.location.href = 'https://vrv-security-intern-assignment.onrender.com/api/auth/google';
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        onChange={handleChange} 
      />
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        onChange={handleChange}
      />
      <button type="submit"> Login with Email </button>
      <button onClick={handleGoogleLogin} className="google-login-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google logo" />
        Login with Google
      </button>
    </form>
  );
};

export default Login;