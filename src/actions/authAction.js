
import { LOGIN_SUCCESS } from './types';
import { LOGIN_ERROR } from './types';
import { SIGNOUT_SUCCESS } from './types';
import { SIGNUP_SUCCESS } from './types';
import { SIGNUP_ERROR } from './types';

//Note: we need getFirebase to deal with firebase authentication



// import { getFirebase } from 'react-redux-firebase';



//sign in


export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();    //we will use this to sign the users in
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: LOGIN_SUCCESS  });
      }).catch((err) => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  
    }
  }




//signout

  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: SIGNOUT_SUCCESS })
      });
    }
  }




//signup




  export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0]
        });
      }).then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      }).catch((err) => {
        dispatch({ type: SIGNUP_ERROR, err});
      });
    }
  }