const addButton = document.querySelector('.new-item input[type="button"]') //OK
const newItemInput = document.querySelector('.new-item input[type="text"]') //OK
const listItemsContainer = document.querySelector('.list-itens') //OK
const warningMessage = document.querySelector('.warning') //OK

// Função para adicionar um novo item à lista
function addItem() {
  const itemText = newItemInput.value.trim() //Obtém o valor do campo de entrada de texto e remove espaços em branco
  if (itemText === '') return //Se o texto estiver vazio, a função retorna sem fazer nada, evitando a adição de itens vazios.

  // Criação do novo item
  const itemDiv = document.createElement('div') //Cria um novo elemento div que será usado para representar o item da lista.
  itemDiv.className = 'item'  //Define a classe como 'item', usada para aplicar estilos CSS e selecionar o item para remoção.

  itemDiv.innerHTML = `
    <label>
      <input type="checkbox">
      ${itemText}
    </label>
    <img src="./icons/trash.svg" alt="Remover item" class="remove-icon">
  ` //Define o conteúdo HTML do div recém-criado, que inclui um label com um checkbox e o texto do item, além de um ícone de lixeira para remoção.

  // Adiciona o novo item à lista
  listItemsContainer.appendChild(itemDiv) //Adiciona o novo div ao contêiner de itens da lista, tornando-o visível na página.

  // Limpa o campo de entrada
  newItemInput.value = '' //Limpa o campo de entrada de texto após adicionar o item, preparando-o para a próxima entrada.
}

// Função para remover um item da lista
function removeItem(event) {
  if (event.target.classList.contains('remove-icon')) { //Verifica se o alvo do evento (o elemento clicado) possui a classe remove-icon, que indica que foi clicado o ícone de remoção.
    const itemToRemove = event.target.closest('.item') //Usa o método closest para encontrar o div com a classe 'item' que contém o ícone de remoção clicado. Isso localiza o item da lista a ser removido.
    itemToRemove.remove() //Remove o item da lista (o div encontrado) do DOM.

    warningMessage.classList.add('show') //Adiciona a classe show ao elemento de mensagem de alerta para torná-lo visível.

    // Remove a classe 'show' após a transição para que a mensagem desapareça
    setTimeout(() => {
      warningMessage.classList.remove('show')
    }, 3000) //Usa setTimeout para remover a classe show do elemento de mensagem de alerta após 3 segundos, permitindo que a mensagem desapareça suavemente.
  }
}

addButton.addEventListener('click', addItem) //Adiciona um ouvinte de evento ao botão de adicionar. Quando o botão é clicado, a função addItem é chamada.

listItemsContainer.addEventListener('click', removeItem) //Adiciona um ouvinte de evento ao contêiner de itens da lista. Quando qualquer parte do contêiner é clicada, a função removeItem é chamada (essa função verifica se o clique foi no ícone de remoção).

// Fecha a mensagem de alerta ao clicar no ícone de "x"
warningMessage.querySelector('img:last-child').addEventListener('click', () => {
  warningMessage.classList.remove('show') //Remove a classe show do elemento de mensagem de alerta quando o ícone de fechar é clicado, ocultando a mensagem.
})