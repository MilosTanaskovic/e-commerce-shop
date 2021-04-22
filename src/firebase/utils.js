import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 apiKey: "AIzaSyBPnjY8_XxbkXee-WSBKQaRj1mVKGnjNIY",
 authDomain: "shop-cd-db.firebaseapp.com",
 projectId: "shop-cd-db",
 storageBucket: "shop-cd-db.appspot.com",
 messagingSenderId: "569926079439",
 appId: "1:569926079439:web:8c32fe1f4609b531b8b8ba",
 measurementId: "G-R7P1476MX5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
 // if user dosent's exist
 if(!userAuth) return;

 // if user exist
 const userRef = firestore.doc(`users/${userAuth.uid}`);

 const snapShot = await userRef.get();

 console.log(snapShot);
 if(!snapShot.exists) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
   await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData
   })
  }catch(error) {
   console.log('error create user', error.message);
  }
 }
 return userRef;
}

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
 prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;