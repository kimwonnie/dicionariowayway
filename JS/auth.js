// Cadastro de usuário
function registerUser() {
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();

  if (!name || !email || !password) {
    alert("Preencha todos os campos.");
    return;
  }

  localStorage.setItem(email, JSON.stringify({ name, password }));
  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

// Login de usuário
function loginUser() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  const user = JSON.parse(localStorage.getItem(email));

  if (!user || user.password !== password) {
    alert("Email ou senha incorretos.");
    return;
  }

  alert("Login realizado com sucesso!");
  localStorage.setItem("loggedUser", email);
  window.location.href = "perfil.html";
}

// Mostrar dados do usuário logado
function showUserProfile() {
  const email = localStorage.getItem("loggedUser");
  const user = JSON.parse(localStorage.getItem(email));

  if (user) {
    document.getElementById("profileName").textContent = user.name;
    document.getElementById("profileEmail").textContent = email;
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}
