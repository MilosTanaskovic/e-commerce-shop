import React from 'react'

import './CustomButton.scss';

/**
* <codedancing @author Milos Tanaskovic />
* <reactdancing @function CustomButton />
**/

const CustomButton = (props) => {
 const { children, ...otherProps} = props
  return(
    <button className="custom-button" {...otherProps}>
     {children}
    </button>
   )
  }


export default CustomButton