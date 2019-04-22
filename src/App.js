import React, { Component } from 'react';
import './App.css';
import Title from './Components/title.js'
import Albums from './Components/albums.js'
class App extends Component {
  render() {
    return (
      <div className="App container">
        <div>
          <Title />
          <Albums />
        </div>
      </div>
    );
  }
}

export default App;
