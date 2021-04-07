import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import HatsPage from './pages/hatspage/HatsPage';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;
