const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const text = prompt('Введите ваш пароль:');

if (text == null) {
  message = 'Отменено пользователем!';
  alert(message);
}  else if (text === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  alert(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  alert(message);
}


