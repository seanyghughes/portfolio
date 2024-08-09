// src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div style={cardStyle}>
      <Link to={project.link}>
        <img src={project.image} alt={project.title} style={imageStyle} />
        <h3>{project.title}</h3>
      </Link>
    </div>
  );
};

const cardStyle = {
  width: '300px',
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

export default ProjectCard;
