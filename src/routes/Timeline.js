import React, { Component } from 'react';


class Timeline extends Component {
    state = {  }
    render() {
        return (

            <div>
                <div className="header text-center">
                    <h3 className="title">Timeline</h3>
                </div>

                <div className="row">
                        <div className="col-md-12">
                            <div className="card card-plain">
                                <div className="card-content">
                                    <ul className="timeline">
                                        <li className="timeline-inverted">
                                            <div className="timeline-badge danger">
                                                <i className="material-icons">card_travel</i>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <span className="label label-danger">Some Title</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>
                                                </div>
                                                <h6>
                                                    <i className="ti-time"></i> 11 hours ago via Twitter
                                                </h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-badge success">
                                                <i className="material-icons">extension</i>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <span className="label label-success">Another One</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-badge info">
                                                <i className="material-icons">fingerprint</i>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <span className="label label-info">Another Title</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>
                                                    <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
                                                    <hr />
                                                    <div className="dropdown pull-left">
                                                        <button type="button" className="btn btn-round btn-info dropdown-toggle" data-toggle="dropdown">
                                                            <i className="material-icons">build</i>
                                                            <span className="caret"></span>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-right" role="menu">
                                                            <li>
                                                                <a href="#action">Action</a>
                                                            </li>
                                                            <li>
                                                                <a href="#action">Another action</a>
                                                            </li>
                                                            <li>
                                                                <a href="#here">Something else here</a>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                                <a href="#link">Separated link</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-badge warning">
                                                <i className="material-icons">flight_land</i>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <span className="label label-warning">Another One</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


            </div>

            
        );
    }
}

export default Timeline;