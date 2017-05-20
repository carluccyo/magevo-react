
import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'perfect-scrollbar/dist/js/perfect-scrollbar.min.js';



import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';



ReactDOM.render(<App />, document.getElementById('AppRoot'));
registerServiceWorker();
