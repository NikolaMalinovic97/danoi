const translations = {
  ENG: {
    coffee: 'Coffee',
    juices: 'Juices',
    milkshakes: 'Milkshakes',
    cocktails: 'Cocktails',
  },
  SLO: {
    coffee: 'Kava',
    juices: 'Sokovi',
    milkshakes: 'Milkshake',
    cocktails: 'Koktajli',
  },
  ITA: {
    coffee: 'Caffè',
    juices: 'Succhi',
    milkshakes: 'Frappè',
    cocktails: 'Cocktail',
  },
  DEU: {
    coffee: 'Kaffee',
    juices: 'Säfte',
    milkshakes: 'Milchshakes',
    cocktails: 'Cocktails',
  },
};

function changeLanguage(language) {
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[language][key];
  });

  localStorage.setItem('selectedLanguage', language);
  setSelectedClass(language)
}

function setSelectedClass(language) {
  const languageButtons = document.querySelectorAll('.language-item');
  languageButtons.forEach(button => {
    if (button.innerHTML === language) {
      button.classList.add('selected');
    } else {
      button.classList.remove('selected');
    }
  });
}

function loadLanguage() {
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
  }
}

window.addEventListener('load', loadLanguage);
