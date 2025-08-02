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

  return (
    <Router>
      <div className="App">
        <Navbar />
        
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
              <h2 className="hero-subtitle">Experienced Data Analytics Professional</h2>
              <p className="hero-description">
                Transforming data into actionable insights with 5+ years of experience in analytics, 
                machine learning, and business intelligence.
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
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
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
          
          <div className="scroll-indicator">
            <button 
              className="scroll-button" 
              onClick={() => scrollToSection('about')}
            >
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section" ref={aboutRef}>
          <div className="about-content">
            <div className="section-header animate-on-scroll">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">Passionate about data-driven decision making</p>
            </div>
            
            {/* Personal Introduction */}
            <div className="about-intro animate-on-scroll">
              <div className="intro-text">
                <h3>Who I Am</h3>
                <p>
                  I'm a data analytics professional with over 5 years of experience transforming complex data into actionable insights. 
                  Based in Ireland, I specialize in machine learning, business intelligence, and predictive analytics. 
                  My passion lies in helping organizations make data-driven decisions that drive growth and efficiency.
                </p>
              </div>
            </div>

            {/* Core Skills Grid */}
            <div className="about-grid">
              <div className="about-card animate-on-scroll">
                <div className="card-icon">📊</div>
                <h3>Data Analytics</h3>
                <p>Expert in transforming complex data into clear, actionable insights that drive business decisions.</p>
              </div>
              
              <div className="about-card animate-on-scroll">
                <div className="card-icon">🤖</div>
                <h3>Machine Learning</h3>
                <p>Building predictive models and AI solutions to automate processes and uncover hidden patterns.</p>
              </div>
              
              <div className="about-card animate-on-scroll">
                <div className="card-icon">📈</div>
                <h3>Business Intelligence</h3>
                <p>Creating comprehensive dashboards and reports that empower teams to make informed decisions.</p>
              </div>

              <div className="about-card animate-on-scroll">
                <div className="card-icon">🔍</div>
                <h3>Data Visualization</h3>
                <p>Designing intuitive charts and interactive dashboards that tell compelling data stories.</p>
              </div>

              <div className="about-card animate-on-scroll">
                <div className="card-icon">⚡</div>
                <h3>Process Automation</h3>
                <p>Streamlining workflows and reducing manual tasks through intelligent automation solutions.</p>
              </div>

              <div className="about-card animate-on-scroll">
                <div className="card-icon">🎯</div>
                <h3>Strategic Consulting</h3>
                <p>Providing expert guidance on data strategy and digital transformation initiatives.</p>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="skills-section animate-on-scroll">
              <h3 className="section-subtitle">Technical Expertise</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Programming Languages</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">R</span>
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">JavaScript</span>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h4>Data Tools</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Tableau</span>
                    <span className="skill-tag">Power BI</span>
                    <span className="skill-tag">Apache Spark</span>
                    <span className="skill-tag">Pandas</span>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h4>Machine Learning</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Scikit-learn</span>
                    <span className="skill-tag">TensorFlow</span>
                    <span className="skill-tag">PyTorch</span>
                    <span className="skill-tag">NLP</span>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h4>Cloud & Big Data</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">AWS</span>
                    <span className="skill-tag">Google Cloud</span>
                    <span className="skill-tag">Hadoop</span>
                    <span className="skill-tag">Kafka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="services-section animate-on-scroll">
              <h3 className="section-subtitle">What I Offer</h3>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">📊</div>
                  <h4>Data Analysis & Reporting</h4>
                  <p>Comprehensive data analysis with actionable insights and automated reporting solutions.</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">🤖</div>
                  <h4>Machine Learning Solutions</h4>
                  <p>Custom ML models for prediction, classification, and pattern recognition in your data.</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">📈</div>
                  <h4>Dashboard Development</h4>
                  <p>Interactive dashboards and visualizations that make complex data accessible and actionable.</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">⚙️</div>
                  <h4>Process Optimization</h4>
                  <p>Data-driven process improvements and automation to increase efficiency and reduce costs.</p>
                </div>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="experience-highlights animate-on-scroll">
              <h3 className="section-subtitle">Key Achievements</h3>
              <div className="highlights-grid">
                <div className="highlight-item">
                  <div className="highlight-number">45%</div>
                  <p>Average improvement in conversion rates across client projects</p>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-number">€2M+</div>
                  <p>Revenue increase generated through data-driven insights</p>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-number">85%</div>
                  <p>Reduction in reporting time through automation</p>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-number">50+</div>
                  <p>Successful projects completed across various industries</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="about-cta animate-on-scroll">
              <h3>Ready to Transform Your Data?</h3>
              <p>Let's discuss how I can help you unlock the full potential of your data and drive meaningful business outcomes.</p>
              <div className="about-cta-buttons">
                <button 
                  className="cta-button primary"
                  onClick={() => scrollToSection('career-timeline')}
                >
                  View My Experience
                </button>
                <button 
                  className="cta-button secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Career Timeline Section */}
        <section id="career-timeline" className="career-section">
          <CareerTimeline />
        </section>

        <BottomNavbar />
      </div>

      <Routes>
        <Route path="/" />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
