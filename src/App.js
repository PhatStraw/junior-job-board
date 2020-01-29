import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

//Components
import Home from './components/home/'

//CSS
import '../src/css/nav.css'

function App() {
  return (
    <>
      <Route exact path='/' component={Home} />
    </>
  );
}

export default App;
