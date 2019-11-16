const credits = 23580;
const pricePerDroid = 3000;
const question = prompt('Сколько дроидов вы хотите купить?');
let message;
let totalPrice;
let balance;


if (question === null) {
  let message = `Отменено пользователем!`;
  alert(message);
}

else  {
  let totalPrice = question * pricePerDroid;

  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  }

	else {
    let balance = credits - totalPrice;
		alert(`Вы купили ${question} дроидов, на счету осталось ${balance} кредитов.`);
	};
}


