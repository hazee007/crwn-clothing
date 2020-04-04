import React from 'react';

import {SpinnerOverlay, SpinnerContainer  } from "../with-spinner/with-spinner.style";


const WithSpinner = WrappedComponents =>{
   const Spinner = ({isLoading, ...otherProps}) =>{
    return isLoading ? (
        <SpinnerOverlay> 
            <SpinnerContainer />
        </SpinnerOverlay>
    ): (
        <WrappedComponents {...otherProps} />
    )
   }
   return Spinner;
}


export default WithSpinner;