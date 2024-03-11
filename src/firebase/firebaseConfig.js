import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXngzmNTXGUk7_rDzbYN3HBRLnlA_Y2uU",
  authDomain: "chicken-6931a.firebaseapp.com",
  projectId: "chicken-6931a",
  storageBucket: "chicken-6931a.appspot.com",
  messagingSenderId: "705963200633",
  appId: "1:705963200633:web:d53349d4f76b9eaf6284a8",
  measurementId: "G-TNZD00R1KW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
