// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "miniproject-4f778.firebaseapp.com",
  projectId: "miniproject-4f778",
  storageBucket: "miniproject-4f778.firebasestorage.app",
  messagingSenderId: "177412020325",
  appId: "1:177412020325:web:5bcda434a54fe0b4854e8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app,auth}

