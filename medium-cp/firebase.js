// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzND2XHPT5e9okrKhXLkwlAI_kUweJGpg",
  authDomain: "my-medium-blog-dev.firebaseapp.com",
  projectId: "my-medium-blog-dev",
  storageBucket: "my-medium-blog-dev.appspot.com",
  messagingSenderId: "255214727655",
  appId: "1:255214727655:web:9a5978507d8d4a30c0cd42"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }