function carregar() {
  var horaAtual = document.querySelector('#hora')
  const imagem = document.querySelector('#imagem')
  const data = new Date()
  const hora = data.getHours()
  horaAtual.innerHTML = `Agora são ${hora} horas.`
  const h1 = document.querySelector('#h1')

  if (hora >= 0 && hora < 12) {
    imagem.src = './images/manha.jpg'
    document.body.style.background = 'rgba(210, 233, 80, 0.356)'
    h1.style.color = 'black'

  } else if (hora >= 12 && hora < 18) {
    imagem.src = './images/tarde.jpg'
    h1.style.color = 'black'

  } else {
    imagem.src = './images/noite.jpg'
    document.body.style.background = 'black'
  }
}

