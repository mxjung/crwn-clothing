import firebase from "firebase/app";
// we need to import in firebase first because it gives us access to firestore and auth when we import them in. They will automatically be attached to the firebase keyword

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDF2WNiK6UsrSOW73fZrjAl11FC8daD3cM",
  authDomain: "crwn-db-3d143.firebaseapp.com",
  databaseURL: "https://crwn-db-3d143.firebaseio.com",
  projectId: "crwn-db-3d143",
  storageBucket: "",
  messagingSenderId: "330947185098",
  appId: "1:330947185098:web:9b33d11cd3c06a8594e733",
  measurementId: "G-JXM63Y38EM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
