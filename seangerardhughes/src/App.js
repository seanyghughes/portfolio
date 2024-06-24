// App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ProfilePic from './ProfilePic.jpg';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="home" className="Home">
          <header className="App-header">
            <title>Home Page</title>
            <img src={ProfilePic} className="ProfilePic" alt="ProfilePic" />
            <p>Sean Gerard Hughes | Data Analytics</p>
          </header>
        </div>
        <div id="about" className="About">
          <header className="App-about">
            <p>About Me</p>
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
        </div>
      </div>
    </Router>
  );
}
