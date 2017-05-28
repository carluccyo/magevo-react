import React, { Component } from 'react';




class Top extends Component {
    state = {  }
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
                    
                </div>
            </div>
            
        );
    }
}






class Hone extends Component {
    state = {}
    render() {
        return (
            <div>
                <Top />
            </div>


        );
    }
}

export default Hone;