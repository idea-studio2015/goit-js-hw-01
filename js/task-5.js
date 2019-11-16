let cost;
let country = prompt(`Введите страну доставки:`);

switch (country.toLowerCase()) {
  case 'india':
    cost = 80;
    break;

 case 'china':
    cost = 100;
    break;

  case 'jamayka':
    cost = 120;
    break;

  case 'australia':
    cost = 170;
    break;

  case 'chili':
    cost = 250;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
