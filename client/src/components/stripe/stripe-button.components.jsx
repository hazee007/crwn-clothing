import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import axios from 'axios'
// import { response } from 'express';

const StripeCheckOutButton = ({price}) =>{
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_FkvjFZFQbHmfdiPkGFyUHiRw00UqfmV4x9';

    const  onToken = token=>{
        axios({
            url: 'payment',
            method: 'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response =>{
            alert('payment successful' )
        }).catch(error =>{
            console.log('payment error:', JSON.parse(error));
            alert('There was an issue with your payment. Please make sure you use the provider credit cart');
        })
    }
    return(
        <StripeCheckOut 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckOutButton;