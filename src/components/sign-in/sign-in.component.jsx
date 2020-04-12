import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import {googleSignInStart, emailSignInStart} from  '../../redux/user/user.actions'



class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    // preventing the default action of the submit form and setting email and password back to empty
    handleSubmit = async event =>{
        event.preventDefault();
        const {emailSignInStart }= this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);
        
    };
    // this is to dynamically get the name and value from the form input items
    handleChange = event =>{
        const {value,name} = event.target;

        this.setState({[name]: value});
    };
    render(){

        const {googleSignInStart} = this.props
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value ={this.state.email} handleChange={this.handleChange} label='email' required />
                    <FormInput type='password' name='password' value ={this.state.password} handleChange={this.handleChange} label='password' required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in </CustomButton>
                        <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart} >Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps) (SignIn);


