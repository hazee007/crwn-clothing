import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';
import './cart-dropdown.style.scss';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ? (
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            )))
            :(<span className='empty-message'>Your cart is empty</span>)

            }
        </div>
        <CustomButton onClick = {() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}
            >GO TO CHECKOUT</CustomButton>
    </div>
)  


// const mapStateToProps = ({cart: {cartItems}}) =>({
//     cartItems
// });  this is replaced with the new code so that our application do not rerender(reload) when a state change in the app that does not affect this particular state /// this is what selectors are for..

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropDown));