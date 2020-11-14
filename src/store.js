




import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from './reducers'
import thunk from 'redux-thunk';
import rootReducer from './reducers'; 
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig,  {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}), // redux binding for firebase
    reduxFirestore(fbConfig), // redux bindings for firestore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;