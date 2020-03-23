import CartActionTypes from './cart.types';


export const toggleCartHidden = () => ({
    type:  CartActionTypes.TOGGLE_CART_HIDDEN
})


export const addItem = item => ({          //add item to the add item in cart.reducer
    type: CartActionTypes.ADD_ITEM,
    payload: item
})