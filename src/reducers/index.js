import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer'
import { firestoreReducer } from 'redux-firestore';    //this is premade reducer which is made for synking our firestore data with our state in the background
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
  auth: authReducer,
  project:projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});



