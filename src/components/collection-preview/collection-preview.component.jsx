import React from 'react';

import './collection-preview.style.scss'
import CollectionItem from '../collection-item/collection-item.components';

const CollectionPreview = ({title, items}) => (
      <div className='collection-preview'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <div className='preview'>
              {items
            //   filter is used to reduct the output of the item to 4.. and this method can cause performnce issue since it 
            //   has to rerender every the function is call or the arry of items gets longer. 
              .filter((item,idx) => idx <4)
              .map(({id, ...otherItemProps}) =>(  
                    <CollectionItem key={id} {...otherItemProps}/>
                ))}
          </div>
      </div>
);

export default CollectionPreview;