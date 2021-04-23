import React from 'react'

import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';

import './SignIn_SignUpStyle.scss';
/**
* @author Milos Tanaskovic
* @function SignIn_SignUp
**/

const SignIn_SignUp = (props) => {
  return(
    <div className="signin_signup">
      <SignIn />
      <SignUp />
    </div>
   )
  }


export default SignIn_SignUp