/*
Solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

*/

let numberOne = prompt("Insira o primeiro número")
let numberTwo = prompt("Insira o segundo número")

if(numberOne == numberTwo) {
  alert("Os números digitados são iguais!")
} else {
  alert("Os números digitados são diferentes!")
}

let resultSum = Number(numberOne) + Number(numberTwo)
alert(`
  A soma dos números digitados é ${resultSum}
`)

if(resultSum % 2 == 0) {
  alert('O resultado desta soma é um número PAR')
} else {
  alert('O resultado desta soma é um número IMPAR')
}

let resultSubtraction = Number(numberOne) - Number(numberTwo)
alert(`
  A subtração entre os números digitados é ${resultSubtraction}
`)

let resultMultiplication = Number(numberOne) * Number(numberTwo)
alert(`
  A multiplicação entre os números digitados é ${resultMultiplication}
`)

let resultDivision = Number(numberOne) / Number(numberTwo)
alert(`
  A divisão entre os números digitados é ${resultDivision}
`)

let resultRest = Number(numberOne) % Number(numberTwo)
alert(`
  O resto entre os números digitados é ${resultRest}
`)