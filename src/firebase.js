import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBOQsuae5fJ5nt3RunbyWoCLvImlr-dsyo',
  authDomain: 'clone-20772.firebaseapp.com',
  projectId: 'clone-20772',
  storageBucket: 'clone-20772.appspot.com',
  messagingSenderId: '296246562163',
  appId: '1:296246562163:web:200d74dcb8d5e1eb9c0906',
  measurementId: 'G-Y551EKEQ8R',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
