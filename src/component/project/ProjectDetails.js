import React from 'react';
import {connect} from 'react-redux';
import {createProjectDB} from '../../store/actions/projectActions';
const ProjectDetails = props => {
  const id = props.match.params.id;
  console.log(props.project.map(item => item.title));

  return (
    <div>
      {props.project ? (
        props.project.map(item => (
          <div key={item.id} className="container section project-details">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">Project Title - {item.title}</span>
                <p>{item.content}</p>
              </div>
              <div className="card-action gret lighten-4 grey-text">
                <div>
                  Posted by {item.authorFirstName}
                  {'  '}
                  {item.authorLastName}
                </div>
                <div>2nd September, 2am </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="container center">
          <p>Loadin project...</p>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.project.projects;
  console.log(projects);
  const project = projects ? projects.filter(item => item.id === id) : null;
  return {
    project: project,
  };
};

export default connect(
  mapStateToProps,
  {
    createProjectDB,
  }
)(ProjectDetails);
