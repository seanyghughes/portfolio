// src/components/ProjectGallery.js
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: '/assets/images/project1.jpg',
    link: '/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    image: '/assets/images/project2.jpg',
    link: '/project2',
  },
  // Add more projects as needed
];

const ProjectGallery = () => {
  return (
    <div style={galleryStyle}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

const galleryStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
};

export default ProjectGallery;
