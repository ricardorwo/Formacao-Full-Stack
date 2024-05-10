/* 
Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação e resto da divisão.

E para cada operação mostrar um alerta com o resultado.
*/

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber); //String transformado em número
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber //usado o constante pois não temos intenção de mudar este valor mais tarde, irá permanecer.

const sub = firstNumber - secondNumber;

const multi = firstNumber * secondNumber;

const div = firstNumber / secondNumber;

const restDiv = firstNumber % secondNumber;

alert('Soma: ' + sum);
alert('Subtração: ' + sub);
alert('Multiplicação: ' + multi);
alert('Divisão: ' + div);
alert('Resto da divisão: ' + restDiv);
