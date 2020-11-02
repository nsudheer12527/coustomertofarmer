import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDmLKNaCdK0l268OHvji6ga5IxUfze5Wck",
    authDomain: "tppro-291603.firebaseapp.com",
    databaseURL: "https://tppro-291603.firebaseio.com",
    projectId: "tppro-291603",
    storageBucket: "tppro-291603.appspot.com",
    messagingSenderId: "885022432296",
    appId: "1:885022432296:web:7161a300644ff0c7f7e91d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;