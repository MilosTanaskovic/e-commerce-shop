import React from 'react'

import './CustomButton.scss';

/**
* <codedancing @author Milos Tanaskovic />
* <reactdancing @function CustomButton />
**/

const CustomButton = (props) => {
 const { children, isGooleSignIn, ...otherProps} = props
  return(
    <button className={`${isGooleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
     {children}
    </button>
   )
  }


export default CustomButton