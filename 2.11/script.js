// alert( null || 2 || undefined ); // 2

// alert( alert(1) || 2 || alert(3) ); // 1 2

// alert( 1 && null && 2 ); // null

// alert( alert(1) && alert(2) ); // 1 undefined

// alert( null || 2 && 3 || 4 ); // 3

//

// let value = NaN;
//
// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;
//
// alert(value); // 0 (30)

//

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
//
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// if(age >= 14 && age <= 90) {}

//

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
//
//     Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// if (!(age >= 14 && age <= 90)) {}
//
// if (age < 14 || age > 90) {}

//

// Какие из перечисленных ниже alert выполнятся?
//
//     Какие конкретно значения будут результатами выражений в условиях if(...)?
//
// if (-1 || 0) alert( 'first' ); // Выполнится, результат -1
// if (-1 && 0) alert( 'second' ); // Не выполнится, результат 0 так как -1 это true значение
// if (null || -1 && 1) alert( 'third' ); // Выполнится так как -1 и 1 это true значения

//

// Проверка логина
// важность: 3
// Напишите код, который будет спрашивать логин с помощью prompt.
//
//     Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
//
// Пароль проверять так:
//
//     Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».

// const username = prompt("Кто там?");
//
// if (!username) {
//   alert("Отменено");
// } else if (username !== "Админ") {
//   alert("Я вас не знаю");
// } else {
//   const password = prompt("Пароль?");
//
//   if (!password) {
//     alert("Отменено");
//   } else if (password !== "Я главный") {
//     alert("Неверный пароль");
//   } else {
//     alert("Здравствуйте!");
//   }
// }
