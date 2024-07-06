const botao = document.querySelector('#botao')

function contar() {
  let inicio = document.querySelector('#inicio')
  let fim = document.querySelector('#fim')
  let passo = document.querySelector('#passo')
  let resultado = document.querySelector('#resultado')

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert('[ERRO] Preencha todos os campos! ')
  } else {
    resultado.innerHTML = `Contando.......: <br>` 
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      alert('Passo inválido!')
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        resultado.innerHTML += `${c} \u{1F449}`
      }
    } else {
      for (let c = i; c >=f; c -= p) {
        resultado.innerHTML += `${c} \u{1F449}`
      }
    }
    resultado.innerHTML += `\u{1F3C1}`
   }
}

botao.addEventListener('click', contar)