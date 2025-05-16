const form = document.getElementById("referralForm");
const thankYou = document.getElementById("thankYouMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const studentId = document.getElementById("studentId").value.trim();
  const reason = document.getElementById("reason").value.trim();

  if (!name || !email || !studentId || !reason) {
    alert("Please fill out all fields.");
    return;
  }

  // Simulate a successful submission
  thankYou.style.display = "block";
  form.reset();
});