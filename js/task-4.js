const credits = 23580;
const pricePerDroid = 3000;
const question = prompt("Сколько дроидов вы хотите купить?");
let message;
let totalPrice;
let balance;

if (question === null) {
  message = "Отменено пользователем!";
} else {
  totalPrice = question * pricePerDroid;

  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    balance = credits - totalPrice;
    message = `Вы купили ${question} дроидов, на счету осталось ${balance} кредитов.`;
  }
}

alert(message);
