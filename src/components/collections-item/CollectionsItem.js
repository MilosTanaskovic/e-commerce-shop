import React from 'react';


import './CollectionsItemStyle.scss';
/**
* @author Milos Tanaskovic - CodeDancing
* @function CollectionsItem
**/

const CollectionsItem = (props) => {
  const { name, imageUrl, price } = props;
  return(
    <div className="collection-item">
      <div className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
   )
  }


export default CollectionsItem