// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Sean Gerard Hughes 
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link">
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
