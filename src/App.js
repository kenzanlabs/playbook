import React, { Component } from 'react';
import './App.css';
import './kenzan.css';
import kenzanLogo from './assets/Kenzan_logo.png';
import ContentSlider from './components/slider';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Header-item logo-wrapper">
            <img className="App-logo" src={kenzanLogo} alt="Kenzan Media LLC" />
          </div>
          <div className="Header-item title-wrapper">
            <h1 className="App-title capitalize">CI Demystified </h1>
            <p className="App-motto">How Kenzan uses continuous integration to support the agile lifecycle</p>
          </div>
        </header>
        <div className="Main"><ContentSlider ref={this.sliderComponent} /></div>
      </div>
    );
  }
}

export default App;
