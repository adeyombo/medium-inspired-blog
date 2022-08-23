// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuF9XGc8wzm08gAwtgXDXT_XzmBHYo6pI",
  authDomain: "medium-clone-v1-bf534.firebaseapp.com",
  projectId: "medium-clone-v1-bf534",
  storageBucket: "medium-clone-v1-bf534.appspot.com",
  messagingSenderId: "248677400561",
  appId: "1:248677400561:web:39901c65c7a9848e118e50"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }