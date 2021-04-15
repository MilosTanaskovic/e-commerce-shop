import React from 'react'
import { Link } from 'react-router-dom';

import { ReactComponent as LogoSVG } from '../../assets/logo/crown.svg'

import './LogoStyle.scss';
/**
* @author Milos Tanaskovic
* @function Logo
**/

const Logo = (props) => {
  return(
    <Link className="logo-container" to='/'>
     <LogoSVG className="logo" />
    </Link>
   )
  }


export default Logo