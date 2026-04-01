// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcsxSLmAMrpVoUrxJQ1hqjn7g4VHNM1sw",
  authDomain: "shadow-eba0e.firebaseapp.com",
  projectId: "shadow-eba0e",
  storageBucket: "shadow-eba0e.firebasestorage.app",
  messagingSenderId: "271768582616",
  appId: "1:271768582616:web:766a34929a3a9b79551aad",
  measurementId: "G-8R2C5BGXHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);