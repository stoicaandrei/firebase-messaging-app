import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD8I-faRNzwuT9nkEBpE6-HJZlNufKVJ2A',
  authDomain: 'messaging-app-ba24b.firebaseapp.com',
  databaseURL: 'https://messaging-app-ba24b.firebaseio.com',
  projectId: 'messaging-app-ba24b',
  storageBucket: 'messaging-app-ba24b.appspot.com',
  messagingSenderId: '915931001445',
  appId: '1:915931001445:web:8a8f23550ec041b097cc8c',
  measurementId: 'G-Q5J078XP20',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const projectAuth = firebase.auth();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
