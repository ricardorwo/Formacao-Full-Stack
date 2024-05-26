const button = document.querySelector('button')

button.addEventListener('click', handleClick)

function handleClick() {
  document.querySelector('p').classList.toggle('hide')
}