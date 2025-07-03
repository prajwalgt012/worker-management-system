// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3aue5Fg1Rpqk3rzkjQiQTBe76U6RA7GM",
  authDomain: "worker-management-50d6d.firebaseapp.com",
  projectId: "worker-management-50d6d",
  storageBucket: "worker-management-50d6d.firebasestorage.app",
  messagingSenderId: "981353658232",
  appId: "1:981353658232:web:d6869633271f3309133a8d",
  measurementId: "G-62MLYTQ6WJ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
