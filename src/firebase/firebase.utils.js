import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCCWfrDPCC_qxcdXwQ4_kDGd8r79tSrfaA",
  authDomain: "crwn-db-36c16.firebaseapp.com",
  databaseURL: "https://crwn-db-36c16.firebaseio.com",
  projectId: "crwn-db-36c16",
  storageBucket: "crwn-db-36c16.appspot.com",
  messagingSenderId: "764066635280",
  appId: "1:764066635280:web:282fef457a5c9399d97495"
};

export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // getting the user
  const snapShot = await userRef.get(); //getting snapshot
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({   //creating data
        displayName,
        email,
        createdAt,
        ...additionalData

      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }


  return userRef;
  // console.log(snapShot)
  // console.log(firestore.doc('users/128fdashadu'));
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;