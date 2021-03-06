import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

import avatar from './assets/img/avatar.jpg';
import wolf from './assets/img/wolf.jpg';
import wolf2 from './assets/img/wolf2.png';


import napoli from './assets/img/napoli.png';

class NavItem extends Component {

    render() {

        var tabClassName = this.props.activeItem === this.props.itemId ? "active" : "";

        return (
            <li className={tabClassName} onClick={this.props.action.bind(this, this.props.itemId)}  >
                <NavLink to={this.props.to}>{this.props.title}</NavLink>
            </li>
        );
    };

}


class Sidebar extends Component {

    constructor(props) {
        super(props);

        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);

        this.state = {
            activeItem: 'dashboard'
        };


    };

    handler(itemId) {

        this.setState({
            activeItem: itemId
        });
    }



    render() {
        return (
            <div className="sidebar" data-active-color="blue" data-background-color="white" data-image={wolf2}>

                <div className="logo">
                    <a href="" className="simple-text">
                        <img alt="" width="100px" src={wolf2} />
                    </a>
                </div>

                <div className="logo logo-mini">
                    <a href="" className="simple-text">
                        <img alt="" width="50px" src={wolf2} />
                    </a>
                </div>

                <div className="sidebar-wrapper">
                    <div className="user">
                        <div className="photo">
                            <img alt="" src={avatar} />
                        </div>
                        <div className="info">
                            <a data-toggle="collapse" href="#collapseExample" className="collapsed">
                                John Doe <b className="caret"></b>
                            </a>
                            <div className="collapse" id="collapseExample">
                                <ul className="nav">
                                    <li>
                                        <a href="">Access Panel</a>
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
                                <i className="material-icons">apps</i>
                                <p>Read
                              <b className="caret"></b>
                                </p>
                            </a>

                            <div className="collapse in" id="read">
                                <ul className="nav">
                                    <NavItem action={this.handler} activeItem={this.state.activeItem} itemId="dashboard" title="Dashboard" to="/" />
                                    <NavItem action={this.handler} activeItem={this.state.activeItem} itemId="buttons" title="Buttons" to="/buttons" />
                                    <NavItem action={this.handler} activeItem={this.state.activeItem} itemId="tables" title="Tables" to="/tables" />
                                    <NavItem action={this.handler} activeItem={this.state.activeItem} itemId="grid" title="Grid" to="/grid" />
                                    <NavItem action={this.handler} activeItem={this.state.activeItem} itemId="timeline" title="Timeline" to="/timeline" />
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
                                        <a href="">FAQs</a>
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
