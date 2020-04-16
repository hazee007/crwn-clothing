import React, { useState } from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import {googleSignInStart, emailSignInStart} from  '../../redux/user/user.actions'



const  SignIn =({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, SetuserCredentials] = useState({
        email: '',
        password: ''
    })
  

    const {email, password} = userCredentials;
    // preventing the default action of the submit form and setting email and password back to empty
    const handleSubmit = async event =>{
        event.preventDefault();
        emailSignInStart(email, password);
        
    };
    // this is to dynamically get the name and value from the form input items
    const handleChange = event =>{
        const {value,name} = event.target;

        SetuserCredentials({...userCredentials, [name]: value});
    };
   

        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput type='email' name='email' value ={email} handleChange={handleChange} label='email' required />
                    <FormInput type='password' name='password' value ={password} handleChange={handleChange} label='password' required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in </CustomButton>
                        <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart} >Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
    


const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps) (SignIn);


