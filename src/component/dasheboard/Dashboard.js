import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
import {connect} from 'react-redux';
// import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

import {getProjectsFromDB} from '../../store/actions/projectActions';
class Dasboard extends React.Component {
  componentDidMount() {
    this.props.getProjectsFromDB();
  }
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={this.props.projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects,
  };
};
const mapDispatchToProps = {
  getProjectsFromDB,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Dasboard);
