import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';
const ProjectList = ({projects}) => {
  // const [name,setName] = useState('');
  // const [lastname, setLastname] = useState(false);

  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link
              style={{color: 'black'}}
              to={`/project/${project.id}`}
              key={project.id}
            >
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};
export default ProjectList;
