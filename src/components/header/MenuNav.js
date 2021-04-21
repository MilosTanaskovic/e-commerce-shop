import React from 'react'

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

import './MenuNavStyle.scss';
/**
* @author Milos Tanaskovic
* @function MenuNav
**/

const MenuNav = (props) => {
  const { currentUser } = props;
  return(
    <div className="options">
     <Link className="option" to="/shop">
      SHOP
     </Link>
     <Link className="option" to="/contact">
      CONTACT
     </Link>
     {
       currentUser 
       ? 
       <div className="option" onClick={() => { auth.signOut() }}>SIGN OUT</div>
       :
       <Link className="option" to="/signin">SIGN IN</Link>
     }
    </div>
   )
  }


export default MenuNav