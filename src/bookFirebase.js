import {initializeApp} from 'firebase/app';
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD8WuI2siL9wROzTR5_c9ls5qpFgmw0W8Y',
  authDomain: 'fir-9-a19ab.firebaseapp.com',
  projectId: 'fir-9-a19ab',
  storageBucket: 'fir-9-a19ab.appspot.com',
  messagingSenderId: '186386072308',
  appId: '1:186386072308:web:e36adfa0c01fcc535814a1',
  measurementId: 'G-5QVVSWZJQ3',
};

initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const collectionRef = collection(db, 'books');

export {db, collectionRef};
