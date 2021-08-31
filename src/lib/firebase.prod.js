import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {seedDatabase} from '../seed';


// seed the database

// config here
const config = {
  apiKey: "AIzaSyCi0_N-JPQAWQqcBMrlEayaQAL2WSAtmOo",
  authDomain: "netflix-huynh.firebaseapp.com",
  projectId: "netflix-huynh",
  storageBucket: "netflix-huynh.appspot.com",
  messagingSenderId: "598214648602",
  appId: "1:598214648602:web:ad95573de671a7efea02a3",
  measurementId: "G-2Z1MZ9LB3H"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export {firebase};