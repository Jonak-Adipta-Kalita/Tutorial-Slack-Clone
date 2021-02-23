import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDyy7AALD17gkCy2CAarfe4HqqJNy8l4_I",
  authDomain: "jak-slack-clone-d719e.firebaseapp.com",
  projectId: "jak-slack-clone-d719e",
  storageBucket: "jak-slack-clone-d719e.appspot.com",
  messagingSenderId: "121630615318",
  appId: "1:121630615318:web:a09f56bae4922b0b081237"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
