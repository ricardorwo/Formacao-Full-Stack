# sintaxe e boas práticas:

// ponto e vírgula é facultativo
const myConst = "constante"

// escrever com calmelCase
const myConst2 = "constante2"

// procurar escrever código em inglês 
// para treinar, aumentar as oportunidades futuras
function doSomething(myArgument) {}

# variáveis:

const
let
var

# tipos de dados

String "abc" / 'abc' / `abc`
Number
Boolean(true/false)
undefined
null

# estrutura de dados:

// Array
const myArray = [1, 2, "a", "b", true]

// Object
const myObject = { property: "value" }

# funções:

// 1. Criação e tipos de funções
// named
function myFunction() {}

// Anonymous
const myFunction = function() {}

// Arrow
const myFunction = () => {}

// arguments & return
function sum(a, b) {
	return a + b
}

const sum = (a, b) => a + b

// 2. Excecução
myFunction()
sum(1, 2)

# fluxo da aplicação:

// if, else if, else
const isRainning = true
if (isRainning) {
	alert("Está chovendo, pega o guarda chuvas 🌧")
} else {
	alert("Dia limpo ⛅️")
}

// switch
const water = "com gás"

switch(water) {
	case "com gás": 
		alert("Essa água é com gás")
		break
	case "sem gás":
		alert("Essa água é sem gás")
		break
	case "da fonte":
		alert("Água fresquiha da fonte")
		break	
	default:
		alert("cadê minha água?")
}

# estrutura de repetição:

// while
let play = true
while(play) {
	// fazer algo até o play ser falso
	// criar uma lógica para o play se tornar falso
	// se não, loop eterno
}

// for (tradicional)
let text = "abc"
for (let i = 0; i < text.length; i++){
	alert(text[i])
}

// for..of
for (let char of text) {
	alert(char)
}

# operadores:

() // group operator - agrupamento

// matemáticos
* // multiplicação
** // exponeciação
/ // divisão
% // resto da divisão
+ // soma
- // subtração

// lógicos
&& // E lógico 
|| // OU lógico
! // Não lógico

// comparação - relacional
> // maior
< // menor
>= // maior igual
<= // menor igual
== // igualdade
=== // igual no valor e do mesmo tipo (estritamente igual)
!= // desigualdade
!== // diferente do valor ou do tipo (estritamente diferente)

// Atribuição
= // atribuição de valor
*= // multiplicação e atribuição de valor 
/= // divisão e atribuição de valor
+= // soma e atribui valor
-= // diminui e atribui


// outros operadores/expressões

typeof // tipo do dado
++ // incremento
-- // decremento
{} // objeto vazio ou bloco de código
[] // array vazio
, // separa elementos de um array, objeto ou criação de multiplas variáveis

//TERNARIOS


