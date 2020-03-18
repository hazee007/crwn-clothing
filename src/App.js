import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user.actions'


class App extends React.Component {
  

  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      // getting data from firebase to add into our state
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); //checking if there has been any user update in db 
        
        userRef.onSnapshot(snapShot =>{  //get data of either newly registerd user with already users in db
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
       else{
        setCurrentUser(userAuth)
      }
        
    })
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
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to ='/' />) : (<SignInAndSignUpPage />)} />  
        {/* //base on currentUser go to sign up page or go to home page */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser
})                   //we get the state of the user to know if the user is logged in, if so we dont want them  to be able to access the singin page

const mapDispatchToProps = dispatch =>({  //Dispatch setCurrentUser to the user.action which then triggers the user reducers and this eliminate the use of this.state from app.js
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps , mapDispatchToProps) (App);
