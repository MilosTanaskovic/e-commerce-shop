import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInPage from './pages/signin_signup/SignIn_SignUp';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </>
  );
}

export default App;
