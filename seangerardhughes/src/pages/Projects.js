import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence and KPI tracking',
      image: 'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Analytics+Dashboard',
      category: 'data-analytics',
      technologies: ['Python', 'Tableau', 'SQL', 'Power BI'],
      liveUrl: 'https://example.com/dashboard',
      githubUrl: 'https://github.com/username/dashboard',
      featured: true
    },
    {
      id: 2,
      title: 'Machine Learning Model',
      description: 'Predictive analytics model for customer behavior analysis',
      image: 'https://via.placeholder.com/300x200/50C878/FFFFFF?text=ML+Model',
      category: 'machine-learning',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      liveUrl: 'https://example.com/ml-model',
      githubUrl: 'https://github.com/username/ml-model',
      featured: true
    },
    {
      id: 3,
      title: 'E-commerce Analytics',
      description: 'Comprehensive analytics solution for online retail performance',
      image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=E-commerce+Analytics',
      category: 'data-analytics',
      technologies: ['R', 'Tableau', 'Google Analytics', 'SQL'],
      liveUrl: 'https://example.com/ecommerce-analytics',
      githubUrl: 'https://github.com/username/ecommerce-analytics',
      featured: false
    },
    {
      id: 4,
      title: 'Process Automation Tool',
      description: 'Automated workflow solution for data processing tasks',
      image: 'https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Process+Automation',
      category: 'automation',
      technologies: ['Python', 'Selenium', 'PostgreSQL', 'Docker'],
      liveUrl: 'https://example.com/automation-tool',
      githubUrl: 'https://github.com/username/automation-tool',
      featured: false
    },
    {
      id: 5,
      title: 'Data Visualization Library',
      description: 'Custom charting library for complex data visualization',
      image: 'https://via.placeholder.com/300x200/F39C12/FFFFFF?text=Data+Viz+Library',
      category: 'data-visualization',
      technologies: ['JavaScript', 'D3.js', 'React', 'TypeScript'],
      liveUrl: 'https://example.com/viz-library',
      githubUrl: 'https://github.com/username/viz-library',
      featured: true
    },
    {
      id: 6,
      title: 'Business Intelligence Report',
      description: 'Automated reporting system for executive decision making',
      image: 'https://via.placeholder.com/300x200/1ABC9C/FFFFFF?text=BI+Report',
      category: 'business-intelligence',
      technologies: ['Power BI', 'SQL Server', 'Azure', 'Power Automate'],
      liveUrl: 'https://example.com/bi-report',
      githubUrl: 'https://github.com/username/bi-report',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'data-analytics', name: 'Data Analytics' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'automation', name: 'Process Automation' },
    { id: 'data-visualization', name: 'Data Visualization' },
    { id: 'business-intelligence', name: 'Business Intelligence' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Portfolio Projects</h1>
        <p>Explore my work in data analytics, machine learning, and business intelligence</p>
      </div>

      <div className="projects-controls">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search projects, technologies, or descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-filter ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            {project.featured && <div className="featured-badge">Featured</div>}
            
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          <h3>No projects found</h3>
          <p>Try adjusting your search terms or category filter</p>
        </div>
      )}
    </div>
  );
}

export default Projects;
