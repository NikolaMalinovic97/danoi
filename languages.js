const translations = {
  english: {
    coffee: 'Coffee',
    juices: 'Juices',
    milkshakes: 'Milkshakes',
    cocktails: 'Cocktails',
  },
  slovenian: {
    coffee: 'Kava',
    juices: 'Sokovi',
    milkshakes: 'Milkshake',
    cocktails: 'Koktajli',
  },
  italian: {
    coffee: 'Caffè',
    juices: 'Succhi',
    milkshakes: 'Frappè',
    cocktails: 'Cocktail',
  },
  german: {
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
}

function loadLanguage() {
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
  }
}

window.addEventListener('load', loadLanguage);
