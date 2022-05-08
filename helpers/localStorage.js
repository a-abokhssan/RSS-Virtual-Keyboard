export function setLanguage(lang) {
  window.localStorage.setItem('language', lang);
}

export function getLanguage() {
  const lang = window.localStorage.getItem('language');
  if (lang) return lang;
  setLanguage('en');
  return 'en';
}

export function setCase(charCase) {
  window.localStorage.setItem('case', charCase);
}

export function getCase() {
  const charCase = window.localStorage.getItem('case');
  if (charCase) return charCase;
  setCase('small');
  return 'small';
}
