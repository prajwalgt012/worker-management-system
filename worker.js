
function addWorker() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const dailyWage = parseFloat(document.getElementById("dailyWage").value);

  if (!name || !role || isNaN(dailyWage)) {
    alert("Please fill all fields correctly.");
    return;
  }

  db.collection("workers").add({
    name: name,
    role: role,
    dailyWage: dailyWage,
    createdAt: new Date()
  })
  .then(() => {
    alert("Worker added successfully!");
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("dailyWage").value = "";
  })
  .catch(error => {
    alert("Error adding worker: " + error.message);
  });
}
