// Alternar entre seções na mesma página (index.html)
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

  // Tradução simulada
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

// Cadastro
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

// Login
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

const users = [
  { username: 'professor', password: '1234', role: 'linguista' },
  { username: 'aluno', password: 'abcd', role: 'estudante' }
];

function toggleDropdown() {
  const menu = document.getElementById('dropdownMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('login-message');

  const users = [
    { username: 'professor', password: '1234', role: 'linguista' },
    { username: 'aluno', password: 'abcd', role: 'estudante' }
  ];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    message.textContent = 'Login realizado com sucesso!';
    message.style.color = 'green';

    // Atualiza a navbar para exibir o menu de perfil
    document.querySelector('.nav-links').style.display = 'none';
    document.getElementById('profileMenu').style.display = 'flex';

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    message.textContent = 'Usuário ou senha inválidos.';
    message.style.color = 'red';
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = "login.html";
}
// Exibe ou oculta o menu dropdown da foto de perfil
function toggleDropdown() {
  const dropdown = document.getElementById('dropdownMenu');
  if (dropdown.style.display === 'flex') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'flex';
    dropdown.style.flexDirection = 'column';
  }
}

// Função de login com validação simples e simulação de autenticação
function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('login-message');

  if (!username || !password) {
    message.textContent = 'Por favor, preencha todos os campos.';
    message.style.color = 'red';
    return;
  }

  // Busca usuários cadastrados no localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Tenta encontrar o usuário
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    message.textContent = 'Login realizado com sucesso! Redirecionando...';
    message.style.color = 'green';

    // Salva info do usuário logado no sessionStorage
    sessionStorage.setItem('loggedUser', JSON.stringify(user));

    // Mostra navbar personalizada (profileMenu)
    showProfileMenu();

    setTimeout(() => {
      // Redirecionar para página inicial (ou painel)
      window.location.href = 'index.html';
    }, 1500);
  } else {
    message.textContent = 'Usuário ou senha inválidos.';
    message.style.color = 'red';
  }
}

// Exibe o menu com a foto do perfil e oculta os botões login/cadastro
function showProfileMenu() {
  const profileMenu = document.getElementById('profileMenu');
  const navLinks = document.querySelector('.nav-links');
  profileMenu.style.display = 'block';
  navLinks.style.display = 'none';
}

// Função de logout, limpa sessionStorage e recarrega página
function logout() {
  sessionStorage.removeItem('loggedUser');
  window.location.href = 'login.html';
}

// Ao carregar a página, verifica se tem usuário logado
window.onload = function () {
  const loggedUser = sessionStorage.getItem('loggedUser');
  if (loggedUser) {
    showProfileMenu();
  }
};

// Mostrar nome do usuário logado
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
