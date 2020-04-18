import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-preview.style.scss'
import CollectionItem from '../collection-item/collection-item.components';

const CollectionPreview = ({title, items, match, routeName, history}) => (
      <div className='collection-preview'>
          <h1 className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()} </h1>
          {/* <h1 className='title'>{title.toUpperCase()}</h1> */}
          <div className='preview'>
              {items
            //   filter is used to reduct the output of the item to 4.. and this method can cause performnce issue since it 
            //   has to rerender every the function is call or the arry of items gets longer. 
              .filter((item,idx) => idx <4)
              // .map(({id, ...otherItemProps}) =>(  
              //       <CollectionItem key={id} {...otherItemProps}/>
              //   ))}
              .map(item =>(  //got changed
                <CollectionItem key={item.id} item={item}/>
            ))}
          </div>
      </div>
);

export default withRouter(CollectionPreview);