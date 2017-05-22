import React from 'react'
import App from './App';

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
  <Router>
    <Switch>
      <Route path="/" exact component={App}>
        <Route path="/about" component={App}/>
      </Route>
      
      {/*<Redirect from="/old-match" to="/will-match"/>
      <Route path="/will-match" component={WillMatch}/>
      <Route component={NoMatch}/>*/}
    </Switch>
  </Router>
)
export default Routes;

