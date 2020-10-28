import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBN3FIS3xfN4ziNdXsFtlonfS-_yYcl_rU',
  authDomain: 'messaging-ad830.firebaseapp.com',
  databaseURL: 'https://messaging-ad830.firebaseio.com',
  projectId: 'messaging-ad830',
  storageBucket: 'messaging-ad830.appspot.com',
  messagingSenderId: '1012276213211',
  appId: '1:1012276213211:web:8a04188a5811903a4de3fe',
  measurementId: 'G-HEJ5FSH1E1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
