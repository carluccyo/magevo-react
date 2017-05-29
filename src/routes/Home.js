import React, { Component } from 'react';

import card1 from '../assets/img/card-1.jpeg';
import card2 from '../assets/img/card-2.jpeg';
import card3 from '../assets/img/card-3.jpeg';


class Box extends Component {
    state = {}
    render() {
        return (

            // <div className="row">

                <div className="col-md-4 col-sm-6 ">
                    <div className="card card-product" data-count="13">

                        <div className="card-image" data-header-animation="false">
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
                                <a href="#pablo">{this.props.item.title}</a>
                            </h4>
                            <div className="card-description">{this.props.item.paragraph}</div>
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



            // </div>


        );
    }
}




class BoxList extends Component {

    constructor(props) {
        super(props);
    }

    state = {

    }

    render() {
        var stationComponents = this.props.items.map(function (item) {
            return <Box key={item.id} item={item} />;
        });
        return <div>{stationComponents}</div>;
    }
}


var RESULT = [
    { id: 1, title: 'title1', subtitle: 'title1', paragraph: 'paragraph1' },
    { id: 2, title: 'title2', subtitle: 'title2', paragraph: 'paragraph2' },
    { id: 3, title: 'title3', subtitle: 'title3', paragraph: 'paragraph3' },
    { id: 4, title: 'title4', subtitle: 'title4', paragraph: 'paragraph4' },
    { id: 5, title: 'title5', subtitle: 'title5', paragraph: 'paragraph5' },
    { id: 6, title: 'title6', subtitle: 'title6', paragraph: 'paragraph6' }
];



class Hone extends Component {
    state = {}
    render() {
        return (
            <div>
                <BoxList items={RESULT} />
            </div>
        );
    }
}

export default Hone;