import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RootRoute from './RootRoute';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <RootRoute/>
        </BrowserRouter>
      </div>
    );
  }
}



