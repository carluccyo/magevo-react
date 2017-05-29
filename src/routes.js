import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';


import './App.css';

import Sidebar from './Sidebar';
import MiniSidebar from './MiniSidebar';
import Navbar from './Navbar';
import Dashboard from './routes/Dashboard';
import Buttons from './routes/Buttons';
import Tables from './routes/Tables';
import Timeline from './routes/Timeline';

import Home from './routes/Home';

import Grid from './routes/Grid';
import UserProfile from './routes/UserProfile';

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="#">
                                    Home
                            </a>
                            </li>
                            <li>
                                <a href="#">
                                    Company
                            </a>
                            </li>
                            <li>
                                <a href="#">
                                    Portfolio
                            </a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog
                            </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        © <a href="">Company</a>, made with love for a better web
                </p>
                </div>
            </footer>
        );
    }
}







class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <MiniSidebar />
                <div className="main-panel">
                    <Navbar />
                    <div className="content">
                        <div className="container-fluid">
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/dashboard' component={Dashboard} />
                                <Route exact path='/buttons' component={Buttons} />
                                <Route exact path='/tables' component={Tables} />
                                <Route exact path='/grid' component={Grid} />
                                <Route exact path='/timeline' component={Timeline} />
                                <Route exact path='/userProfile' component={UserProfile} />
                            </Switch>
                        </div>
                    </div>
                    <Footer />
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

