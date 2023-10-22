'use strict';
//1. Дан непустой массив чисел. Написать алгоритм (не исползьуя встроенные методы), который изменит исходный массив так, чтобы числа в нём шли в обратном порядке
// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = array.length; i--; ) {
//   console.log(array[i]);
// }

//2. Дан массив и переменная с неким значением. Реализовать алгоритм встроенного метода unshift, не используя встроенные методы

// const arr = [2, 4, 6];
// const element = 'begin';

// for (let i = arr.length; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }

// arr[0] = element;
// console.log(arr);

//3. Дан некий объект и 10 попыток для ползователя, чтобы ввести названия полей этого объекта. Написать алгоритм, который по окончании выведет в консоль 2 массива:

// const userProfile = {
//   name: 'Ali',
//   surname: 'Maharramov',
//   age: 30,
//   gender: 'male',
//   country: 'Azerbaijan',
//   city: 'Baku',
// };

// let data;
// const arrExists = [];
// const arrNotExists = [];
// for (let i = 0; i < 10; i++) {
//   data = prompt('Try ' + (i + 1) + '. Enter value : ').trim();
//   if (
//     userProfile.age == data ||
//     userProfile.city == data ||
//     userProfile.country == data ||
//     userProfile.gender == data ||
//     userProfile.name == data ||
//     userProfile.surname == data
//   ) {
//     arrExists.push(data);
//   } else if (data === '') {
//     arrNotExists.push('null');
//   } else {
//     arrNotExists.push(data);
//   }
// }

// console.log(`Поля, которые были в объекте ${arrExists}`);
// console.log(`Поля, которые не были в объекте ${arrNotExists}`);


