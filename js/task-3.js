const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const text = prompt("Введите ваш пароль:");

if (text === null) {
  message = "Отменено пользователем!";
} else if (text === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
