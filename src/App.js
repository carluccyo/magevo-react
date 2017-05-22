import React, { Component } from 'react';

import './App.css';

import Sidebar from './Sidebar';
import Navbar from './Navbar';


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <div className="main-panel">
                    <Navbar />
                    <div className="content">
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
