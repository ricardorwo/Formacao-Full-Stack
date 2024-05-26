/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = 
[
  {
    name:'George',
    n1: 8.9,
    n2: 9.2,
  },

  {
    name:'Felipe',
    n1: 5.8745,
    n2: 6.2398,
  },

  {
    name:'Guilherme',
    n1: 9.87,
    n2: 7.63256,
  },

]

function studentsAverage(student) {

  let calc = ((student.n1 + student.n2) / 2).toFixed(2)

  if (calc >= 7) {
    alert(`A média do aluno ${student.name} foi: ${calc}. Parabéns ${student.name}, você foi aprovado no concurso!`)
  } else {
    alert(`A média do aluno ${student.name} foi: ${calc}. Não foi dessa vez ${student.name}, tente novamente!`)
  }
}

for (let student of students) {
  studentsAverage(student)
}