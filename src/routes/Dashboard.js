import React, { Component, cloneElement, Children } from 'react';

import card1 from '../assets/img/card-1.jpeg';
import card2 from '../assets/img/card-2.jpeg';
import card3 from '../assets/img/card-3.jpeg';

import Chartist from 'chartist/dist/chartist';

import PropTypes from 'prop-types';



class ChartistGraph extends Component {

    componentWillReceiveProps(newProps) {
        this.updateChart(newProps);
    }

    componentWillUnmount() {
        if (this.chartist) {
            try {
                this.chartist.detach();
            } catch (err) {
                throw new Error('Internal chartist error', err);
            }
        }
    }

    componentDidMount() {
        this.updateChart(this.props);
    }

    updateChart(config) {

        // let Chartist = require('chartist');

        let { type, data } = config;
        let options = config.options || {};
        let responsiveOptions = config.responsiveOptions || [];
        let event;

        if (this.chartist) {
            this.chartist.update(data, options, responsiveOptions);
        } else {
            this.chartist = new Chartist[type](this.refs.chart, data, options, responsiveOptions);

            if (config.listener) {
                for (event in config.listener) {
                    if (config.listener.hasOwnProperty(event)) {
                        this.chartist.on(event, config.listener[event]);
                    }
                }
            }
        }

        return this.chartist;
    }

    render() {
        const { className, style, children, data, type } = this.props;
        const childrenWithProps = children && Children.map(children, (child) => (
            cloneElement(child, {
                type,
                data
            })
        ));
        return (
            <div className={`ct-chart ${className || ''}`} ref='chart' style={style}>
                {childrenWithProps}
            </div>
        )
    }
}

ChartistGraph.propTypes = {
    type: PropTypes.oneOf(['Line', 'Bar', 'Pie']).isRequired,
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
    options: PropTypes.object,
    responsiveOptions: PropTypes.array,
    style: PropTypes.object
}








class Dashboard extends Component {

    state = {

        data: {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
                [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
        },

        options: {
            high: 10,
            low: -10,
            axisX: {
                labelInterpolationFnc: function (value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        },

        type: 'Bar',
        aspectRatio: 'ct-octave'

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card-chart" data-count="8">
                            <div className="card-header" data-background-color="rose" data-header-animation="true">
                                <div className="ct-chart" id="websiteViewsChart">
                                    <ChartistGraph className={this.state.aspectRatio} data={this.state.data} options={this.state.options} type={this.state.type} />
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-actions">
                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                        <i className="material-icons">build</i> Fix Header!
                                        </button>
                                    <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Refresh">
                                        <i className="material-icons">refresh</i>
                                    </button>
                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Change Date">
                                        <i className="material-icons">edit</i>
                                    </button>
                                </div>
                                <h4 className="card-title">Website Views</h4>
                                <p className="category">Last Campaign Performance</p>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons">access_time</i> campaign sent 2 days ago
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-chart" data-count="11">
                            <div className="card-header" data-background-color="green" data-header-animation="true">
                                <div className="ct-chart" id="dailySalesChart">
                                    <ChartistGraph className={this.state.aspectRatio} data={this.state.data} options={this.state.options} type={this.state.type} />
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-actions">
                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                        <i className="material-icons">build</i> Fix Header!
                                        </button>
                                    <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Refresh">
                                        <i className="material-icons">refresh</i>
                                    </button>
                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Change Date">
                                        <i className="material-icons">edit</i>
                                    </button>
                                </div>
                                <h4 className="card-title">Daily Sales</h4>
                                <p className="category">
                                    <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons">access_time</i> updated 4 minutes ago
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-chart" data-count="3">
                            <div className="card-header" data-background-color="blue" data-header-animation="true">
                                <div className="ct-chart" id="completedTasksChart">
                                    <ChartistGraph className={this.state.aspectRatio} data={this.state.data} options={this.state.options} type={this.state.type} />
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-actions">
                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                        <i className="material-icons">build</i> Fix Header!
                                        </button>
                                    <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Refresh">
                                        <i className="material-icons">refresh</i>
                                    </button>
                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Change Date">
                                        <i className="material-icons">edit</i>
                                    </button>
                                </div>
                                <h4 className="card-title">Completed Tasks</h4>
                                <p className="category">Last Campaign Performance</p>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons">access_time</i> campaign sent 2 days ago
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>




                <h3>Manage Listings</h3>
                <br />

                <div className="row">
                    
                    <div className="col-md-4">
                        <div className="card card-product" data-count="13">

                            <div className="card-image" data-header-animation="true">
                                <a href="#pablo">
                                    <img className="img" src={card2} alt="card2" />
                                </a>
                            </div>

                            <div className="card-content">
                                <div className="card-actions">
                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                        <i className="material-icons">build</i> Fix Header!
                                        </button>
                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="View">
                                        <i className="material-icons">art_track</i>
                                        <div className="ripple-container"></div></button>
                                    <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Edit">
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Remove">
                                        <i className="material-icons">close</i>
                                    </button>
                                </div>
                                <h4 className="card-title">
                                    <a href="#pablo">Cozy 5 Stars Apartment</a>
                                </h4>
                                <div className="card-description">
                                    The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                                    </div>
                            </div>
                            <div className="card-footer">
                                <div className="price">
                                    <h4>$899/night</h4>
                                </div>
                                <div className="stats pull-right">
                                    <p className="category"><i className="material-icons">place</i> Barcelona, Spain</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-product" data-count="9">
                            <div className="card-image" data-header-animation="true">
                                <a href="#pablo">
                                    <img className="img" src={card3} />
                                </a>
                            </div>
                            <div className="card-content">
                                <div className="card-actions">
                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                        <i className="material-icons">build</i> Fix Header!
                                        </button>
                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="View">
                                        <i className="material-icons">art_track</i>
                                    </button>
                                    <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Edit">
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Remove">
                                        <i className="material-icons">close</i>
                                    </button>
                                </div>
                                <h4 className="card-title">
                                    <a href="#pablo">Office Studio</a>
                                </h4>
                                <div className="card-description">
                                    The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.
                                    </div>
                            </div>
                            <div className="card-footer">
                                <div className="price">
                                    <h4>$1.119/night</h4>
                                </div>
                                <div className="stats pull-right">
                                    <p className="category"><i className="material-icons">place</i> London, UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-product" data-count="6">
                            <div className="card-image" data-header-animation="true">
                                <a href="#pablo">
                                    <img className="img" src={card1} />
                                </a>
                            </div>
                            <div className="card-content">
                                <div className="card-actions">
                                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                        <i className="material-icons">build</i> Fix Header!
                                        </button>
                                    <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="View">
                                        <i className="material-icons">art_track</i>
                                    </button>
                                    <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Edit">
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Remove">
                                        <i className="material-icons">close</i>
                                    </button>
                                </div>
                                <h4 className="card-title">
                                    <a href="#pablo">Beautiful Castle</a>
                                </h4>
                                <div className="card-description">
                                    The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.
                                    </div>
                            </div>
                            <div className="card-footer">
                                <div className="price">
                                    <h4>$459/night</h4>
                                </div>
                                <div className="stats pull-right">
                                    <p className="category"><i className="material-icons">place</i> Milan, Italy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header" data-background-color="orange">
                                <i className="material-icons">weekend</i>
                            </div>
                            <div className="card-content">
                                <p className="category">Bookings</p>
                                <h3 className="card-title">184</h3>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a href="#pablo">Get More Space...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header" data-background-color="rose">
                                <i className="material-icons">equalizer</i>
                            </div>
                            <div className="card-content">
                                <p className="category">Website Visits</p>
                                <h3 className="card-title">75.521</h3>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons">local_offer</i> Tracked from Google Analytics
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header" data-background-color="green">
                                <i className="material-icons">store</i>
                            </div>
                            <div className="card-content">
                                <p className="category">Revenue</p>
                                <h3 className="card-title">$34,245</h3>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons">date_range</i> Last 24 Hours
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header" data-background-color="blue">
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="card-content">
                                <p className="category">Followers</p>
                                <h3 className="card-title">+245</h3>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons">update</i> Just Updated
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        );
    }
}

export default Dashboard;