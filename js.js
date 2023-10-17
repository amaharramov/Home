'use strict';

//Регистрация (сложность 3)

// alert('Registration');
// let login = prompt('Enter your login for registration');
// let pass = prompt('Enter your password for registration');
// alert('Authorization');

// while (true) {
//   const newLogin = prompt('Enter your login for authorization');
//   const newPass = prompt('Enter your password for authorization');
//   console.log(newLogin, newPass);
//   if (login === newLogin && pass === newPass) {
//     alert('Valid login and password');
//     break;
//   } else {
//     alert('Incorrect data');
//   }
// }

//Регистрация (сложность 4)

// alert('Registration');
// let login = prompt('Enter your login for registration');
// let pass = prompt('Enter your password for registration');
// let limit = 3;
// let attempts = 0;

// while (true) {
// alert('Authorization');
//   const newLogin = prompt('Enter your login for authorization');
//   const newPass = prompt('Enter your password for authorization');
//   let createNewUser;
//   console.log(newLogin, newPass);
//   if (login === newLogin && pass === newPass) {
//     alert('Valid login and password');
//     break;
//   } else {
//     alert('Incorrect data');
//     attempts++;
//   }
//   if (attempts === limit) {
//     createNewUser = confirm('Would you like to create a new user?');
//     if (createNewUser) {
//       alert('Registration');
//       login = prompt('Enter your login for registration');
//       pass = prompt('Enter your password for registration');
//       attempts = 0;
//     } else {
//       attempts = 0;
//       alert('Type correct login and password');
//     }
//   }
// }

//Регистрация (сложность 5)

alert('Registration');
let login = prompt('Enter your login for registration');
let pass = prompt('Enter your password for registration');
let limit = 3;
let attempts = 0;

while (true) {
  alert('Authorization');
  const newLogin = prompt('Enter your login for authorization');
  const newPass = prompt('Enter your password for authorization');
  let createNewUser;
  console.log(newLogin, newPass);
  if (login === newLogin && pass === newPass) {
    alert('Valid login and password');
    break;
  } else {
    alert('Incorrect data');
    attempts++;
  }
  if (attempts === limit) {
    createNewUser = confirm('Would you like to create a new user?');
    if (createNewUser) {
      alert('Registration');
      login = prompt('Enter your login for registration');
      pass = prompt('Enter your password for registration');
      attempts = 0;
    } else {
      while (true) {
        let resetPass = confirm(' Do you want to reset your password ?');
        if (resetPass) {
          let resetLogin = prompt('Enter your login to reset your password.');
          if (resetLogin === login) {
            alert('Password has been reseted');
            pass = prompt('Enter your NEW password');
            break;
          } else {
            alert("Login doesn't match");
            createNewUser = confirm('Would you like to create a new user?');
            if (createNewUser) {
              alert('Registration');
              login = prompt('Enter your login for registration');
              pass = prompt('Enter your password for registration');
              attempts = 0;
              break;
            } else {
              continue;
            }
          }
        }
      }
    }
  }
}
