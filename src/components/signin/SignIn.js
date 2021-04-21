import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormInput from '../form-inputs/FormInput';
import CustomButtom from '../custom-buttons/CustomButton';
import { signInWithGoogle } from '../../firebase/utils';

import './SignInStyle.scss';
/**
* @author Milos Tanaskovic
* @class SignIn
**/

class SignIn extends Component {
 constructor(props) {
  super(props);

  this.state = {
   email: '',
   password: ''
  };
 }

 // onSubmit func
 handleSubmit = event => {
  event.preventDefault();

  this.setState({
   email: '',
   password: ''
  });
 } 
 // onchange func
 handleChange = event => {
  const {name, value} = event.target;
  
  this.setState({
   [name]: value,
  })
 }
 render() {
  return(
    <div className="sign-in">
     <h2>I already have an account</h2>
     <span>Sign in with your email and password</span>

     <form onSubmit={this.handleSubmit}>
      <FormInput 
       handleChange={this.handleChange} 
       type="email" 
       value={this.state.email} 
       name="email"
       label="email" 
       required
      />

      <FormInput 
       handleChange={this.handleChange} 
       type="password" 
       value={this.state.password} 
       name="password"
       label="password" 
       required
      />
      <div className="buttons">
        <CustomButtom type="submit" >Sign In</CustomButtom>
        <CustomButtom onClick={signInWithGoogle} isGooleSignIn >Sign In With Google</CustomButtom>
      </div>
     </form>
    </div>
    )
   }
 }


SignIn.propTypes = {}
export default SignIn