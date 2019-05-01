import React from 'react';

const ProjectList = () => {
  // const [name,setName] = useState('');
  // const [lastname, setLastname] = useState(false);

  return (
    <div className="project-list section">
      <div className="card z-depth-0 project summary">
        <div className="card content gray-text text-darken-3 card-design">
          <span className="card-title">Project Title</span>
          <p>Posted by User</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
      <div className="card z-depth-0 project summary">
        <div className="card content gray-text text-darken-3 card-design">
          <span className="card-title">Project Title</span>
          <p>Posted by User</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
      <div className="card z-depth-0 project summary">
        <div className="card content gray-text text-darken-3 card-design">
          <span className="card-title">Project Title</span>
          <p>Posted by User</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectList;
