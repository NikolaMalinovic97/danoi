const translations = {
  ENG: {
    coffee: 'Coffee',
    specialMilkCoffee: 'Coffee with special milk',
    specialMilkCoffeeDetails: 'soy, almond, rice, coconut, lactose free',
    coffeeSpecial: 'barley coffee / decaffeinated coffee',
    espresso: 'Espresso',
    macchiato: 'Macchiato',
    cappuccinoSmall: 'Cappuccino, small',
    cappuccino: 'Cappuccino',
    cappuccinoGlass: 'Cappuccino in a glass',
    americano: 'Americano',
    milkCoffee: 'Milk coffee',
    latteMacchiato: 'Latte macchiato',
    corretto: 'Corretto',
    creamCoffeeSmall: 'Coffee with cream, small',
    creamCoffee: 'Coffee with cream',
    irishCoffee: 'Irish coffee',
    ginsengEspresso: 'Ginseng espresso',
    ginsengCapuccino: 'Ginseng cappucino',
    juices: 'Juices',
    milkshakes: 'Milkshakes',
    cocktails: 'Cocktails',
  },
  SLO: {
    coffee: 'Kave',
    specialMilkCoffee: 'Kave s posebnim mlekom',
    specialMilkCoffeeDetails: 'soja, mandelj, riž, kokos, brez laktoze',
    coffeeSpecial: 'ječmenova / brezkofeinska',
    espresso: 'Espresso',
    macchiato: 'Macchiato',
    cappuccinoSmall: 'Cappuccino, mali',
    cappuccino: 'Cappuccino',
    cappuccinoGlass: 'Cappuccino v kozarčku',
    americano: 'Americano',
    milkCoffee: 'Bela kava',
    latteMacchiato: 'Latte macchiato',
    corretto: 'Corretto',
    creamCoffeeSmall: 'Kava s smetano, mala',
    creamCoffee: 'Kava s smetano',
    irishCoffee: 'Irska kava',
    ginsengEspresso: 'Ginseng espresso',
    ginsengCapuccino: 'Ginseng cappucino',
    juices: 'Sokovi',
    milkshakes: 'Milkshake',
    cocktails: 'Koktajli',
  },
  ITA: {
    coffee: 'Caffè',
    specialMilkCoffee: 'Caffè con latte vario',
    specialMilkCoffeeDetails: 'soia, mandorle, riso, cocco, senza lattosio',
    coffeeSpecial: 'caffè d’orzo / caffè decaffeinato',
    espresso: 'Espresso',
    macchiato: 'Macchiato',
    cappuccinoSmall: 'Cappuccino, piccolo',
    cappuccino: 'Cappuccino',
    cappuccinoGlass: 'Cappuccino in un bicchiere',
    americano: 'Americano',
    milkCoffee: 'Caffelatte',
    latteMacchiato: 'Latte macchiato',
    corretto: 'Corretto',
    creamCoffeeSmall: 'Caffé con panna, piccolo',
    creamCoffee: 'Caffé con panna',
    irishCoffee: 'Caffé irlandese',
    ginsengEspresso: 'Ginseng espresso',
    ginsengCapuccino: 'Ginseng cappucino',
    juices: 'Succhi',
    milkshakes: 'Frappè',
    cocktails: 'Cocktail',
  },
  DEU: {
    coffee: 'Kaffee',
    specialMilkCoffee: 'Kaffee mit Spezialmilch',
    specialMilkCoffeeDetails: 'Soja, Mandel, Reis, Kokosnuss, laktosefrei',
    coffeeSpecial: 'Gerstenkaffee / entkoffeinierter Kaffee',
    espresso: 'Espresso',
    macchiato: 'Macchiato',
    cappuccinoSmall: 'Cappuccino, kleiner',
    cappuccino: 'Cappuccino',
    cappuccinoGlass: 'Cappuccino im Glas',
    americano: 'Americano',
    milkCoffee: 'Milchkaffee',
    latteMacchiato: 'Latte macchiato',
    corretto: 'Corretto',
    creamCoffeeSmall: 'Kaffee mit Sahne, kleiner',
    creamCoffee: 'Kaffee mit Sahne',
    irishCoffee: 'Irischer Kaffee',
    ginsengEspresso: 'Ginseng espresso',
    ginsengCapuccino: 'Ginseng cappucino',
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
