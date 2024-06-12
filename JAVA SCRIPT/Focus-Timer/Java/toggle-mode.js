const botao = document.getElementById('toggle-mode')
const troca = document.querySelector('body')

function trocarTema() {
  troca.classList.toggle('light')
}

botao.addEventListener('click', trocarTema)