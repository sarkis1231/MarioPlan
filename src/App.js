import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/layout/Navbar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Fragment />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
