const submit = document.getElementById("submitButton");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

submit.addEventListener("click", (e) => {
  validateEquality(pass1.value, pass2.value, e);
});

function validateEquality(first, second, e) {
  if (second === "") return;
  if (first === second) {
    return true;
  } else {
    e.preventDefault();
    pass1.className = "invalid";
    pass2.className = "invalid";
    alert("Passwords must match");
  }
}
