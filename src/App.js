import React, { Component } from 'react';
import './App.css';
import ContentSlider from "./components/slider";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">CI Demystified </h1>
            <p>How Kenzan uses continuous integration to support the agile lifecycle</p>
        </header>
        <div className="Main"><ContentSlider ref={this.sliderComponent}/></div>
      </div>
    );
  }
}

export default App;
