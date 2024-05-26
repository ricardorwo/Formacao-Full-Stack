/* Impressão da posição dos elementos dentro do Array:
(For tradicional)
*/

let num = [10,20,30,40,50]

for(let i=0; i < num.length; i++) {
  console.log(i)
}

/* Impressão dos elementos dentro do Array:
(For tradicional)
*/

let num2 = [10,20,30,40,50]

for(let i=0; i < num2.length; i++) {
  console.log(num2[i])
}






/* For In (mesmo resultado que o For tradicional)
Impressão da posição dos elementos dentro do Array
*/

for(n in num) {
  console.log(n)
}

/* For In (mesmo resultado que o For tradicional)
Impressão dos elementos dentro do Array
*/

for(n in num) {
  console.log(num[n])
}





/* For of (mesmo resultado que o For tradicional)
Impressão dos elementos dentro do Array
*/

for(n of num) {
  console.log(n)
}




/* Resumindo:
Se quisermos pegar os elementos devemos usar "For of"
Se quisermos pegar as posições dos elementos devemos usar "For in"
*/

for(n of num) {
  console.log(n)
}

for(n in num) {
  console.log(n)
}