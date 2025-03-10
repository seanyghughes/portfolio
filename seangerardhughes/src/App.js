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
              <h2>Site Currently Under Redevelopment</h2>
            </header>
          </div>
          </section>
          <div><BottomNavbar /></div>
      </div>

      <Routes>
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        {/* Add routes for other projects */}
      </Routes>
    </Router>
  );
}
