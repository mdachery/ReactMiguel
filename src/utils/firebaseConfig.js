// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADe7YKxH2S9C59IenC5V9t9mkb0iCjhE8",
  authDomain: "ecommercecoder-bf617.firebaseapp.com",
  projectId: "ecommercecoder-bf617",
  storageBucket: "ecommercecoder-bf617.appspot.com",
  messagingSenderId: "1078086441816",
  appId: "1:1078086441816:web:b152f193a102449701232d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db