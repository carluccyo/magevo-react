import React, { Component } from 'react';


class Buttons extends Component {
    state = {}
    render() {
        return (
            <div className="card">

                <div className="row">

                    <div className="col-md-6">
                        <div className="card-header">
                            <h4 className="card-title">Pick your Color (Ripple)</h4>
                        </div>
                        <div className="card-content">
                            <button className="btn mdl-js-button mdl-button--raised mdl-js-ripple-effect">Default</button>
                            <button className="btn btn-primary mdl-js-button mdl-button--raised mdl-js-ripple-effect">Primary</button>
                            <button className="btn btn-info mdl-js-button mdl-button--raised mdl-js-ripple-effect">Info</button>
                            <button className="btn btn-success mdl-js-button mdl-button--raised mdl-js-ripple-effect">Success</button>
                            <button className="btn btn-warning mdl-js-button mdl-button--raised mdl-js-ripple-effect">Warning</button>
                            <button className="btn btn-danger mdl-js-button mdl-button--raised mdl-js-ripple-effect">Danger</button>
                            <button className="btn btn-rose mdl-js-button mdl-button--raised mdl-js-ripple-effect">Rose</button>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card-header">
                            <h4 className="card-title">Pick your Color2</h4>
                        </div>
                        <div className="card-content">

                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                                <i className="material-icons">add</i>
                            </button>

                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                                <i className="material-icons">alarm_on</i>
                            </button>
                        </div>
                    </div>


                </div>


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
                                    <a href="">1</a>
                                </li>
                                <li>
                                    <a href="">...</a>
                                </li>
                                <li>
                                    <a href="">5</a>
                                </li>
                                <li>
                                    <a href="">6</a>
                                </li>
                                <li className="active">
                                    <a href="">7</a>
                                </li>
                                <li>
                                    <a href="">8</a>
                                </li>
                                <li>
                                    <a href="">9</a>
                                </li>
                                <li>
                                    <a href="">...</a>
                                </li>
                                <li>
                                    <a href="">12</a>
                                </li>
                            </ul>
                            <ul className="pagination pagination-info">
                                <li>
                                    <a href=""> prev</a>
                                </li>
                                <li>
                                    <a href="">1</a>
                                </li>
                                <li>
                                    <a href="">2</a>
                                </li>
                                <li className="active">
                                    <a href="">3</a>
                                </li>
                                <li>
                                    <a href="">4</a>
                                </li>
                                <li>
                                    <a href="">5</a>
                                </li>
                                <li>
                                    <a href="">next </a>
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
        );
    }
}

export default Buttons;