function onLoad() {
  const items = [
    {
      name: 'affogato',
      special: 'affogatoDetails',
      price: '2,50€'
    },
    {
      name: 'iceCappucinnoOnTheRock',
      price: '3,50€'
    }
  ]

  items.forEach(item => {
    if (item.special === undefined) {
      createItem(item);
    } else {
      createSpecialItem(item);
    }
  });
}

window.addEventListener('load', onLoad);

function createItem(item) {
  const iceCoffeeList = document.getElementById('iceCoffeeList');

  const menuItem = document.createElement('div');
  menuItem.className = 'menu-item';

  const itemName = document.createElement('p');
  itemName.setAttribute('data-translate', item.name);

  const itemCost = document.createElement('p');
  itemCost.textContent = item.price;

  menuItem.appendChild(itemName)
  menuItem.appendChild(itemCost)
  iceCoffeeList.appendChild(menuItem)
  iceCoffeeList.appendChild(document.createElement('hr'))
}

function createSpecialItem(item) {
  const iceCoffeeList = document.getElementById('iceCoffeeList');

  const menuItem = document.createElement('div');
  menuItem.className = 'menu-item';

  const menuItemSpecial = document.createElement('div');
  menuItemSpecial.className = 'menu-item-special';

  const itemName = document.createElement('p');
  itemName.setAttribute('data-translate', item.name);

  const itemSpecial = document.createElement('span');
  itemSpecial.className = 'special-detail';
  itemSpecial.setAttribute('data-translate', item.special);

  const itemCost = document.createElement('p');
  itemCost.textContent = item.price;

  menuItemSpecial.appendChild(itemName)
  menuItemSpecial.appendChild(itemSpecial)
  menuItem.appendChild(menuItemSpecial);
  menuItem.appendChild(itemCost)
  iceCoffeeList.appendChild(menuItem);
  iceCoffeeList.appendChild(document.createElement('hr'));
}
