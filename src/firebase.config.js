// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi62RdD8upsiTcEOoAuwJZba3p6v3mzHY",
  authDomain: "house-marketingplace-app.firebaseapp.com",
  projectId: "house-marketingplace-app",
  storageBucket: "house-marketingplace-app.appspot.com",
  messagingSenderId: "540422990910",
  appId: "1:540422990910:web:42dc9722c80c3f9d7b356f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore()