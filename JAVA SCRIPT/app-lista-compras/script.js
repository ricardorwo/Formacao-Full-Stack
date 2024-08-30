document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.querySelector('.new-item input[type="button"]');
  const newItemInput = document.querySelector('.new-item input[type="text"]');
  const listItemsContainer = document.querySelector('.list-itens');
  const warningMessage = document.querySelector('.warning');

  // Função para adicionar um novo item à lista
  function addItem() {
    const itemText = newItemInput.value.trim();
    if (itemText === '') return;

    // Criação do novo item
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    itemDiv.innerHTML = `
      <label>
        <input type="checkbox">
        ${itemText}
      </label>
      <img src="./icons/trash.svg" alt="Remover item" class="remove-icon">
    `;

    // Adiciona o novo item à lista
    listItemsContainer.appendChild(itemDiv);

    // Limpa o campo de entrada
    newItemInput.value = '';
  }

  // Função para remover um item da lista
  function removeItem(event) {
    if (event.target.classList.contains('remove-icon')) {
      // Remove o item da lista
      const itemToRemove = event.target.closest('.item');
      itemToRemove.remove();

      // Exibe a mensagem de alerta
      warningMessage.classList.add('show');

      // Verifica se a lista está vazia e oculta a mensagem de alerta se necessário
      if (listItemsContainer.children.length === 0) {
        setTimeout(() => {
          warningMessage.classList.remove('show');
        }, 0); // A mensagem de alerta desaparecerá imediatamente
      }
    }
  }

  // Adiciona um novo item ao clicar no botão
  addButton.addEventListener('click', addItem);

  // Remove um item ao clicar no ícone da lixeira
  listItemsContainer.addEventListener('click', removeItem);

  // Fecha a mensagem de alerta ao clicar no ícone de "x"
  warningMessage.querySelector('img:last-child').addEventListener('click', () => {
    warningMessage.classList.remove('show');
  });
});