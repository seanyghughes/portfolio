// components/CareerTimeline.js
import React, { useEffect, useRef, useState } from 'react';
import './CareerTimeline.css';

export default function CareerTimeline() {
  const timelineRefs = useRef([]);
  const [expandedItem, setExpandedItem] = useState(null);

  const timelineData = [
    { 
      year: "2020", 
      title: "Bachelor's of Arts - Information Technology & Economics", 
      company: "University of Galway, Ireland",
      description: "Completed my degree with honors and gained foundational knowledge in data analytics.",
      icon: "🎓",
      details: {
        duration: "2017 - 2020",
        achievements: [
          "Graduated with First Class Honours",
          "Specialized in Data Analytics and Economic Modeling",
          "Completed final year project on 'Predictive Analytics in Financial Markets'",
          "Member of the Data Science Society"
        ],
        skills: ["SQL", "Python", "R", "Statistical Analysis", "Economic Theory"],
        highlights: "Led a team of 5 students in developing a machine learning model for stock price prediction, achieving 78% accuracy."
      }
    },
    { 
      year: "2021", 
      title: "Master of Science - Information Systems Management", 
      company: "University of Galway, Ireland", 
      description: "Worked on improving data pipelines and creating insightful dashboards for the marketing team.",
      icon: "📊",
      details: {
        duration: "2020 - 2021",
        achievements: [
          "Distinction in Advanced Analytics",
          "Published research on 'Big Data in Healthcare'",
          "Developed automated reporting systems",
          "Mentored undergraduate students"
        ],
        skills: ["Machine Learning", "Big Data", "Tableau", "Power BI", "Data Engineering"],
        highlights: "Designed and implemented a real-time analytics dashboard that reduced reporting time by 85% for the marketing department."
      }
    },
    { 
      year: "2021", 
      title: "Research Assistant - Business Information Systems",
      company: "University of Galway, Ireland", 
      description: "Led a team of analysts and worked on predictive modeling projects.",
      icon: "🔬",
      details: {
        duration: "2021 - 2022",
        achievements: [
          "Published 3 peer-reviewed papers",
          "Secured €50,000 in research funding",
          "Presented at international conferences",
          "Supervised 3 PhD students"
        ],
        skills: ["Research Methods", "Academic Writing", "Statistical Modeling", "R", "Python"],
        highlights: "Developed a novel algorithm for customer segmentation that improved marketing ROI by 40%."
      }
    },
    { 
      year: "2021", 
      title: "Technical Product & Data Analyst", 
      company: "Fiit",
      description: "Led a team of analysts and worked on predictive modeling projects.",
      icon: "💼",
      details: {
        duration: "2021 - 2022",
        achievements: [
          "Increased product adoption by 35%",
          "Reduced customer churn by 25%",
          "Implemented A/B testing framework",
          "Mentored junior analysts"
        ],
        skills: ["Product Analytics", "A/B Testing", "SQL", "Python", "User Research"],
        highlights: "Built a customer lifetime value model that helped increase revenue by €2M annually."
      }
    },
    { 
      year: "2022", 
      title: "Joined XL Media as a Data Analyst", 
      company: "XL Media",
      description: "Currently managing a team of data professionals to drive business decisions through analytics.",
      icon: "📈",
      details: {
        duration: "2022 - 2024",
        achievements: [
          "Led team of 8 data analysts",
          "Improved conversion rates by 45%",
          "Implemented real-time analytics",
          "Reduced operational costs by 30%"
        ],
        skills: ["Team Leadership", "Conversion Optimization", "Real-time Analytics", "Business Intelligence"],
        highlights: "Transformed the company's data culture, resulting in data-driven decisions across all departments."
      }
    },
    { 
      year: "2025", 
      title: "Joined Semrush as a Data Analyst", 
      company: "Semrush",
      description: "Currently managing a team of data professionals to drive business decisions through analytics.",
      icon: "🚀",
      details: {
        duration: "2025 - Present",
        achievements: [
          "Leading global analytics initiatives",
          "Implementing advanced ML models",
          "Driving data strategy",
          "Mentoring international teams"
        ],
        skills: ["Global Analytics", "Machine Learning", "Strategic Planning", "Cross-cultural Leadership"],
        highlights: "Pioneering AI-driven insights that are transforming how businesses approach digital marketing analytics."
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
              <div className="timeline-icon">{item.icon}</div>
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
