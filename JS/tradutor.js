// Traduzir termo
function translate() {
  const input = document.getElementById('translateInput').value.trim();
  const resultDiv = document.getElementById('translationResult');

  if (!input) {
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

// Sugerir novo termo
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
