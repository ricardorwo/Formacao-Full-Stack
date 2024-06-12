const img = document.getElementById('img')
const buttons = document.getElementById('buttons')

const semafaro = (event) => {
  turnOn[event.target.id]()
  
}

const turnOn = {
  'red': () => img.src = './images/semafaro-vermelho.png',
  'yellow': () => img.src = './images/semafaro-amarelo.png',
  'green': () => img.src = './images/semafaro-verde.png'
}


buttons.addEventListener('click', semafaro)