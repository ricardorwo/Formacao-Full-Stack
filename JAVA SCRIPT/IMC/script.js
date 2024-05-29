// variáveis - variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#height')
const inputHeight = document.querySelector('#height')

const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.message'),
  buttonClose: document.querySelector('.close'),

  add() { //mesma coisa que: add: function() {}
    Modal.wrapper.classList.add('hide')
  },
  remove() {
    Modal.wrapper.classList.remove('hide')
  }
}

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.remove()
}

Modal.buttonClose.onclick = () => {
  Modal.add()
}

function IMC(weight, height) {
  return ((weight / (height / 100) ** 2)).toFixed(2)
}


