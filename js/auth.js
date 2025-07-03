function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "manager-dashboard.html";
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
}
