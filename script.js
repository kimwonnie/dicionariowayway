function translate() {
  const input = document.getElementById('translateInput').value.trim();
  const resultDiv = document.getElementById('translationResult');

  if (input === '') {
    resultDiv.innerText = 'Digite uma palavra para traduzir.';
  } else {
    // Tradução fictícia para exemplo
    resultDiv.innerText = `Tradução para "${input}": Wai Wai exemplo.`;
  }
}