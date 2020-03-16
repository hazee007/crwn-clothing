import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils'



class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    // preventing the default action of the submit form and setting email and password back to empty
    handelSubmit = event =>{
        event.preventDefault();

        this.setState({email: '', password:''})
    };
    // this is to dynamically get the name and value from the form input items
    handelChange = event =>{
        const {value,name} = event.target;

        this.setState({[name]: name, [value]: value});
    };
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput type='email' name='email' value ={this.state.email} handelChange={this.handelChange} label='email' required />
                    <FormInput type='password' name='password' value ={this.state.password} handelChange={this.handelChange} label='password' required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle} >Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default SignIn;


