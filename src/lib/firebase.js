import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBkBlajA2iyLBT9PAVRERYjFf8bQF48B2U',
  authDomain: 'istaclone-a7f90.firebaseapp.com',
  projectId: 'istaclone-a7f90',
  storageBucket: 'istaclone-a7f90.appspot.com',
  messagingSenderId: '506435120026',
  appId: '1:506435120026:web:24b338ea7b9bdd0e54e823'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log(firebase);
// seedDatabase(firebase);
export { firebase, FieldValue };
