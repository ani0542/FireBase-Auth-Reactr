import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'semantic-ui-css/semantic.min.css'
import App from './App';
import store from './store'

// ReactDOM.render(<App />, document.getElementById('root'));


store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
  
  });






// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from './store/reducers/rootReducer'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
// import { ReactReduxFirebaseProvider, reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbconfig'
// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'
// import 'firebase/storage'
// import 'firebase/functions'

// firebase.initializeApp(fbConfig);
// firebase.firestore();
// firebase.storage().ref();
// firebase.functions();
// const config = {
//     useFirestoreForProfile:true,
//     userProfile: 'Klanten',
//     userFirestoreForProfile: true,
//     attachAuthIsReady: true,
//     firebaseStateName: 'firebase'
// }
// const initialState = {};
// const store = createStore(rootReducer,initialState,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//         reactReduxFirebase(firebase, config),
//         reduxFirestore(firebase)
//     )
// )

// store.firebaseAuthIsReady.then(() => {
//     const rrfProps = {
//         firebase,
//         config: fbConfig,
//         dispatch: store.dispatch,
//         createFirestoreInstance
//     }

// ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));
//     serviceWorker.unregister();
// })