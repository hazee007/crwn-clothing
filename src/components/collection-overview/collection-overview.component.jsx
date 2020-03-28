import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collection-overview.style.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview =({collections}) =>(
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key = {id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
})


export default connect(mapStateToProps) (CollectionOverview);