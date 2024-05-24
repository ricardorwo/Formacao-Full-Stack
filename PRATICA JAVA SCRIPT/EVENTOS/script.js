const button = document.querySelector('button')

button.addEventListener('click', function() {
  document.querySelector('p').classList.toggle('hide')
})