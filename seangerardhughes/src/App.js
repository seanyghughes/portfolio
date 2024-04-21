import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePic from './ProfilePic.jpg';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About'; // Import your About component
import Resume from './pages/Resume'; // Import your Resume component


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={ProfilePic} className="ProfilePic" alt="ProfilePic" />
          <p>
            Sean Gerard Hughes | Data Analytics 
          </p>
        </header>
        <Routes>
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;