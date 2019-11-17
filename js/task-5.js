let cost;
let country = prompt(`Введите страну доставки:`);

switch (country.toLowerCase()) {
  case "индия":
    cost = 80;
    break;

  case "китай":
    cost = 100;
    break;

  case "ямайка":
    cost = 120;
    break;

  case "австралия":
    cost = 170;
    break;

  case "чили":
    cost = 250;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
