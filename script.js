// Alternar entre seções na mesma página
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

// Simulação de tradução
function translate() {
  const input = document.getElementById('translateInput').value.trim();
  const resultDiv = document.getElementById('translationResult');

  if (input === "") {
    alert("Digite uma palavra para traduzir.");
    return;
  }

  const dummyTranslations = {
    "universidade": "wai-universi",
    "livro": "wai-libru",
    "aula": "wai-aura"
  };

  const translation = dummyTranslations[input.toLowerCase()] || "Tradução não encontrada.";
  resultDiv.textContent = translation;
}

// Sugestão de novo termo
function submitSuggestion() {
  const pt = document.getElementById('suggestPt').value.trim();
  const wai = document.getElementById('suggestWai').value.trim();

  if (!pt || !wai) {
    alert("Preencha os dois campos.");
    return;
  }

  alert("Sugestão enviada com sucesso!");
  document.getElementById('suggestPt').value = "";
  document.getElementById('suggestWai').value = "";
}

// Cadastro de usuário
function registerUser() {
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();

  if (!name || !email || !password) {
    alert("Preencha todos os campos.");
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Verifica se já existe usuário com o mesmo email
  if (users.some(u => u.email === email)) {
    alert("Este email já está cadastrado.");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

// Login de usuário
function loginUser() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const message = document.getElementById('login-message');

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    message.textContent = "Email ou senha incorretos.";
    message.style.color = 'red';
    return;
  }

  sessionStorage.setItem('loggedUser', JSON.stringify(user));
  message.textContent = "Login realizado com sucesso! Redirecionando...";
  message.style.color = 'green';

  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
}

// Exibir menu do perfil
function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("show");
}

// Fecha o menu se clicar fora dele
window.onclick = function(event) {
  if (!event.target.matches('#profileIcon')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Exibir menu personalizado se estiver logado
function showProfileMenu() {
  const profileMenu = document.getElementById('profileMenu');
  const navLinks = document.querySelector('.nav-links');
  if (profileMenu && navLinks) {
    profileMenu.style.display = 'flex';
    navLinks.style.display = 'none';
  }
}

// Mostrar informações do usuário no perfil
function showUserProfile() {
  const loggedUser = sessionStorage.getItem('loggedUser');
  if (loggedUser) {
    const user = JSON.parse(loggedUser);
    document.getElementById("profileName").textContent = user.name;
    document.getElementById("profileEmail").textContent = user.email;
  }
}

// Logout
function logout() {
  sessionStorage.removeItem('loggedUser');
  window.location.href = 'login.html';
}

// Ao carregar a página, verifica se o usuário está logado
window.onload = function () {
  const loggedUser = sessionStorage.getItem('loggedUser');
  if (loggedUser) {
    showProfileMenu();
  }
};
