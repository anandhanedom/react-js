import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDMwsMmXGP5BVwlkX4pzWAvXlHoDAlVAOw',
  authDomain: 'crown-kart.firebaseapp.com',
  databaseURL: 'https://crown-kart.firebaseio.com',
  projectId: 'crown-kart',
  storageBucket: 'crown-kart.appspot.com',
  messagingSenderId: '980197402047',
  appId: '1:980197402047:web:09af3907310fd7613cad0a',
  measurementId: 'G-SHWP42G1JT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
