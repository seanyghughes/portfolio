// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Navbar.css'; // Assuming you have a CSS file for Navbar styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Sean Gerard Hughes 
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/resume" className="navbar-link">
              Resume
            </Link>
          </li>
          {/* Add more navbar items as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
