// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiHB2SgYILO4uiSiWG4f6bw5jLR3CBlPM",
  authDomain: "netflixgpt-cf34e.firebaseapp.com",
  projectId: "netflixgpt-cf34e",
  storageBucket: "netflixgpt-cf34e.appspot.com",
  messagingSenderId: "61451233721",
  appId: "1:61451233721:web:072c13e7a570ac189f2e68",
  measurementId: "G-F9LL97G93Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();