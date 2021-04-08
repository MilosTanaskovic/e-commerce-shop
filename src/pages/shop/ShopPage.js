import React, { Component } from 'react'
import SHOP_DATA from '../../data/shop.data.js';

import CollectionsItems from '../collections/CollectionsItems';

/**
* @author Milos Tanaskovic
* @class ShopPage
**/

class ShopPage extends Component {
 constructor(props){
  super(props)

  this.state = {
   collections: SHOP_DATA 
  }
 }

 render() {
  const { collections } = this.state;
  return(
     <div className="shop-page">
      {
       collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionsItems key={id} {...otherCollectionsProps} />
       ))
      }
     </div>
    )
   }
 }


ShopPage.propTypes = {}
export default ShopPage