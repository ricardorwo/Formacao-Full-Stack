/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima:

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */


// const patients = [
//   {
//     name: 'Luiz',
//     age: 20,
//     weight: 100,
//     height: 190,
//   },
//   {
//     name: 'Alexandra',
//     age: 27,
//     weight: 70,
//     height: 170,
//   },
//   {
//     name: 'Carlos',
//     age: 42,
//     weight: 90,
//     height: 180,
//   },
// ]

// let patientsNames = []

// // for(let index = 0; index < patients.length; index++) {
// //   patientsNames[index] = patients[index].name
// // } ou

// // for..of

// for(let patient of patients) {
//   patientsNames.push(patient.name)
// }

// alert(patientsNames)







// // Função void (vazia) - não retorna nada
// let valor = 20

// function incrementa() {
//   valor = 20 + 30
// }

// incrementa()
// console.log(valor)



// Função com parâmetros, porém vazia (não retorna nada)

// let valor = 20

// function soma(numero1, numero2) {
//   const somaDosNumeros = numero1 + numero2
//   console.log (somaDosNumeros)
// }

// soma(50, 50)
// soma(10, 5)



// Função com return

// function soma(numero1, numero2) {
//   const somaDosNumeros = numero1 + numero2
//   return somaDosNumeros
// }

// const meusNumeros = soma(4, 6)

// console.log(meusNumeros)


// Arrow Function (forma moderna e menor para escrever uma função)

const multi = (numero1, numero2) => {
  const multiplicacao = numero1 * numero2
  return multiplicacao
}

const multiplicacao = multi(2, 5)

console.log(multiplicacao)

