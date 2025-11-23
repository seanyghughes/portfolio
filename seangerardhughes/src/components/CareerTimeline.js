// components/CareerTimeline.js
import React, { useEffect, useRef, useState } from 'react';
import './CareerTimeline.css';
import semrushIcon from '../semrush-logo.png'
import xlmediaIcon from '../xlmedia-logo.png'
import uogLogo from '../uog-logo.png'
import fiitIcon from '../fiit-logo.jpg'

export default function CareerTimeline() {
  const timelineRefs = useRef([]);
  const [expandedItem, setExpandedItem] = useState(null);

  const timelineData = [
    { 
      year: "2020", 
      title: "Bachelor of Arts - Information Technology & Economics", 
      company: "University of Galway, Ireland",
      description: "Completed my degree with honors and gained foundational knowledge in Economic Theory, Software Development & Data Analytics",
      icon: uogLogo,
      details: {
        duration: "2017 - 2020",
        achievements: [
          "Graduated with First Class Honours",
          "Specialized in Data Analytics and Economic Modeling",
          "Completed final year project on 'Predictive Analytics in Financial Markets'",
          "Member of the Data Science Society"
        ],
        skills: ["SQL", "Python", "Statistical Analysis", "Economic Theory"],
        highlights: "Software project focused on a Raspberry Pi Music Synthesizer"
      }
    },
    { 
      year: "2021", 
      title: "Master of Science - Information Systems Management", 
      company: "University of Galway, Ireland", 
      description: "Studied the application of Scalable Information Systems, Applied Business Analytics and AI/ML",
      icon: uogLogo,
      details: {
        duration: "2020 - 2021",
        achievements: [
          "Distinction in Applied Analytics Programming",
          "Led projects in Software Development and Machine Learning",
          "Developed machine models to predict house prices",
          "Voted class representative"
        ],
        skills: ["Machine Learning", "Big Data", "SQL", "Python", "Business Information Systems"],
        highlights: "Created web application that "
      }
    },
    { 
      year: "2021", 
      title: "Research Assistant - Business Information Systems",
      company: "University of Galway, Ireland", 
      description: "Led research project Using Spatial Data Analytics to Explore Crime Patterns and Perceptions of Safety in Rural Ireland",
      icon: uogLogo,
      details: {
        duration: "2021 - 2022",
        achievements: [
          "Laid the analytical foundation for a research paper",
          "Secured €10,000 in public funding",
          "Presented data and findings to the Chief Information Office of An Garda Síochána"
        ],
        skills: ["GIS", "Research Methods", "Academic Writing", "Statistical Modeling", "MySQL"],
        highlights: "Found correlations between the decline in rural Garda Stations and increased perceptions of crime"
      }
    },
    { 
      year: "2021", 
      title: "Joined Fiit as Technical Product & Data Analyst", 
      company: "Fiit - London, United Kingdom",
      description: "Led Product and Data driven initiatives through research and data-enablement ",
      icon: fiitIcon,
      details: {
        duration: "2021 - 2022",
        achievements: [
          "Increased product signup conversion rates by 35%",
          "Implemented A/B testing framework",
          "Assisted C-suite in preparing data room for investors, securing £1.5M funding"
        ],
        skills: ["Product Analytics", "A/B Testing", "SQL", "Python", "User Research"],
        highlights: "Assisted C-suite in preparing data room for investors, securing £1.5M funding"
      }
    },
    { 
      year: "2022", 
      title: "Joined XL Media as Data Analyst", 
      company: "XL Media - London, United Kingdom",
      description: "Built complete data models and reporting suite with cross-functional, company-wide impact",
      icon: xlmediaIcon,
      details: {
        duration: "2022 - 2024",
        achievements: [
          "Lead analyst in a large scale data transformation - rebuilt the our companies data models for billing",
          "Collaborated cross-functionally to build a certified Looker reporting suite with stakeholders ranging from Product teams to C-level",
          "Implemented near real-time analytics dashboard for product usage",
          "Reduced operational costs by 30%"
        ],
        skills: ["Team Leadership", "Conversion Optimization", "Real-time Analytics", "Business Intelligence"],
        highlights: "Transformed the company's data culture, resulting in data-driven decisions across all departments."
      }
    },
    { 
      year: "2025", 
      title: "Joined Semrush as Data Analyst", 
      company: "Semrush - Barcelona, España",
      description: "Driving Product Growth and Cross-Funtional Initiatives with Analytics",
      icon: semrushIcon,
      details: {
        duration: "2025 - Present",
        achievements: [
          "Leading analytics initiatives across global cross-functional teams",
          "Researching User Behaviour and Product Trends",
          "Driving Product Strategy with Data",
          "Mentoring Junior Analysts"
        ],
        skills: ["Predictive Analytics", "Product Research", "Strategic Partnerships", "Cross-"],
        highlights: "Driving the adoption and usage of collaborative features within the Semrush platform"
      }
    },
  ];

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

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleExpand = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="career-timeline">
      <div className="timeline-header">
        <h2>Career Journey</h2>
        <p>My professional growth and achievements over the years</p>
      </div>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {timelineData.map((item, index) => (
          <div 
            key={index} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            ref={(el) => (timelineRefs.current[index] = el)}
          >
            <div className="timeline-marker">
            <div className="timeline-icon">
              <img src={item.icon} alt={`${item.title} logo`} />
            </div>
              <div className="timeline-year">{item.year}</div>
            </div>
            
            <div className="timeline-content">
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <h3>{item.title}</h3>
                  <span className="company">{item.company}</span>
                </div>
                <p>{item.description}</p>
                
                <div className="timeline-actions">
                  <button 
                    className="expand-button"
                    onClick={() => handleExpand(index)}
                  >
                    {expandedItem === index ? 'Show Less' : 'View More'}
                  </button>
                </div>

                {expandedItem === index && (
                  <div className="expanded-content">
                    <div className="detail-section">
                      <h4>Duration</h4>
                      <p>{item.details.duration}</p>
                    </div>
                    
                    <div className="detail-section">
                      <h4>Key Achievements</h4>
                      <ul>
                        {item.details.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4>Skills Developed</h4>
                      <div className="skills-tags">
                        {item.details.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="detail-section">
                      <h4>Highlight</h4>
                      <p className="highlight-text">{item.details.highlights}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
