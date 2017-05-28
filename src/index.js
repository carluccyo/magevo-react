
import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './assets/material/material.js';
import './assets/material/material.css';


import 'perfect-scrollbar/dist/js/perfect-scrollbar.min.js';

import Routes from './routes';



import registerServiceWorker from './registerServiceWorker';
import './index.css';



ReactDOM.render(<Routes />, document.getElementById('AppRoot'));
registerServiceWorker();
