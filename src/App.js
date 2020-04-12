import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.components';


import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSection} from './redux/user/user.actions'



class App extends React.Component { 
  

  unsubscribeFromAuth = null

  componentDidMount(){
    const {checkUserSection} = this.props;
    checkUserSection();

  }
  
  componentWillUnmount(){
     this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div >
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ?
           (<Redirect to ='/' />) : (<SignInAndSignUpPage />)} />  
        {/* //base on currentUser go to sign up page or go to home page */}
        <Route  exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})                   //we get the state of the user to know if the user is logged in, if so we dont want them  to be able to access the singin page and also using reselect for optimization

const mapDispatchToProps = dispatch =>({
  checkUserSection : () => dispatch(checkUserSection())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
