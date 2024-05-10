// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPCr-sHn3m7BWwyIgXXZV-g_ReGYfHdqA",
  authDomain: "my-project-a9a76.firebaseapp.com",
  projectId: "my-project-a9a76",
  storageBucket: "my-project-a9a76.appspot.com",
  messagingSenderId: "1012892083457",
  appId: "1:1012892083457:web:33848e6fcfc9b08e9a6700",
  measurementId: "G-QF56LFKZKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);