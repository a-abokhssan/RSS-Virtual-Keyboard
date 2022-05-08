export default class KeyboardKey {
  constructor({ small, shift, code }) {
    this.small = small
    this.shift = shift
    this.code = code
  }

  generate() {
    const key = document.createElement('div')
    key.classList.add('keyboard__key')
    key.dataset.keycode = this.code

    switch (this.code) {
      case 'Space':
        key.classList.add('keyboard__key--5')
        key.innerText = this.small
        break
      case 'Backspace':
        key.classList.add('keyboard__key--2-3')
        key.innerText = this.small
        break
      case 'Tab':
        key.classList.add('keyboard__key--1-5')
        key.innerText = this.small
        break
      case 'Delete':
        key.classList.add('keyboard__key--1b')
        key.innerText = 'Del'
        break
      case 'CapsLock':
        key.classList.add('keyboard__key--2i')
        key.innerText = this.small
        break
      case 'Enter':
        key.classList.add('keyboard__key--2')
        key.innerText = this.small
        break
      case 'MetaLeft':
        key.classList.add('keyboard__key--1-5')
        key.innerText = 'Win'
        break
      case 'ArrowUp':
        key.classList.add('keyboard__key--1b')
        key.innerHTML = '&#8593;'
        break
      case 'ArrowDown':
        key.classList.add('keyboard__key--1b')
        key.innerHTML = '&#8595;'
        break
      case 'ArrowLeft':
        key.classList.add('keyboard__key--1b')
        key.innerHTML = '&#8592;'
        break
      case 'ArrowRight':
        key.classList.add('keyboard__key--1b')
        key.innerHTML = '&#8594;'
        break
      case 'ShiftLeft':
      case 'ShiftRight':
        key.classList.add('keyboard__key--2')
        key.innerText = this.small
        break
      case 'ControlLeft':
      case 'ControlRight':
        key.classList.add('keyboard__key--1b')
        key.innerText = 'Ctrl'
        break
      case 'AltLeft':
      case 'AltRight':
        key.classList.add('keyboard__key--1-5')
        key.innerText = this.small
        break
      default:
        key.classList.add('keyboard__key--1')
        key.innerText = this.small
    }

    return key
  }
}
