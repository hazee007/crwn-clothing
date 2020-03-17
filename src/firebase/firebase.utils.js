import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCb7pCn8Bm_gZlHWWJEucCMcbMzPo_NFzw",
    authDomain: "crwn-db-40fb9.firebaseapp.com",
    databaseURL: "https://crwn-db-40fb9.firebaseio.com",
    projectId: "crwn-db-40fb9",
    storageBucket: "crwn-db-40fb9.appspot.com",
    messagingSenderId: "110930251922",
    appId: "1:110930251922:web:13aac0adca9b6ac60a164b",
    measurementId: "G-BQN600M9NF"
  };

  // Take uid gotten from googleapi and save into our firebase db
  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    // query firestor for userAuth document to see if it already exist
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
       const {displayName, email} = userAuth;
       const createAt = new Date();

       try{
         await userRef.set({
           displayName,
           email,
           createAt,
           ...additionalData
         })
       }catch(error){
          console.log('error creating user', error.message);
       }
    }

    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Google authentication

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;