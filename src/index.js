
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

import { browserHistory } from 'react-router';
import 'font-awesome/css/font-awesome.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'perfect-scrollbar/dist/js/perfect-scrollbar.min.js';

import Routes from './routes';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';



ReactDOM.render(<Routes />, document.getElementById('AppRoot'));
registerServiceWorker();

// ReactDOM.render(<App />, document.getElementById('AppRoot'));
// registerServiceWorker();


/*ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('AppRoot'));*/


// ReactDOM.render(
//   <Routes history={browserHistory} />,
//   document.getElementById('AppRoot'));
