import * as firebase from 'firebase/firebase'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "football-predictions-7f754",
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Storage
const projectStorage = firebase.storage();
// Initialize Firestore
const projectFirestore = firebase.firestore();
//create Firebase server timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// Initialize Authentication
// const auth = firebase.auth();

export { projectStorage, projectFirestore, timestamp };