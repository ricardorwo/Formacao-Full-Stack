const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const calcular = document.querySelector("button")
const resultado = document.querySelector(".resultado")
const span = document.querySelector(".resultado span")

// Manipulando o input "peso" para receber apenas números.
peso.addEventListener ("input", () => {
  const regexPeso = /\D+/g
  peso.value = peso.value.replace(regexPeso, "")
})

// Manipulando o input "altura" para receber apenas números.
altura.addEventListener ("input", () => {
  const regexAltura = /\D+/g
  altura.value = altura.value.replace(regexAltura, "")
})


function calculoIMC (event) {
  event.preventDefault()

  if (peso.value.trim() === '' || altura.value.trim() === '') {
    alert("Favor preencher todos os campos!")

  return
}
  
  const result = (Number(peso.value / ((altura.value * altura.value) / 100)) * 100).toFixed(2)
  resultado.classList.remove("hide")
  span.innerText = result

}

calcular.addEventListener ("click", calculoIMC)