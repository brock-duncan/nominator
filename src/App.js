import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TeamList from './components/TeamList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="logo">Nominator</h1>
        <TeamList />
      </div>
    );
  }
}

export default App;
