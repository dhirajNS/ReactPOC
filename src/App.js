import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './components/Description';
import Todo from './components/TODO';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>Hope you are doing okay</h3>
          <Description></Description>
          <Todo></Todo>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
