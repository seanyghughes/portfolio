// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Sean Hughes
        </a>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </div>
        <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
