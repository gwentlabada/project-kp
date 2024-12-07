import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
const auth = getAuth(app);

// Function to handle user registration
const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Daftar Akun Berhasil:", userCredential.user);
    return userCredential.user; // You can use this user object for further actions
  } catch (error) {
    console.error("Pendaftaran Akun Gagal:", error.message);
    throw error;
  }
};

export { registerUser };
