// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBqctIxmDqzkxEqFNI3SDY7a3iqvbga-uM",
  authDomain: "e-commerce-e6a48.firebaseapp.com",
  projectId: "e-commerce-e6a48",
  storageBucket: "e-commerce-e6a48.appspot.com",
  messagingSenderId: "83978895936",
  appId: "1:83978895936:web:6637fc4fab12e93fba15a5",
  measurementId: "G-BQL7LFH60D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);