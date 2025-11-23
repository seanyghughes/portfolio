import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from './ProfilePic.jpg';
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CareerTimeline from './components/CareerTimeline';

export default function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Home page component
  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content" ref={heroRef}>
          <div className="profile-container animate-on-scroll">
            <div className="profile-image-wrapper">
              <img src={ProfilePic} className="profile-image" alt="Sean Hughes" />
              <div className="profile-image-overlay"></div>
            </div>
          </div>
          
          <div className="hero-text animate-on-scroll">
            <h1 className="hero-title">
              <span className="gradient-text">Seán Gerard Hughes</span>
            </h1>
            <h2 className="hero-subtitle">Senior Data Analytics Professional</h2>
            <p className="hero-description">
            Versatile Data Analyst with experience from growing tech startups to
             global SaaS giants, delivering insights for 
             product growth across leading platforms
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Teams Supported</span>
              </div>
            </div>

           <div className="hero-actions">
              <button 
                className="cta-button primary"
                onClick={() => scrollToSection('about')}
              >
                About Me
              </button>
              <button 
                className="cta-button secondary"
                onClick={() => scrollToSection('career-timeline')}
              >
                View My Journey
              </button>
            </div>
          </div>
        </div>
        
       {/*} <div className="scroll-indicator">
          <button 
            className="scroll-button" 
            onClick={() => scrollToSection('about')}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div> */}
      </section>

      {/* About Section */}
      <section id="about" className="about-section" ref={aboutRef}>
        <div className="about-content">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Curiously Passionate about the Data-Driven World</p>
          </div>

          {/* Technical Skills Section */}
          <div className="skills-section animate-on-scroll">
            <h3 className="section-subtitle">Technical Expertise</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">JavaScript</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h4>Data Tools</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Tableau</span>
                  <span className="skill-tag">Looker</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">Metabase</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h4>AI & Machine Learning</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Linear & Logistic Regressions</span>
                  <span className="skill-tag">Python</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h4>Cloud & Big Data</h4>
                <div className="skill-tags">
                  <span className="skill-tag">dbt</span>
                  <span className="skill-tag">BiqQuery | GCP</span>
                  <span className="skill-tag">Snowflake</span>
                  <span className="skill-tag">AWS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="experience-highlights animate-on-scroll">
            <h3 className="section-subtitle">Areas of Interest</h3>
            <div className="highlights-grid">
              <div className="highlight-item">
                <div className="highlight-number">Product Metrics</div>
                <p>A/B testing, User Behaviour, Customer Segmentation</p>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-number">Data Modelling</div>
                <p>Buidling scalable, resuable data sources that drive insights and support Business Intelligence</p>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-number">Research & Communciation</div>
                <p>Conducting deep-dive performance optimisation studies, process improvement recommendations, and Strategic Data Storytelling to influence leadership.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section id="career-timeline" className="career-section">
        <CareerTimeline />
      </section>
    </>
  );

  return (
    <Router>
      <div className="App">
        {/*<Navbar /> */}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <BottomNavbar />
      </div>
    </Router>
  );
}
