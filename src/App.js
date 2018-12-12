import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Conditionalsection from './sections/conditional.js'
//import List from './sections/list.js'
//import Cars from './sections/cars.js'
//import Forms from './sections/forms.js'
//import Box from './sections/children.js';
//import Article from './sections/article.js';
//import EjemploDeComponentDidMount from './sections/montaje.js';
//import Bitcoin from './sections/api.js';
import EjemploCicloDeAcualizacion from './sections/ejemploCicloDeAcualizacion.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Hello world!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <EjemploCicloDeAcualizacion />
      </div>
    );
  }
}

export default App;
