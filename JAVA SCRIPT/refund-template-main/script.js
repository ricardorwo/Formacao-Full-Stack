document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const expensesList = document.querySelector('aside ul');
  const totalExpenses = document.querySelector('aside header h2');
  const expenseCount = document.querySelector('aside header p span');
  const amountInput = document.getElementById('amount');
  let totalAmount = 0;
  let expenseCounter = 0;

  // Função para formatar o valor para moeda brasileira
  function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  // Listener para formatar o valor enquanto o usuário digita e permitir apenas números
  amountInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove qualquer caractere que não seja número

    if (value.length > 0) {
      value = (parseInt(value) / 100).toFixed(2); // Converte para centavos
      e.target.value = formatCurrency(parseFloat(value)); // Aplica a formatação de moeda
    } else {
      e.target.value = 'R$ 0,00'; // Valor padrão quando o campo estiver vazio
    }
  });

  // Impedir entrada de letras ou outros caracteres não numéricos
  amountInput.addEventListener('keydown', function(e) {
    // Permitir: Backspace, Delete, Tab, Esc, Enter e setas
    if (
      [46, 8, 9, 27, 13, 37, 39].indexOf(e.keyCode) !== -1 ||
      // Permitir Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (e.ctrlKey === true && [65, 67, 86, 88].indexOf(e.keyCode) !== -1) ||
      // Permitir teclas de comando (Command/Windows)
      (e.metaKey === true && [65, 67, 86, 88].indexOf(e.keyCode) !== -1)
    ) {
      return;
    }

    // Impedir se a tecla pressionada não for um número (0-9)
    if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const expenseName = document.getElementById('expense').value;
    const category = document.getElementById('category').value;
    let amount = parseFloat(amountInput.value.replace(/[R$\s]/g, '').replace(',', '.')); // Remove R$, espaços e formata o valor

    if (!expenseName || !category || isNaN(amount)) return;

    addExpense(expenseName, category, amount);
    updateTotalAmount(amount);
    updateExpenseCount(1);

    form.reset();
    amountInput.value = 'R$ 0,00'; // Reseta o campo de valor
  });

  function addExpense(name, category, amount) {
    const expenseItem = document.createElement('li');
    expenseItem.classList.add('expense');
    expenseItem.style.opacity = '0';
    expenseItem.innerHTML = `
      <img src="./img/${category}.svg" alt="Ícone de tipo da despesa" />
      <div class="expense-info">
        <strong>${name}</strong>
        <span>${getCategoryLabel(category)}</span>
      </div>
      <span class="expense-amount"><small>R$</small>${amount.toFixed(2)}</span>
      <img src="./img/remove.svg" alt="remover" class="remove-icon" />
    `;

    expensesList.appendChild(expenseItem);

    // Efeito suave para aparecer
    setTimeout(() => {
      expenseItem.style.transition = 'opacity 0.5s ease';
      expenseItem.style.opacity = '1';
    }, 10);

    // Remover a despesa ao clicar no ícone de remoção
    const removeIcon = expenseItem.querySelector('.remove-icon');
    removeIcon.addEventListener('click', function() {
      removeExpense(expenseItem, amount);
    });
  }

  function removeExpense(expenseItem, amount) {
    expenseItem.style.transition = 'opacity 0.5s ease';
    expenseItem.style.opacity = '0';

    setTimeout(() => {
      expenseItem.remove();
      updateTotalAmount(-amount);
      updateExpenseCount(-1);
    }, 500);
  }

  function updateTotalAmount(amount) {
    totalAmount += amount;
    totalExpenses.innerHTML = `<small>R$</small>${totalAmount.toFixed(2)}`;
  }

  function updateExpenseCount(change) {
    expenseCounter += change;
    expenseCount.textContent = `${expenseCounter} despesas`;
  }

  function getCategoryLabel(category) {
    switch (category) {
      case 'food': return 'Alimentação';
      case 'accommodation': return 'Hospedagem';
      case 'services': return 'Serviços';
      case 'transport': return 'Transporte';
      case 'others': return 'Outros';
      default: return '';
    }
  }
});
