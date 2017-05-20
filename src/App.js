import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="sidebar" data-active-color="blue" data-background-color="white" data-image="../assets/img/sephora2.png">
          <div className="logo">
            <a href="#" className="simple-text">
              <img width="100px" src="../assets/img/logo.png" />
            </a>
          </div>

          <div className="logo logo-mini">
            <a href="#" className="simple-text">
              <img width="50px" src="../assets/img/logoshort.png" />
            </a>
          </div>

          <div className="sidebar-wrapper">
            <div className="user">
              <div className="photo">
                <img src="../assets/img/sephora2.png" />
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
                                  <a href="dashboard.html">Insights</a>
                              </li>
                              <li>
                                  <a href="improving.html">Improving</a>
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

        <button type="button" className="btn btn-default">Default</button>

        <button type="button" className="btn btn-primary">Primary</button>

        <button type="button" className="btn btn-success">Success</button>

        <button type="button" className="btn btn-info">Info</button>

        <button type="button" className="btn btn-warning">Warning</button>

        <button type="button" className="btn btn-danger">Danger</button>

        <button type="button" className="btn btn-link">Link</button>
      </div>
    );
  }
}

export default App;
