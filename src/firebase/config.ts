import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyD8I-faRNzwuT9nkEBpE6-HJZlNufKVJ2A",
  authDomain: "messaging-app-ba24b.firebaseapp.com",
  databaseURL: "https://messaging-app-ba24b.firebaseio.com",
  projectId: "messaging-app-ba24b",
  storageBucket: "messaging-app-ba24b.appspot.com",
  messagingSenderId: "915931001445",
  appId: "1:915931001445:web:8a8f23550ec041b097cc8c",
  measurementId: "G-Q5J078XP20"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
