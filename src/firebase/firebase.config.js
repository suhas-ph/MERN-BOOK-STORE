// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsxNovUay55YI_1q0x31M26HuMZjAzsWc",
  authDomain: "book-store-47b28.firebaseapp.com",
  projectId: "book-store-47b28",
  storageBucket: "book-store-47b28.appspot.com",
  messagingSenderId: "952633596362",
  appId: "1:952633596362:web:3f5201a675ab507d81d733",
  measurementId: "G-XGLNVXSTVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;