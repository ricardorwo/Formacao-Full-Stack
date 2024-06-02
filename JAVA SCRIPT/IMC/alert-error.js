export const AlertError = {
  element: document.querySelector('.alert-error'),
  open() {
    AlertError.element.classList.remove('hide-error')
  },
  close() {
    AlertError.element.classList.add('hide-error')
  }
}

