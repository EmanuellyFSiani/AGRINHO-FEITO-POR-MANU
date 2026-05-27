// Interação simples: formulário
const form = document.getElementById('formContato');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    mensagem.textContent = "Mensagem enviada com sucesso! Obrigado.";
    form.reset();
});