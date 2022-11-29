import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2bOmtgrGUDfyiwr4ZbDZMeY27C9AREIQ",
  authDomain: "trading-platform-afb58.firebaseapp.com",
  projectId: "trading-platform-afb58",
  storageBucket: "trading-platform-afb58.appspot.com",
  messagingSenderId: "209312031968",
  appId: "1:209312031968:web:b1f1e4395695dc1add5c85"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };