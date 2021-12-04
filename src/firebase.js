import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB_grEcsXoWbwya5j0Ga3NjYeb08eo_Yoc',
  authDomain: 'disney-clone-b1442.firebaseapp.com',
  projectId: 'disney-clone-b1442',
  storageBucket: 'disney-clone-b1442.appspot.com',
  messagingSenderId: '453817244559',
  appId: '1:453817244559:web:31f27d5f7ae8c448a109fa',
  measurementId: 'G-CMLEP2XFP3',
});

const db = firebaseApp.firestore();
const imageDb = firebaseApp.storage();
const auth = firebaseApp.auth();
const timesatamp = firebase.firestore.FieldValue.serverTimestamp;

export {db, imageDb, auth, timesatamp};
