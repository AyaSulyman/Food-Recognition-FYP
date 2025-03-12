
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBghGP-2YZjKPGotULHUpMUbb2-PcPtvVM",
  authDomain: "fyp-foodrecognition.firebaseapp.com",
  projectId: "fyp-foodrecognition",
  storageBucket: "fyp-foodrecognition.firebasestorage.app",
  messagingSenderId: "129954367655",
  appId: "1:129954367655:web:f5fd87021a1b723269f382",
  measurementId: "G-TXLXWMJTFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };