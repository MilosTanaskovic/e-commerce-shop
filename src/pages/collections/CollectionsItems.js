import React from 'react';

import CollectionsItem from '../../components/collections-item/CollectionsItem';

import './CollectionsItemsStyle.scss';
/**
* @author Milos Tanaskovic
* @function CollectionsItems
**/

const CollectionsItems = (props) => {
 const { title, items} = props;
  return(
    <div className="collection-items">
     <h1 className="title">{title.toUpperCase()}</h1>
     <div className="items">
      <span>f</span>
      {
       items
        //.filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
         <CollectionsItem key={id} {...otherItemProps}  />
        ))
      }
      <span>g</span>
     </div>
    </div>
   )
  }


export default CollectionsItems