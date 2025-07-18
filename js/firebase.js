// Import modular Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC3aue5Fg1Rpqk3rzkjQiQTBe76U6RA7GM",
  authDomain: "worker-management-50d6d.firebaseapp.com",
  projectId: "worker-management-50d6d",
  storageBucket: "worker-management-50d6d.firebasestorage.app",
  messagingSenderId: "981353658232",
  appId: "1:981353658232:web:d6869633271f3309133a8d",
  measurementId: "G-62MLYTQ6WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Expose globally
window.auth = auth;
window.db = db;
