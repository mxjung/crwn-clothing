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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if User is null
  if (!userAuth) return;
  // Else, query inside the firestore for document to see if user exists (returns reference). The reference is where you can perorm CRUD methods (create, retrieve, update, delete)
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // The snapshot includes property: exists
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
