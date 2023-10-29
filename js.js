// 1. Дан массив. Написать функцию, которая будет каждую секунду выводить в консоль элементы массива, пока они не закончатся
// Функция должна принимать на вход 1 аргумент:
// + Массив

// const myArray = [1, 2, 3, 4, 5, 6, 7];

// function outputArray(arr) {
//   let index = 0;

//   const intervalId = setInterval(function () {
//     if (index < arr.length) {
//       console.log(arr[index]);
//       index++;
//     } else {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }

// outputArray(myArray);

// 2. Написать функцию таймера обратного отчёта. Функция должна принимать 2 аргумента:
// 	+ Временной интервал в секундах между выводом чисел
// 	+ Число, с которого начнётся обратный отчёт. Число будет передано неотрицательное и целое
//    Выводить нужно начиная с числа включительно и до 0 включительно
//    По достижении 0 функция завершает свою работу

// function countdownTimer(interval, startNumber) {
//   let currentNumber = startNumber;

//   const timerId = setInterval(function () {
//     if (currentNumber >= 0) {
//       console.log(currentNumber);
//       currentNumber--;
//     } else {
//       clearInterval(timerId);
//     }
//   }, interval * 1000);
// }

// countdownTimer(1, 7);

// 3. Написать функцию будильник. Функция должна принимать 1 аргумент:
// 	+ Время - строка формата HH:mm:ss
//    Если хоть одна из частей времени не является формата - 2 цифры, то выводить ошибку и ничего не делать.
//    При наступлении указанного времени выводить адекватное сообщение и завершать работу функции

function setAlarm(time) {
  if (!time.match(/^\d{2}:\d{2}:\d{2}$/)) {
    console.error("Неверный формат времени. Используйте формат HH:mm:ss.");
    return;
  }

  const alarmTime = new Date().setHours(...time.split(":"));
  const currentTime = new Date();

  if (alarmTime <= currentTime) {
    console.log("Время для будильника прошло.");
  } else {
    const timeDifference = alarmTime - currentTime;
    const hours = Math.floor(timeDifference / 3600000);
    const minutes = Math.floor((timeDifference % 3600000) / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);

    console.log(
      `Будильник установлен на ${hours} часов ${minutes} минут ${seconds} секунд.`
    );
    setTimeout(() => {
      console.log("Сработал будильник!");
    }, timeDifference);
  }
}

setAlarm("09:55:00");
