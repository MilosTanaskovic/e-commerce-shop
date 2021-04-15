import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
