import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "manager-dashboard.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
}

window.login = login; // Attach to window so HTML onclick works
