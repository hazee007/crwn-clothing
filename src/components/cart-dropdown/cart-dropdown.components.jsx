import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.components';
import { selectCartItems } from '../../redux/cart/cart.selectors';


const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))

            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)  


// const mapStateToProps = ({cart: {cartItems}}) =>({
//     cartItems
// });  this is replaced with the new code so that our application do not rerender(reload) when a state change in the app that does not affect this particular state /// this is what selectors are for..

const mapStateToProps = state =>({
    cartItems : selectCartItems(state)
});


export default connect(mapStateToProps)(CartDropDown);