// variáveis - variables

const form = document.querySelector('form')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')



// 3 maneiras de criar e atribuir função a um evento

// 1
// form.onsubmit = function() {}

//2
// form.onsubmit = () => {}

// //3
// form.onsubmit = handleSubmit
// function handleSubmit

// Para fins didaticos vamos escolher a primeira opção:

form.onsubmit = event => {
  event.preventDefault()

  const peso = inputPeso.value
  const altura = inputAltura.value

  console.log(peso, altura)
}


