const screen1 = document.querySelector(".screen-1")
const screen2 = document.querySelector(".screen-2")
const biscoitoFechado = document.getElementById("biscoito-fechado")
const abrirOutroBiscoito = document.querySelector("button")
const fraseAleatoria = document.getElementById("fraseAleatoria")

let frases = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.',
  'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo.',
  'Prefiro os erros do entusiasmo à indiferença da sabedoria.',
  'Quando você contrata pessoas mais inteligentes do que você, prova que é mais inteligente do que elas.',
  'Mais vale um pássaro na mão do que dois mortos.'
]

function abrirBiscoito () {
  const listaFrases = Math.floor (Math.random() * frases.length)
  screen1.classList.add("hide")
  screen2.classList.remove("hide")
  fraseAleatoria.innerText = frases[listaFrases]
}


function abrirNovamente () {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
}


biscoitoFechado.addEventListener ("click" , abrirBiscoito)
abrirOutroBiscoito.addEventListener ("click" , abrirNovamente)

