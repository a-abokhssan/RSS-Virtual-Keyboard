import generateKeyboard from './generateKeyboard.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const textareaWrapper = document.createElement('div');
  textareaWrapper.classList.add('textarea');
  const textarea = document.createElement('textarea');
  textareaWrapper.append(textarea);
  textarea.dataset.position = 0;
  textarea.addEventListener('click', (e) => {
    textarea.dataset.position = e.target.selectionStart;
  });

  const keyboard = generateKeyboard(textarea);

  const info = document.createElement('div');
  info.classList.add('info');
  info.innerHTML = `<span>Keyboard created in the Windows operating system</span>
  <span>To switch the language combination: left shift + alt</span>`;

  container.append(textareaWrapper, keyboard, info);

  document.body.append(container);
  textarea.focus();
};
