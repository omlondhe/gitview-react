// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBng92ZiQNFMCLQW_fHN2e3QzCneyaCi_Q",
  authDomain: "gitview-react.firebaseapp.com",
  projectId: "gitview-react",
  storageBucket: "gitview-react.appspot.com",
  messagingSenderId: "234787730173",
  appId: "1:234787730173:web:126d6f233b7cf7cf6e8494",
  measurementId: "G-WK6XXYQ07G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { app, auth };
