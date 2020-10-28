import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDFGL3yCnlAJGbbVhtsqOCGdYnpQ73joG0',
  authDomain: 'test-react-firebase-12109.firebaseapp.com',
  databaseURL: 'https://test-react-firebase-12109.firebaseio.com',
  projectId: 'test-react-firebase-12109',
  storageBucket: 'test-react-firebase-12109.appspot.com',
  messagingSenderId: '497832722708',
  appId: '1:497832722708:web:ce0488cfe970133ee10201',
  measurementId: 'G-93HEN4S6VL',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
