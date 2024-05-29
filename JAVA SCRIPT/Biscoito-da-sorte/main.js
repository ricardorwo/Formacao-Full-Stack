// Variáveis:

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const openCookie = document.querySelector("#openCookie")
const btnOpenCookieReset = document.querySelector("#btnOpenCookieReset")


let phrases = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.',
  'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo.',
  'Prefiro os erros do entusiasmo à indiferença da sabedoria.',
  'Quando você contrata pessoas mais inteligentes do que você, prova que é mais inteligente do que elas.'
]

const randomPhrases = Math.floor(Math.random() * phrases.length)

// Funções:

function open(event) {
  event.preventDefault()
  screen1.classList.add("hide")
  screen2.classList.remove("hide")
  screen2.querySelector("#phrase").innerText = phrases[randomPhrases]
}

function openAgain() {

  screen1.classList.remove("hide")
  screen2.classList.add("hide")
}


// Eventos:

openCookie.addEventListener('click', open)
btnOpenCookieReset.addEventListener('click', openAgain)











