//Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


//Obtendo dos elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Capturando o evento de submit (enviar) do formuário.
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break

  }

}

//Função para converter a moeda
function convertCurrency (amount, price, symbol) {
  try {
    //Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = R$ ${price}`

    // Calcula o total
    let total = String(amount * price).replace("." , ",")

    //Exibe o resultado total
    result.textContent = `${total} Reais`


    //Aplica a classe que exibe o footer com o resultado
    footer.classList.add ("show-result")
  } catch (error) {
    //Remove a classe do footer, removendo o mesmo da tela
    footer.classList.remove ("show-result")

    console.log(error)
    
    alert ('Não foi possível converter, tente mais tarde!')
  }

}