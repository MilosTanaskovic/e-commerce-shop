import React, {Component} from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInPage from './pages/signin_signup/SignIn_SignUp';
import { auth, createUserProfileDocument } from './firebase/utils';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }
  
  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      // this.setState({
      //   currentUser: user,
      // });
      // console.log(user);
      createUserProfileDocument(user);
    })
  }
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {

    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </>
    );
  }
}

export default App;
