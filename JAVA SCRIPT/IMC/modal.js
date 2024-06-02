export const Modal = {

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

Modal.buttonClose.onclick = () => {
  Modal.add()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  // console.log(event.key) para saber qual tecla está sendo pressionada
  if(event.key === 'Escape') {
    console.log('cliquei no esc')
    Modal.add()
  }
}