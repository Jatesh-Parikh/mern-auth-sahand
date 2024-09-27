// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-sahand-e7469.firebaseapp.com",
  projectId: "mern-auth-sahand-e7469",
  storageBucket: "mern-auth-sahand-e7469.appspot.com",
  messagingSenderId: "212424878761",
  appId: "1:212424878761:web:e689d5c44d02061534d7b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
