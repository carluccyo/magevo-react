import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sidebar from './Sidebar';

class App extends Component {
    render() {
        return (
            <div className="wrapper">

                <Sidebar />

                <div className="main-panel">
                    <nav className="navbar navbar-transparent navbar-absolute">
                        <div className="container-fluid">

                            <div className="navbar-minimize">
                                <button id="minimizeSidebar" className="btn btn-round btn-white btn-fill btn-just-icon">
                                    <i className="material-icons visible-on-sidebar-regular">more_vert</i>
                                    <i className="material-icons visible-on-sidebar-mini">view_list</i>
                                </button>
                            </div>

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar" >
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#"> Buttons </a>
                            </div>

                            <div id="navbar" className="navbar-collapse collapse" >

                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="material-icons">dashboard</i>
                                            <p className="hidden-lg hidden-md">Dashboard</p>
                                        </a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="material-icons">notifications</i>
                                            <span className="notification">5</span>
                                            <p className="hidden-lg hidden-md">
                                                Notifications
                                        <b className="caret"></b>
                                            </p>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="#">Mike John responded to your email</a>
                                            </li>
                                            <li>
                                                <a href="#">You have 5 new tasks</a>
                                            </li>
                                            <li>
                                                <a href="#">You're now friend with Andrew</a>
                                            </li>
                                            <li>
                                                <a href="#">Another Notification</a>
                                            </li>
                                            <li>
                                                <a href="#">Another One</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="material-icons">person</i>
                                            <p className="hidden-lg hidden-md">Profile</p>
                                        </a>
                                    </li>
                                    <li className="separator hidden-lg hidden-md"></li>
                                </ul>

                                <form className="navbar-form navbar-right" role="search">
                                    <div className="form-group form-search is-empty">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <span className="material-input"></span>
                                    </div>
                                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                        <i className="material-icons">search</i>
                                        <div className="ripple-container"></div>
                                    </button>
                                </form>

                            </div>
                        </div>

                    </nav>

                    <div className="content">
                        <div className="container-fluid">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card-header">
                                            <h4 className="card-title">Pick your Color</h4>
                                        </div>
                                        <div className="card-content">
                                            <button className="btn">Default</button>
                                            <button className="btn btn-primary">Primary</button>
                                            <button className="btn btn-info">Info</button>
                                            <button className="btn btn-success">Success</button>
                                            <button className="btn btn-warning">Warning</button>
                                            <button className="btn btn-danger">Danger</button>
                                            <button className="btn btn-rose">Rose</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-header">
                                            <h4 className="card-title">Buttons with Label</h4>
                                        </div>
                                        <div className="card-content">
                                            <button className="btn">
                                                <span className="btn-label">
                                                    <i className="material-icons">keyboard_arrow_left</i>
                                                </span>
                                                Left
                                    </button>
                                            <button className="btn">
                                                Right
                                        <span className="btn-label btn-label-right">
                                                    <i className="material-icons">keyboard_arrow_right</i>
                                                </span>
                                            </button>
                                            <button className="btn btn-info">
                                                <span className="btn-label">
                                                    <i className="material-icons">priority_high</i>
                                                </span>
                                                Info
                                    </button>
                                            <button className="btn btn-success">
                                                <span className="btn-label">
                                                    <i className="material-icons">check</i>
                                                </span>
                                                Success
                                    </button>
                                            <button className="btn btn-warning">
                                                <i className="material-icons">warning</i> Warning
                                    </button>
                                            <button className="btn btn-danger">
                                                <i className="material-icons">close</i> Danger
                                    </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card-header">
                                            <h4 className="card-title">Pick your Size</h4>
                                        </div>
                                        <div className="card-content">
                                            <button className="btn btn-primary btn-xs">x-Small</button>
                                            <button className="btn btn-primary btn-sm">Small</button>
                                            <button className="btn btn-primary">Regular</button>
                                            <button className="btn btn-primary btn-lg">Large</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-header">
                                            <h4 className="card-title">Pick your Style</h4>
                                        </div>
                                        <div className="card-content">
                                            <button className="btn btn-primary">Default</button>
                                            <button className="btn btn-primary btn-round">round</button>
                                            <button className="btn btn-primary btn-round">
                                                <i className="material-icons">favorite</i> with icon
                                    </button>
                                            <button className="btn btn-primary btn-round btn-fab btn-fab-mini">
                                                <i className="material-icons">favorite</i>
                                            </button>
                                            <button className="btn btn-primary btn-simple">
                                                simple
                                    </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card-header">
                                            <h4 className="card-title">Pagination</h4>
                                        </div>
                                        <div className="card-content">
                                            <ul className="pagination pagination-primary">
                                                <li>
                                                    <a href="javascript:void(0);">1</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">...</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">5</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">6</a>
                                                </li>
                                                <li className="active">
                                                    <a href="javascript:void(0);">7</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">8</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">9</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">...</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">12</a>
                                                </li>
                                            </ul>
                                            <ul className="pagination pagination-info">
                                                <li>
                                                    <a href="javascript:void(0);"> prev</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">1</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">2</a>
                                                </li>
                                                <li className="active">
                                                    <a href="javascript:void(0);">3</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">4</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">5</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">next </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-header">
                                            <h4 className="card-title">Button Group</h4>
                                        </div>
                                        <div className="card-content">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-info">Left</button>
                                                <button type="button" className="btn btn-info">Middle</button>
                                                <button type="button" className="btn btn-info">Right</button>
                                            </div>
                                            <br />
                                            <br />
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-round btn-info">1</button>
                                                <button type="button" className="btn btn-round btn-info">2</button>
                                                <button type="button" className="btn btn-round btn-info">3</button>
                                                <button type="button" className="btn btn-round btn-info">4</button>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-round btn-info">5</button>
                                                <button type="button" className="btn btn-round btn-info">6</button>
                                                <button type="button" className="btn btn-round btn-info">7</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card-header">
                                            <h4 className="card-title">Social buttons</h4>
                                        </div>
                                        <div className="card-content">
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <button className="btn btn-social btn-fill btn-twitter">
                                                        <i className="fa fa-twitter"></i> Connect with Twitter
                                            </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-twitter">
                                                        <i className="fa fa-twitter"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-round btn-twitter">
                                                        <i className="fa fa-twitter"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-simple btn-twitter">
                                                        <i className="fa fa-twitter"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button className="btn btn-simple btn-twitter">
                                                        <i className="fa fa-twitter"></i> Connect with Twitter
                                            </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <button className="btn btn-social btn-fill btn-facebook">
                                                        <i className="fa fa-facebook-square"></i> Share &middot; 2.2k
                                            </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-facebook">
                                                        <i className="fa fa-facebook"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-round btn-facebook">
                                                        <i className="fa fa-facebook"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-simple btn-facebook">
                                                        <i className="fa fa-facebook-square"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button className="btn btn-simple btn-facebook">
                                                        <i className="fa fa-facebook-square"></i> Share &middot; 2.2k
                                            </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <button className="btn btn-social btn-fill btn-google">
                                                        <i className="fa fa-google-square"></i> Share on Google+
                                            </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon  btn-google">
                                                        <i className="fa fa-google"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-round btn-google">
                                                        <i className="fa fa-google"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-simple btn-google">
                                                        <i className="fa fa-google"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button className="btn btn-simple btn-google">
                                                        <i className="fa fa-google-square"></i> Share on Google+
                                            </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <button className="btn btn-social btn-fill btn-linkedin">
                                                        <i className="fa fa-linkedin-square"></i> Connect with Linkedin
                                            </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon  btn-linkedin">
                                                        <i className="fa fa-linkedin"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-round btn-linkedin">
                                                        <i className="fa fa-linkedin"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-simple btn-linkedin">
                                                        <i className="fa fa-linkedin-square"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button className="btn btn-simple btn-linkedin">
                                                        <i className="fa fa-linkedin-square"></i> Connect with Linkedin
                                            </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <button className="btn btn-social btn-fill btn-pinterest">
                                                        <i className="fa fa-pinterest"></i> Pint it &middot; 212
                                            </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon  btn-pinterest">
                                                        <i className="fa fa-pinterest"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-round btn-pinterest">
                                                        <i className="fa fa-pinterest"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-simple btn-pinterest">
                                                        <i className="fa fa-pinterest"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button className="btn btn-simple btn-pinterest">
                                                        <i className="fa fa-pinterest"></i> Pint it &middot; 212
                                            </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <button className="btn btn-social btn-fill btn-youtube">
                                                        <i className="fa fa-youtube-play"></i> View on Youtube
                                            </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon  btn-youtube">
                                                        <i className="fa fa-youtube"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-round btn-youtube">
                                                        <i className="fa fa-youtube"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-simple btn-youtube">
                                                        <i className="fa fa-youtube"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button className="btn btn-simple btn-youtube">
                                                        <i className="fa fa-youtube-play"></i> View on Youtube
                                            </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <button className="btn btn-social btn-fill btn-tumblr">
                                                        <i className="fa fa-tumblr-square"></i> Repost
                                            </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon  btn-tumblr">
                                                        <i className="fa fa-tumblr"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-round btn-tumblr">
                                                        <i className="fa fa-tumblr"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-simple btn-tumblr">
                                                        <i className="fa fa-tumblr-square"> </i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button className="btn btn-simple btn-tumblr">
                                                        <i className="fa fa-tumblr-square"></i> Repost
                                            </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <button className="btn btn-social btn-fill btn-github">
                                                        <i className="fa fa-github"></i> Connect with Github
                                            </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon  btn-github">
                                                        <i className="fa fa-github"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-round btn-github">
                                                        <i className="fa fa-github"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-simple btn-github">
                                                        <i className="fa fa-github"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button className="btn btn-simple btn-github">
                                                        <i className="fa fa-github"></i> Connect with Github
                                            </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <button className="btn btn-social btn-fill btn-behance">
                                                        <i className="fa fa-behance-square"></i> Follow us
                                            </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon  btn-behance">
                                                        <i className="fa fa-behance"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-round btn-behance">
                                                        <i className="fa fa-behance"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-simple btn-behance">
                                                        <i className="fa fa-behance"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button className="btn btn-simple btn-behance">
                                                        <i className="fa fa-behance-square"></i> Follow us
                                            </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <button className="btn btn-social btn-fill btn-dribbble">
                                                        <i className="fa fa-dribbble"></i> Find us on Dribble
                                            </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon  btn-dribbble">
                                                        <i className="fa fa-dribbble"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-round btn-dribbble">
                                                        <i className="fa fa-dribbble"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-simple btn-dribbble">
                                                        <i className="fa fa-dribbble"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button className="btn btn-simple btn-dribbble">
                                                        <i className="fa fa-dribbble"></i> Find us on Dribble
                                            </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4">
                                                    <button className="btn btn-social btn-fill btn-reddit">
                                                        <i className="fa fa-reddit"></i> Repost &middot; 232
                                            </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon  btn-reddit">
                                                        <i className="fa fa-reddit"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-round btn-reddit">
                                                        <i className="fa fa-reddit"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="btn btn-just-icon btn-simple btn-reddit">
                                                        <i className="fa fa-reddit"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button className="btn btn-simple btn-reddit">
                                                        <i className="fa fa-reddit"></i> Repost &middot; 232
                                            </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>



            </div>
        );
    }
}

export default App;
