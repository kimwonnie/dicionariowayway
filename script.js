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
