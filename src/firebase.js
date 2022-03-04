import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyByS7bYcTbx7RL2JnxTyU3NDMtbrFRK0xY',
  authDomain: 'react-firebase-chat-app-26db6.firebaseapp.com',
  projectId: 'react-firebase-chat-app-26db6',
  storageBucket: 'react-firebase-chat-app-26db6.appspot.com',
  messagingSenderId: '466632171315',
  appId: '1:466632171315:web:1175b10dcbb212a0942846',
  measurementId: 'G-84MT9TMN4N',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;
