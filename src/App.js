import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Route, Switch } from 'react-router-dom';
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
        <Route  path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps) (App);
