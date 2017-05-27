import React, { Component } from 'react';

class Buttons extends Component {
    state = {}
    render() {
        return (
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

            </div>
        );
    }
}

export default Buttons;