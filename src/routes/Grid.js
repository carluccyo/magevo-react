import React, { Component, cloneElement, Children } from 'react';


class Grid extends Component {
    state = {}
    render() {
        return (
            
            <div className="container-fluid">
                <h4 className="title">XS Grid
                        <small>Always Horizontal</small>
                </h4>
                <div className="row">
                    <div className="col-xs-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-xs-4</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-xs-4</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-xs-4</code>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="title">SM Grid
                        <small>Collapsed at 768px</small>
                </h4>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-sm-4</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-sm-4</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-sm-4</code>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="title">MD Grid
                        <small>Collapsed at 992px</small>
                </h4>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-md-4</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-md-4</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-md-4</code>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="title">LG Grid
                        <small>Collapsed at 1200px</small>
                </h4>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-lg-4</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-lg-4</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-lg-4</code>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="title">Mixed Grid
                        <small>Showing different sizes on different screens</small>
                </h4>
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-sm-6 col-lg-3</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-sm-6 col-lg-3</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-sm-6 col-lg-3</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-sm-6 col-lg-3</code>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="title">Offset Grid
                        <small>Adding some space when needed</small>
                </h4>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-md-3</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-6">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-md-3 col-md-offset-6</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-md-offset-1">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-md-4 col-md-offset-1</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-md-offset-2">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-md-4 col-md-offset-2</code>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-md-offset-3">
                        <div className="card">
                            <div className="card-content text-center">
                                <code>col-md-6 col-md-offset-3</code>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="title">Paragraphs</h4>
                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3>Some Title Here</h3>
                                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                            </div>
                            <div className="col-sm-6">
                                <h3>Another Title Here</h3>
                                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-4">
                                <h3>Some Title Here</h3>
                                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
                            </div>
                            <div className="col-sm-4">
                                <h3>Another Title Here</h3>
                                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
                            </div>
                            <div className="col-sm-4">
                                <h3>Another Title Here</h3>
                                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-4">
                                <h3>Some Title Here</h3>
                                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
                            </div>
                            <div className="col-sm-8">
                                <h3>Another Title Here</h3>
                                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Grid;