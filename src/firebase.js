// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_bE6gzFdIFfKQySJQi7uudfgvaVBAlxI",
  authDomain: "fox2-77fdd.firebaseapp.com",
  projectId: "fox2-77fdd",
  storageBucket: "fox2-77fdd.firebasestorage.app",
  messagingSenderId: "442481432364",
  appId: "1:442481432364:web:eb72754872a4bd1eedbe89",
  measurementId: "G-CYKGWRT6FT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
