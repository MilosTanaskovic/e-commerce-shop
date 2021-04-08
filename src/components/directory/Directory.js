import React, { Component } from 'react'
import SECTIONS_DATA from '../../data/sections.data.js';

import MenuItem from '../menu-item/MenuItem';
import './DirectoryStyle.scss';
/**
* @author Milos Tanaskovic
* @class Directory
**/

class Directory extends Component {
 constructor(props) {
  super(props)
  console.log(SECTIONS_DATA);
  this.state = {
   sections: SECTIONS_DATA,
  }
 }
 
 render() {
  return(
   <div className='directory-menu'>
     {this.state.sections.map(({ id, ...otherSectionProps }) => (
       <MenuItem key={id} {...otherSectionProps} />
     ))}
   </div>
   )
  }
 }


Directory.propTypes = {}
export default Directory