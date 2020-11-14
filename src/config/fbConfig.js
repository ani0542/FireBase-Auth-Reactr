import firebase from 'firebase/app'

import 'firebase/firestore'

import 'firebase/auth'


var Config = {
  apiKey: "AIzaSyCV_BTiEq4Un-FeUEomicm8DPZ0765432oYl9ssw",
  authDomain: "proj2-286616.firebaseapp.com",
  databaseURL: "https://proj2-286616.firebaseio.com",
  projectId: "proj2-2866716",
  storageBucket: "proj2-286616.appspot.com",
  messagingSenderId: "1093252989005",
 
};
// Initialize Firebase
firebase.initializeApp(Config);
// firebase.analytics();




firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 