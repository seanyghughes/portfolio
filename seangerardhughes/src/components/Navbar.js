// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="navbar-link" onClick={closeMenu}> <FontAwesomeIcon icon={faHouse} size='2x'/> </Link>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
          <Link to="/" className="navbar-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="navbar-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="navbar-item">
          <Link to="/projects" className="navbar-link" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="navbar-item">
          <Link to="/contact" className="navbar-link" onClick={closeMenu}>
              Contact
            </Link>
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
