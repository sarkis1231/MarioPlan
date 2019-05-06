import React from 'react';

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project summary">
      <div className="card content gray-text text-darken-3 card-design">
        <span className="card-title">{project.title}</span>
        <p>Posted by User</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
