// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToTop = () => {
    closeMenu();
    if (location.pathname === '/') {
      // If we're on the home page, scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If we're on another page, navigate to home
      window.location.href = '/';
    }
  };

  const scrollToAbout = () => {
    closeMenu();
    if (location.pathname === '/') {
      // If we're on the home page, scroll to the about section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll to about
      window.location.href = '/#about';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-link home-link" onClick={scrollToTop}> <FontAwesomeIcon icon={faHouse} size='2x'/> </button>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
          <button className="navbar-link home-link" onClick={scrollToTop}>
              Home
            </button>
          </li>
          <li className="navbar-item">
          <button className="navbar-link about-link" onClick={scrollToAbout}>
              About
            </button>
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
