import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWnEyUTv8nfE3vLDQ2utEKWNq__PPc6n0",
    authDomain: "project-kp-83bcd.firebaseapp.com",
    projectId: "project-kp-83bcd",
    storageBucket: "project-kp-83bcd.firebasestorage.app",
    messagingSenderId: "1075832487409",
    appId: "1:1075832487409:web:35643f1904f0d8dbf65850",
    measurementId: "G-W9RPDH9CQ6"
  };
  

const app = initializeApp(firebaseConfig);
const db = getAuth(app);

export { db };