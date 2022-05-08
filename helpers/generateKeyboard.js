import KeyboardKey from './key.js'

function keyboardHandler(event, textarea) {
  const txtarea = textarea
  let position = txtarea.dataset.position
  switch (event.target.dataset.keycode) {
    case 'Space':
      txtarea.value = `${txtarea.value.slice(
        0,
        position
      )}${' '}${txtarea.value.slice(position)}`
      txtarea.dataset.position = +txtarea.dataset.position + 1
      break
    case 'Backspace':
      txtarea.value = `${txtarea.value.slice(
        0,
        position - 1
      )}${txtarea.value.slice(position)}`
      txtarea.dataset.position =
        txtarea.dataset.position > 0 ? +txtarea.dataset.position - 1 : 0
      break
    case 'Tab':
      break
    case 'Delete':
      break
    case 'CapsLock':
      break
    case 'Enter':
      break
    case 'MetaLeft':
      break
    case 'ArrowUp':
      break
    case 'ArrowDown':
      break
    case 'ArrowLeft':
      break
    case 'ArrowRight':
      break
    case 'ShiftLeft':
    case 'ShiftRight':
      break
    case 'ControlLeft':
    case 'ControlRight':
      break
    case 'AltLeft':
    case 'AltRight':
      break
    default:
      txtarea.value = `${txtarea.value.slice(0, position)}${
        event.target.innerText
      }${txtarea.value.slice(position)}`
      txtarea.dataset.position = +txtarea.dataset.position + 1
  }
}

export default (kbLang, textarea) => {
  const keyboard = document.createElement('div')
  keyboard.classList.add('keyboard')

  kbLang.forEach((kbRow) => {
    const row = document.createElement('div')
    row.classList.add('keyboard__row')

    kbRow.forEach((key) => {
      const keyboardKey = new KeyboardKey(key)
      row.append(keyboardKey.generate())
    })

    keyboard.append(row)
  })
  keyboard.addEventListener('click', (e) => {
    if (e.target.dataset.keycode) {
      keyboardHandler(e, textarea)
    }
  })
  return keyboard
}
