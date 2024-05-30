// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgo9Y-kkbOsSDCDhQBQ5adkLbxf4BkgQs",
  authDomain: "eccomerce-react-js.firebaseapp.com",
  projectId: "eccomerce-react-js",
  storageBucket: "eccomerce-react-js.appspot.com",
  messagingSenderId: "830842561407",
  appId: "1:830842561407:web:6e4423aefe99a1f03ab04a",
  measurementId: "G-9BD1GVH84B"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app;