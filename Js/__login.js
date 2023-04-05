let form = document.getElementById("login-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "usuario" && password === "contra") {
    window.location.href = "./pages/__citas.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});



