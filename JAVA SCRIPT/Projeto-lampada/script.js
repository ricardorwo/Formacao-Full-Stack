const turnOn = document.querySelector('#turnOn')
const turnOff = document.querySelector('#turnOff')
const lamp = document.getElementById('lamp') //quando usado não precisa colocar o #

function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1
}

function lampOn () {
  if (!isLampBroken ()) {
    lamp.src = './images/lampada-acesa.jpg'
  }
}

function lampOff () {
  if (!isLampBroken ()) {
    lamp.src = './images/lampada-apagada.jpg'
  }
}

function lampBroken () {
  lamp.src = './images/lampada-quebrada.jpg'
}



turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)