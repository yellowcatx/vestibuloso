
document.addEventListener('DOMContentLoaded', function () {
  const initialContent = document.querySelector('.initial-content');
  initialContent.style.display = 'block'; // Mostra o conteúdo ao carregar

  // Após clicar em outras abas, você pode ocultar o conteúdo
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      initialContent.style.display = 'none'; // Esconde o conteúdo ao mudar de aba
    });
  });
});
