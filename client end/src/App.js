import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import OAuthCallback from './components/OAuthCallback';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

// Main App component that handles routing and protected routes
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/oauth/callback" element={<OAuthCallback />} />

        {/* Protected routes for Admin and User roles */}
        <Route element={<ProtectedRoute allowedRoles={['Admin']} />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={['User']} />}>
        <Route path="/user" element={<UserPage />} />
      </Route>
      </Routes>
    </Router>
  );
};

export default App;