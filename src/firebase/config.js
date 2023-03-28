// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoY5_aKnB77mv4lf1fqtlf454viRX3zzM",
  authDomain: "react-udemy-d76c6.firebaseapp.com",
  projectId: "react-udemy-d76c6",
  storageBucket: "react-udemy-d76c6.appspot.com",
  messagingSenderId: "732989051276",
  appId: "1:732989051276:web:561a6a9f6e7158aa8d46a9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
