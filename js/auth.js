function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      window.location.href = "manager-dashboard.html";
    })
    .catch(error => alert(error.message));
}

