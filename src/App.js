import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import Welcome from './Components/Welcome';
import Number from './Components/Number';
import Word from './Components/Word';
import WordColor from './Components/WordColor';

function App() {
  return (
    <Router className="App">
      <Welcome path='/home' />
      <Number path='/:num' />
      <Word path='/word/:word' />
      <WordColor path='/:value/:color/:bgColor' />
    </Router>
  );
}

export default App;
