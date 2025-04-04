function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageElement = document.getElementById("message");

  const validUsername = "admin";
  const validPassword = "1234";

  messageElement.style.display = "none";
  messageElement.className = "message";

  if (!username || !password) {
    messageElement.textContent = "Por favor, preencha todos os campos!";
    messageElement.classList.add("error");
    messageElement.style.display = "block";
    return;
  }

  if (username === validUsername && password === validPassword) {
    messageElement.textContent = "Login bem-sucedido! Redirecionando...";
    messageElement.classList.add("success");
    messageElement.style.display = "block";

    setTimeout(() => {
      window.location.href = "#";
    }, 2000);
  } else {
    messageElement.textContent = "Usuário ou senha incorretos!";
    messageElement.classList.add("error");
    messageElement.style.display = "block";
  }

  setTimeout(() => {
    messageElement.style.display = "none";
  }, 5000);
}
