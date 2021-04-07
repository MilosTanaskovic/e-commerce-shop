import React from 'react';

import Directory from '../../components/directory/Directory';

import './HomePageStyle.scss';
/**
* @author Milos Tanaskovic
* @function HomePage
**/

const HomePage = (props) => {
  console.log(props);
  return(
   <div className='homepage'>
    <Directory />
   </div>
   )
  }


export default HomePage