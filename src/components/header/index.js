import React from 'react'

import Logo from './Logo';
import MenuNav from './MenuNav';

import './index.scss';
/**
* @author Milos Tanaskovic
* @function index
**/

const index = (props) => {
  const { currentUser } = props;
  return(
    <div className="header">
     {/* Logo */}
     <Logo />
     {/* Menu Items */}
     <MenuNav currentUser={currentUser} />
    </div>
   )
  }


export default index