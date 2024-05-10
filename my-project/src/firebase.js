// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

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
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export { db, collection, addDoc }; // Export db, collection, and addDoc
export default app;
