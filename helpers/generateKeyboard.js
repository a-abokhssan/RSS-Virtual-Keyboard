import KeyboardKey from './key.js';
import languages from './languages.js';
import {
  setLanguage, getLanguage, setCase, getCase,
} from './localStorage.js';

let startChangeLanguage = false;

function keyboardHandler(keycode, value, textarea) {
  const txtField = textarea;
  const { position } = txtField.dataset;
  switch (keycode) {
    case 'Space':
      txtField.value = `${txtField.value.slice(
        0,
        position,
      )}${' '}${txtField.value.slice(position)}`;
      txtField.dataset.position = +txtField.dataset.position + 1;
      break;
    case 'Backspace':
      txtField.value = `${txtField.value.slice(
        0,
        position - 1,
      )}${txtField.value.slice(position)}`;
      if (txtField.dataset.position > 0) {
        txtField.dataset.position -= 1;
      } else {
        txtField.dataset.position = 0;
      }
      break;
    case 'Tab':
      break;
    case 'Delete':
      break;
    case 'CapsLock':
      break;
    case 'Enter':
      break;
    case 'MetaLeft':
      break;
    case 'ArrowUp':
      break;
    case 'ArrowDown':
      break;
    case 'ArrowLeft':
      break;
    case 'ArrowRight':
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      break;
    case 'ControlLeft':
    case 'ControlRight':
      break;
    case 'AltLeft':
    case 'AltRight':
      break;
    default:
      txtField.value = `${txtField.value.slice(
        0,
        position,
      )}${value}${txtField.value.slice(position)}`;
      txtField.dataset.position = +txtField.dataset.position + 1;
  }
}

function changeLanguage(keyboard) {
  const keyboardElem = keyboard;
  let language = getLanguage();
  if (language === 'en') {
    setLanguage('ru');
    language = 'ru';
  } else {
    setLanguage('en');
    language = 'en';
  }

  const newCharsArr = languages[language];
  keyboardElem.innerHTML = '';
  newCharsArr.forEach((kbRow) => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    kbRow.forEach((key) => {
      const keyboardKey = new KeyboardKey(key);
      row.append(keyboardKey.generate('small'));
    });

    keyboard.append(row);
  });
}

function changeCase(keyboard) {
  const keyboardElem = keyboard;
  const language = getLanguage();
  let charCase = getCase();

  if (charCase === 'small') {
    setCase('shift');
    charCase = 'shift';
  } else {
    setCase('small');
    charCase = 'small';
  }

  const newCharsArr = languages[language];
  keyboardElem.innerHTML = '';
  newCharsArr.forEach((kbRow) => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    kbRow.forEach((key) => {
      const keyboardKey = new KeyboardKey(key);
      row.append(keyboardKey.generate(charCase));
    });

    keyboard.append(row);
  });
}

export default (textarea) => {
  const lang = getLanguage();
  const charsArr = languages[lang];
  window.localStorage.setItem('case', 'small');

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  charsArr.forEach((kbRow) => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    kbRow.forEach((key) => {
      const keyboardKey = new KeyboardKey(key);
      row.append(keyboardKey.generate('small'));
    });

    keyboard.append(row);
  });

  keyboard.addEventListener('mousedown', (e) => {
    if (e.target.dataset.keycode) {
      e.target.classList.add('press');
      const { keycode } = e.target.dataset;
      const value = e.target.innerText;
      keyboardHandler(keycode, value, textarea);
    }
  });

  keyboard.addEventListener('mouseup', (e) => {
    if (e.target.dataset.keycode) {
      e.target.classList.remove('press');
    }
  });

  window.addEventListener('keydown', (e) => {
    e.preventDefault();

    if (e.code === 'CapsLock') {
      changeCase(keyboard);
    }

    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      changeCase(keyboard);
    }

    if (e.code === 'ShiftLeft' || e.code === 'AltLeft') {
      if (startChangeLanguage) {
        changeLanguage(keyboard);
        startChangeLanguage = false;
      } else {
        startChangeLanguage = true;
      }
    }

    const key = document.querySelector(`[data-keycode=${e.code}]`);
    if (key) {
      key.classList.add('press');
      const { keycode } = key.dataset;
      const value = key.innerText;
      keyboardHandler(keycode, value, textarea);
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      changeCase(keyboard);
    }

    if (e.code === 'ShiftLeft' || e.code === 'AltLeft') {
      startChangeLanguage = false;
    }

    const key = document.querySelector(`[data-keycode=${e.code}]`);
    if (key) {
      key.classList.remove('press');
    }
  });

  return keyboard;
};
