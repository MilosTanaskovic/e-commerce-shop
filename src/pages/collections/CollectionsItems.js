import React from 'react'

/**
* @author Milos Tanaskovic
* @function CollectionsItems
**/

const CollectionsItems = (props) => {
 const { key, title, items} = props;
  return(
    <div className="collection-items">
     <h1 className="title">{title.toUpperCase()}</h1>
     <div className="items">
      {
       items
        .filter((item, index) => index < 4)
        .map((item) => (
         <div key={item.id}>{item.name}</div>
        ))
      }
     </div>
    </div>
   )
  }


export default CollectionsItems