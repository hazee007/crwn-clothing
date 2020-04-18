import {createSelector} from 'reselect';


const selectShop = state   => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key])
    : []
);

export const selectCollection = collectionUrlPrams => createSelector(
    [selectShopCollections],
    // collections => collections.find(
    //     collection => collection.id === COLLECTION_ID_MAP[collectionUrlPrams]
    // )  Data normalization

    collections => (collections ? collections[collectionUrlPrams] : null)
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)