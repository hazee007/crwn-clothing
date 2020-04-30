import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.components'
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.components';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import { useEffect } from 'react';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage =({fetchCollectionsStart,match, isCollectionFetching, isCollectionsLoaded}) => {
  

  useEffect(()=>{
    fetchCollectionsStart();
  }, [fetchCollectionsStart])

 
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`}  render={(props) => 
        <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => 
        <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
      </div>
    )
  }

const mapStateToProps = createStructuredSelector({
  isCollectionFetching : selectIsCollectionFetching,
  isCollectionsLoaded : selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

 


export default connect(mapStateToProps,mapDispatchToProps) (ShopPage);