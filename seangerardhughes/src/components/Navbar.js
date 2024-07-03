// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

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
        <a href="#home" className="navbar-logo" onClick={closeMenu}> <FontAwesomeIcon icon={faHouse} size='3x'/></a>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={closeMenu}>
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
