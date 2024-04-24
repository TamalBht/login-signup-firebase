// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDjQHyqAQaHZhMuOzorZN6dcj4yZmYPWw",
  authDomain: "fb-mail-auth-b40a7.firebaseapp.com",
  projectId: "fb-mail-auth-b40a7",
  storageBucket: "fb-mail-auth-b40a7.appspot.com",
  messagingSenderId: "907206216416",
  appId: "1:907206216416:web:dc38c06ab39bfc997f5e85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);