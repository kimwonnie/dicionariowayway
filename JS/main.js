// Navegação entre seções (index.html)
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
  const section = document.getElementById(sectionId);
  if (section) section.style.display = 'block';
}
