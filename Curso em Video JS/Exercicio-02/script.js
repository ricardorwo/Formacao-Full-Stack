
function verificar() {
  
  const data = new Date()
  const anoAtual = data.getFullYear()
  const formAno = document.querySelector('#nascimento')
  const botao = document.querySelector('#botao')
  const resultado = document.querySelector('.resultado')

  if (formAno.value.length == 0 || formAno.value > anoAtual) {
    alert('[ERRO] Verifique os dados digitados e tente novamente')
  } else {
    const sexo = document.getElementsByName('sexo')
    const idade = anoAtual - nascimento.value
    const genero = '' 
    const img = document.querySelector('#foto')
    

    if (sexo[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 2) {
        //bebe
        img.src = './images/bebe-homem.jpg'
      } else if (idade < 12) {
        //criança
        img.src = './images/crianca-homem.jpg'
      } else if (idade < 21) {
        //jovem
        img.src = './images/jovem-homem.jpg'
      } else if (idade < 60) {
        //adulto
        img.src = './images/adulto-homem.jpg'
      } else {
        //idoso
        img.src = './images/idoso-homem.jpg'
      }
    } else if (sexo[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 2) {
        //bebe
        img.src = './images/bebe-mulher.jpg'
      } else if (idade < 12) {
        //criança
        img.src = './images/crianca-mulher.jpg'
      } else if (idade < 21) {
        //jovem
        img.src = './images/jovem-mulher.jpg'
      } else if (idade < 60) {
        //adulto
        img.src = './images/adulta-mulher.jpg'
      } else {
        //idoso
        img.src = './images/idosa-mulher.jpg'
      }
    }
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  }

  botao.addEventListener('click', verificar)
}