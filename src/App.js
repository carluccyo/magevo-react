import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button type="button" className="btn btn-default">Default</button>

        <button type="button" className="btn btn-primary">Primary</button>

        <button type="button" className="btn btn-success">Success</button>

        <button type="button" className="btn btn-info">Info</button>

        <button type="button" className="btn btn-warning">Warning</button>

        <button type="button" className="btn btn-danger">Danger</button>

        <button type="button" className="btn btn-link">Link</button>
      </div>
    );
  }
}

export default App;
