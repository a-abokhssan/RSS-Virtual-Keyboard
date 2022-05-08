import generateKeyboard from './generateKeyboard.js'
import languages from './languages.js'

export default () => {
  const container = document.createElement('div')
  container.classList.add('container')

  const textareaWrapper = document.createElement('div')
  textareaWrapper.classList.add('textarea')
  const textarea = document.createElement('textarea')
  textareaWrapper.append(textarea)
  textarea.dataset.position = 0
  textarea.addEventListener('click', (e) => {
    textarea.dataset.position = e.target.selectionStart
  })

  const keyboard = generateKeyboard(languages.en, textarea)

  const info = document.createElement('div')
  info.classList.add('info')
  info.innerHTML = `<span>Lalalaa</span>
  <span>Lalalala</span>`

  container.append(textareaWrapper)
  container.append(keyboard)
  container.append(info)

  document.body.append(container)
}
