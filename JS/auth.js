// Função para obter todos os usuários do localStorage (objeto)
function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || {};
}

// Função para salvar todos os usuários no localStorage
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Validação simples de email
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Cadastro de usuário
function registerUser() {
  const name = document.getElementById('registerName')?.value.trim();
  const email = document.getElementById('registerEmail')?.value.trim().toLowerCase();
  const password = document.getElementById('registerPassword')?.value.trim();

  if (!name || !email || !password) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Por favor, insira um email válido.");
    return;
  }

  const users = getUsers();

  if (users[email]) {
    alert("Este email já está cadastrado.");
    return;
  }

  users[email] = { name, password };
  saveUsers(users);

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

// Login de usuário
function loginUser() {
  const email = document.getElementById('loginEmail')?.value.trim().toLowerCase();
  const password = document.getElementById('loginPassword')?.value.trim();

  if (!email || !password) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const users = getUsers();
  const user = users[email];

  if (!user || user.password !== password) {
    alert("Email ou senha incorretos.");
    return;
  }

  // Salvar usuário logado na sessão (sessionStorage)
  sessionStorage.setItem('loggedUser', email);

  alert("Login realizado com sucesso!");
  window.location.href = "perfil.html";
}

// Mostrar dados do usuário logado
function showUserProfile() {
  const email = sessionStorage.getItem('loggedUser');

  if (!email) {
    // Usuário não está logado, redirecionar para login
    window.location.href = "login.html";
    return;
  }

  const users = getUsers();
  const user = users[email];

  if (user) {
    const nameElem = document.getElementById("profileName");
    const emailElem = document.getElementById("profileEmail");

    if (nameElem) nameElem.textContent = user.name;
    if (emailElem) emailElem.textContent = email;
  }
}

// Logout
function logout() {
  sessionStorage.removeItem('loggedUser');
  window.location.href = "index.html";
}

// Verificar login na inicialização da página de perfil
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('perfil.html')) {
    showUserProfile();
  }
});
