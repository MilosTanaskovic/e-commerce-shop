import React from 'react'

import './FormInputStyle.scss';
/**
* @author <codedancing>Milos Tanaskovic</codedancing>
* @function FormInput
**/

const FormInput = (props) => {
 const {handleChange, label, ...otherProps} = props;
  return(
    <div className="group">
     <input className='form-input' onChange={handleChange} {...otherProps}/>
     {
      label ? (
       <label
       className={`${
        otherProps.value.length ? 'shrink' : ''
       } form-input-label`}
      >
       {label}
      </label>
      ) : null
     }
    </div>
   )
  }


export default FormInput