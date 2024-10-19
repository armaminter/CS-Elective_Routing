// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './AboutUs';
import Contact from './ContactUs';
import NavBar from './NavBar';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <Router>
      <div>
        {isLoggedIn && <NavBar />} {/* Only show NavBar when logged in */}
        <Routes>
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/about"
            element={isLoggedIn ? <About /> : <Navigate to="/login" />}
          />
          <Route
            path="/contact"
            element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
          />
          <Route
            path="*"
            element={<Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

