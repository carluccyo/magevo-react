import React from 'react'
import App from './App';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';



const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App}/>
      {/*<Redirect from="/old-match" to="/will-match"/>
      <Route path="/will-match" component={WillMatch}/>
      <Route component={NoMatch}/>*/}
    </Switch>
  </Router>
)
export default Routes;

