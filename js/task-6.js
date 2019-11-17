let input;
let total = Number("0");

while (true) {
  input = prompt("Введите число:");

  if (isNaN(input) === false) {
    if (input === null) {
      break;
    } else {
      input = Number(input);
      total += input;
    }
  } else {
    alert(`Было введено не число, попробуйте еще раз`);
  }
}

alert(`Общая сумма чисел равна ${total}`);
