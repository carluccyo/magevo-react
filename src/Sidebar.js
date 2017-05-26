import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

// import './App.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" data-active-color="blue" data-background-color="white" data-image="../assets/img/sephora2.png">
                <div className="logo">
                    <a href="#" className="simple-text">
                        <img width="100px" src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2575343/1162/776/m1/fpnw/wm0/1-.jpg?1492766875&s=b84d7135a1fbf8221a200ec727fd5e17" />
                    </a>
                </div>

                <div className="logo logo-mini">
                    <a href="#" className="simple-text">
                        <img width="50px" src="https://s-media-cache-ak0.pinimg.com/originals/d9/3f/2c/d93f2c5d5a37dc2c4513f36d0be81946.jpg" />
                    </a>
                </div>

                <div className="sidebar-wrapper">
                    <div className="user">
                        <div className="photo">
                            <img src="https://s-media-cache-ak0.pinimg.com/originals/d9/3f/2c/d93f2c5d5a37dc2c4513f36d0be81946.jpg" />
                        </div>
                        <div className="info">
                            <a data-toggle="collapse" href="#collapseExample" className="collapsed">
                                Kim Stromberg
                                    <b className="caret"></b>
                            </a>
                            <div className="collapse" id="collapseExample">
                                <ul className="nav">

                                    <li>
                                        <a href="#">Access Panel</a>
                                    </li>
                                    <li>
                                        <a href="pages/login.html">Log out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="nav">
                        <li>
                            <a data-toggle="collapse" href="#read">
                                <i className="material-icons">timeline</i>
                                <p>Read
                              <b className="caret"></b>
                                </p>
                            </a>
                            <div className="collapse in" id="read">
                                <ul className="nav">
                                    
                                    <li className="active">
                                        {/*<a href="dashboard.html">Insights</a>*/}
                                        <NavLink to="/dashboard" activeClassName="selected">dashboard</NavLink>
                                    </li>
                                    <li>
                                        {/*<a href="improving.html">Improving</a>*/}
                                        <NavLink to="/buttons" activeClassName="selected">buttons</NavLink>
                                    </li>
                                    <li>
                                        {/*<a href="improving.html">Improving</a>*/}
                                        <NavLink to="/tables" activeClassName="selected">tables</NavLink>
                                    </li>


                                </ul>
                            </div>
                        </li>
                        <li>
                            <a data-toggle="collapse" href="#pagesExamples">
                                <i className="material-icons">message</i>
                                <p>Do
                                <b className="caret"></b>
                                </p>
                            </a>
                            <div className="collapse" id="pagesExamples">
                                <ul className="nav">
                                    <li>
                                        <a href="intelligentmessaging.html">Intelligent Messaging</a>
                                    </li>
                                    <li>
                                        <a href="">New feature request</a>
                                    </li>
                                    <li>
                                        <a href="">Report a problem</a>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li>
                            <a data-toggle="collapse" href="#componentsExamples">
                                <i className="material-icons">apps</i>
                                <p>Teach
                                <b className="caret"></b>
                                </p>
                            </a>
                            <div className="collapse" id="componentsExamples">
                                <ul className="nav">
                                    <li>
                                        <a href="NLU.html">NLP Engine</a>
                                    </li>
                                    <li>
                                        <a href="copywriting.html">Copywriting</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQs</a>
                                    </li>
                                </ul>
                            </div>
                        </li>


                    </ul>
                </div>

            </div>

        );
    }
}

export default Sidebar;
