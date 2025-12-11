// Smooth scroll dos links do menu
document.querySelectorAll("header nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Simulação de saldo + atualização automática
const saldoElement = document.getElementById("saldoTotal");
if (saldoElement) {
  let saldo = 1250.75;

  function atualizarSaldo() {
    saldoElement.textContent = "R$ " + saldo.toFixed(2).replace(".", ",");
  }

  atualizarSaldo();

  // Botão para adicionar valor fictício
  const addBtn = document.getElementById("addValor");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      saldo += 50;
      atualizarSaldo();
    });
  }
}

// Formulário de contato — simulação
const form = document.getElementById("formContato");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada! Obrigado por entrar em contato 😊");
    form.reset();
  });
}
