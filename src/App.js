import React, { Component } from 'react';
import './App.css';
import SearchUser from './components/searchUser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="heading">Github API</h1>
        <SearchUser />
      </div>
    );
  }
}

export default App;
