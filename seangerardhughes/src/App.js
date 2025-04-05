import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProfilePic from './ProfilePic2.jpg';
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
        <Route path="/" />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add routes for other projects */}
      </Routes>
    </Router>
  );
}
