// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLtOBCdzujHArMpoaaXuEEKOsJ7oQwL1A",
    authDomain: "keep-e2832.firebaseapp.com",
    projectId: "keep-e2832",
    storageBucket: "keep-e2832.appspot.com",
    messagingSenderId: "995407270972",
    appId: "1:995407270972:web:4422b76622bf6a819d1f39",
    measurementId: "G-B7STXYQB2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);