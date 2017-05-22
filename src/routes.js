import React from 'react'
import App from './App';
import Dashboard from './Dashboard';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)







const Routes = () => (
  <Router basename='/'>
    <Route exact path="/" component={App}/>
  </Router>
)

export default Routes;

