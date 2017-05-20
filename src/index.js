
import React from 'react';
import ReactDOM from 'react-dom';

// import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';




ReactDOM.render(<App />, document.getElementById('AppRoot'));
registerServiceWorker();
