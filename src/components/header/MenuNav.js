import React from 'react'

import { Link } from 'react-router-dom';

import './MenuNavStyle.scss';
/**
* @author Milos Tanaskovic
* @function MenuNav
**/

const MenuNav = (props) => {
  return(
    <div className="options">
     <Link className="option" to="/shop">
      SHOP
     </Link>
     <Link className="option" to="/contact">
      CONTACT
     </Link>
    </div>
   )
  }


export default MenuNav