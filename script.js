// ------------------------------
// Rolagem suave para links do menu
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



// ------------------------------
// Botão "Começar Agora"
// ------------------------------
const btnPrincipal = document.querySelector('.btn-principal');
btnPrincipal.addEventListener('click', () => {
  document.querySelector('#recursos').scrollIntoView({ behavior: 'smooth' });
});



// ------------------------------
// Efeito no menu ao rolar a página
// ------------------------------
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');

  if (window.scrollY > 50) {
    header.classList.add('ativo');
  } else {
    header.classList.remove('ativo');
  }
});



// ------------------------------
// Simulação de envio de formulário
// ------------------------------
const form = document.querySelector('.form-contato');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  alert("Mensagem enviada com sucesso! Obrigado por entrar em contato 🙂");
  form.reset();
});



// ------------------------------
// Animação de entrada dos cards
// ------------------------------
const cards = document.querySelectorAll('.card');

function animarCards() {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (pos < windowHeight - 100) {
      card.classList.add('aparecer');
    }
  });
}

window.addEventListener('scroll', animarCards);
animarCards();
