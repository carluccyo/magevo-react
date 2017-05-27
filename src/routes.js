import React, { Component } from 'react';
// import App from './App';


import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  // Redirect
} from 'react-router-dom';


import './App.css';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './routes/Dashboard';
import Buttons from './routes/Buttons';
import Tables from './routes/Tables';

import Grid from './routes/Grid';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <div className="main-panel">
          <Navbar />
          <div className="content">
            <div className="container-fluid">
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/buttons' component={Buttons} />
                <Route exact path='/tables' component={Tables} />
                <Route exact path='/grid' component={Grid} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




const Routes = () => (
  <Router>
    <App />
  </Router>
)

export default Routes;

