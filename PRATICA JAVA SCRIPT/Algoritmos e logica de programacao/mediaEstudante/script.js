/* 
Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

A média positiva deverá ser maior que 6.

Se o aluno passou no bimestre, dar os parabéns.

Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na recuperação.

Em ambos os casos, mostre uma mensaagem com o nome do aluno e a nota.
*/

let student = prompt('Qual o nome do(a) aluno(a)?')
let n1 = prompt('Qual a nota da primeira prova?')
let n2 = prompt('Qual a nota da segunda prova?')
let n3 = prompt('Qual a nota da terceira prova?')

// fazer a média: (n1+n2+n3)/3

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average >= 6

average = average.toFixed(2) // para não precisar repetir duas vezes na função abaixo (boas práticas)

if (result) {
  alert('Parabéns ' + student + '! Sua média foi de: ' + average)

} else {
  alert(student + ', estude para sua prova de recuperação! Sua média foi de: ' + average)
}