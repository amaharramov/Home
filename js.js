'use strict';

//    Даны два массива. Один массив содержит в себе названия глав, а второй массив соответсвующие номера страниц. Количество элементов в обоих массивах одинаково.
//    Нужно вывести в консоль попарно в виде оглавления все названия и соответсвующие им страницы. Минимальная длина всей страницы 20 символов. Если сумма длин
//    номера стрницы и названия главы превышает 20 символов, то между ними должна быть 1 точка гарантированно. Например:

// const titles = [
//   'Заголовок 1',
//   'Очень длинный заголовок во всей книжке',
//   'Заголовок 2',
// ];
// const pages = [10, 20, 123456789012345];

// for (let i = 0; i < titles.length; i++) {
//   let lengthOfTwoStrings = titles[i].length + pages[i].toString().length;
//   let dotes = '';

//   if (lengthOfTwoStrings < 20) {
//     let doteCount = 20 - lengthOfTwoStrings;
//     for (let j = 0; j < doteCount; j++) {
//       dotes += '.';
//     }
//     console.log(titles[i] + dotes + pages[i]);
//   } else {
//     console.log(titles[i] + '.' + pages[i]);
//   }
// }

//2. Дан объект. Бесконечно спрашивать у пользователя ввод строки. Введённая строка будет является названием поля в объекте. Нужно в консоль выводить true или false
// в зависимости от того, есть ли в объекте поле с таким названием или нет. Сложность заключается в том, что регистр букв не должен учитываться ни в введёной строке
// ни в названии поля. Например:

// const obj = {
//     name: 'Alex',
//     surName: 'Max',
//     AGE: 40,
//   };

// algorithm

// Expected output:

// template: user input -> output

// NAME -> true
// SURname -> true
// AGE -> true
// nAmEe -> false
// birthDate -> false

//Решение 2-го задания

// const obj = {
//   name: 'Alex',
//   surName: 'Max',
//   AGE: 40,
// };

// while (true) {
//   const userType = prompt('Enter a field name:');
//   if (userType !== null) {
//     const userTypeLower = userType.toLowerCase().trim();
//     let exist = false;

//     for (const key in obj) {
//       if (key.toLowerCase() === userTypeLower) {
//         exist = true;
//         break;
//       }
//     }

//     console.log(`${userType} -> ${exist}`);
//   } else {
//     break;
//   }
// }

//3. Бесконечно спрашивать у пользователя ввод строки. После каждого ввода строки юзером в консоль печатать противоположную строку, т.е. порядок должен идти в обратном
// порядке, а так же регистр букв должен быть инвертирован

// algorithm

// Expected output:

// template: user input -> output

// Hello World! -> !DLROw OLLEh
// !РИм ЙУВТСВАРДз -> Здравствуй Мир!
// My bumber is 0123456789 -> 9876543210 SI REBMUB Ym

while (true) {
  const userType = prompt('Enter your value:');
  if (userType === null) {
    break;
  }

  let reversedString = '';
  for (let i = userType.length - 1; i >= 0; i--) {
    const element = userType[i];
    reversedString +=
      element === element.toUpperCase()
        ? element.toLowerCase()
        : element.toUpperCase();
  }

  console.log(`${userType} -> ${reversedString}`);
}
