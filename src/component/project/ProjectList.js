import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  // const [name,setName] = useState('');
  // const [lastname, setLastname] = useState(false);

  return (
    <div className="project-list section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};
export default ProjectList;
