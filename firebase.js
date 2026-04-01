import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDcsxSLmAMrpVoUrxJQ1hqjn7g4VHNM1sw",
  authDomain: "shadow-eba0e.firebaseapp.com",
  projectId: "shadow-eba0e",
  storageBucket: "shadow-eba0e.firebasestorage.app",
  messagingSenderId: "271768582616",
  appId: "1:271768582616:web:766a34929a3a9b79551aad",
  measurementId: "G-8R2C5BGXHV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot, updateDoc, doc };