import React from 'react'

import Logo from './Logo';
import MenuNav from './MenuNav';

import './index.scss';
/**
* @author Milos Tanaskovic
* @function index
**/

const index = (props) => {
  return(
    <div className="header">
     {/* Logo */}
     <Logo />
     {/* Menu Items */}
     <MenuNav />
    </div>
   )
  }


export default index