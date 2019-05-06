import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dasheboard/Dashboard';
import ProjectDetails from './component/project/ProjectDetails';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import Createproject from './component/project/CreateProject';
import history from './history';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={Createproject} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
