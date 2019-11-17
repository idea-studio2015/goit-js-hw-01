let cost;
let country = prompt(`Введите страну доставки:`).toLowerCase();
let countryCapitalized = country.charAt(0).toUpperCase() + country.slice(1);

switch (country) {
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
}

if (cost === undefined) {
  alert("В вашей стране доставка не доступна");
} else {
  alert(`Доставка в ${countryCapitalized} будет стоить ${cost} кредитов`);
}
