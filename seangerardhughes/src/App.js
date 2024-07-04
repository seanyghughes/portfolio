// App.js

import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import ProfilePic from './ProfilePic.jpg';
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="home" className="Home">
          <header className="App-header">
            <title>Home Page</title>
            <img src={ProfilePic} className="ProfilePic" alt="ProfilePic" />
            <p>Sean Hughes | Data Analytics</p>
          </header>
        </div>
        <div id="about" className="About">
          <header className="App-about">
            <h1>About</h1>
            <p>
              Sean Hughes is a Technical Data Analyst with 5+ years experience working with Data from high-growth startups to global media and marketing companies.
            </p>
            <div id="skills-section">
              <ul>
                <li>7+ Years SQL</li>
                <li>7+ Years Python</li>
                <li>4+ Years Data Modelling</li>
              </ul>
            </div>
          </header>
        </div>
        <div id="projects" className="Projects">
          <header className="App-projects">
            <p>Projects</p>
          </header>
        </div>
        <div id="contact" className="Contact">
          <header className="App-contact">
            <p>Contact</p>
          </header>
          <div><BottomNavbar /></div>
        </div>
      </div>
    </Router>
  );
}
