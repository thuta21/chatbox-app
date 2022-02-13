import firebase from 'firebase/app'
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVvXiYV1i1xU23EahI1Deik_Qd14gQ9_Y",
    authDomain: "chatbox-app-fa748.firebaseapp.com",
    projectId: "chatbox-app-fa748",
    storageBucket: "chatbox-app-fa748.appspot.com",
    messagingSenderId: "532129088937",
    appId: "1:532129088937:web:ea227033d06557c86db0b8",
    measurementId: "G-K2FQ2SKYN7"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {database, timestamp};
