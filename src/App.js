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
    this.unsuscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            }
          }, () => {
            console.log(this.state)
          })
        })
      }
      this.setState({ currentUser: userAuth })
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
