// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const NavBar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
};

export default NavBar;
