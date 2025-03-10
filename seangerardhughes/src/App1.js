import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProfilePic from './ProfilePic.jpg';
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import ProjectGallery from './components/ProjectGallery';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import ContactForm from './components/ContactForm'; // Import the ContactForm

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <section>
          <div id="home" className="Home">
            <header className="App-header">
              <title>Home Page</title>
              <img src={ProfilePic} className="ProfilePic" alt="ProfilePic" />
              <p>Sean Hughes | Data Analytics</p>
              <p>Site Currently Under Redevelopment</p>
            </header>
          </div>
          </section>
        <section>
          <div id="about" className="About">
            <header className="App-about">
              <h1>About</h1>
              <p>
                Sean Hughes is a Technical Data Analyst with 5+ years experience working with Data from high-growth startups to global media and marketing companies to large scale SaaS companies.
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
          </section>
        <section>
          <div id="projects" className="Projects">
            <header className="App-projects">
              <h1>Projects</h1>
              <Project1 />
              <ProjectGallery />
            </header>
          </div>
        </section>
          <section>
            <div id="contact" className="Contact">
              <header className="App-contact">
                <h1>Contact</h1>
                <ContactForm /> {/* Include the ContactForm component */}
              </header>
              <div><BottomNavbar /></div>
            </div>
          </section>
      </div>

      <Routes>
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        {/* Add routes for other projects */}
      </Routes>
    </Router>
  );
}
