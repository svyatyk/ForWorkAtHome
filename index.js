// 1 - дз
'using script';
let NumberOfFilms = prompt("Скільки фільмів ви вже подивилися","");
const personalm = {
    count : NumberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}
let a = prompt("один із останніх переглянутих фільмів ","");
let b = prompt("наскільки оціните його ","");
let c = prompt("один із останніх переглянутих фільмів ","");
let d = prompt("наскільки оціните його ","");
personalm.movies[a]=b;
personalm.movies[c]=d;


console.log(personalm.movies);
//2  дз
"use strict";
let admin;
let AdminName = 'Іван';
admin = AdminName;
alert(admin);

let CityStockholm;
NameOfUserWebsite;

//3 - дз 

//"use strict";
//let num = 3;
//let element;
//element = "body";
//alert(num);
//window.alert(element);
//a = 15;
//console.log(a);
//const a = 3000;
//const b = 5000;
//console.log('розміри авто $ {a} на ')
// let userName= "john";
// let numberUserName = 25;
// numberUserName = 25 - 1; 
// console.log(numberUserName);
// console.log(userName);
// let NumberOfFilms = prompt("Скільки фільмів ви вже подивилися","");
// const personalm = {
//     count : NumberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false
// }
// let a = prompt("один із останніх переглянутих фільмів ","");
// let b = prompt("наскільки оціните його ","");
// let c = prompt("один із останніх переглянутих фільмів ","");
// let d = prompt("наскільки оціните його ","");
// personalm.movies[a]=b;
// personalm.movies[c]=d;
// personalm.movies.gg=b;
// personalm.movies.dd=a;
// console.log(typeof(personalm.movies.c));
// console.log(typeof(personalm.movies.a));
// console.log(typeof(personalm.movies.gg));
// console.log(typeof(personalm.movies.dd));
// const burger = true ;
// const cola = false ;
// const a = 1;
// const b = 2;
// if ( burger || cola )
// {
//     console.log(true);
// }
// else {
//        console.log(false);
// }

// if (a<b && burger==cola)
// {
//   console.log(true);
// }
// else 
// {
//     console.log(false);
// }



// 4 - дз 
//1-завдання
// let checkForParity = prompt("Введіть число яке ви хочите перевірити на парність ","");
// if ( checkForParity % 2 == 0){
//   console.log(" Ваше число парне ");
// }
// else{
//   console.log(" ваше число непарне");
// } ;
// //2 - завдання 
// let firstValue = +prompt("Введіть перше число","");
// let secondValue = +prompt("Введіть друге число","");
// function compere2number()
// {
//    if ( firstValue>secondValue){
//     console.log(firstValue);
//    }
//      else if(firstValue<secondValue){
//     console.log(secondValue);
//    }
//    else if (firstValue==secondValue){
//         console.log(`перше значення = другому значенню`);
//    }
//    else {
//        console.log("Ви ввели неправильний символ , введіть число ");
//     }
// }
// compere2number();
// //3 - завдання 
// let age = prompt("вкажіть свій вік ","");
// if ( age > 18)
// {
//   console.log( " ваш вік більше 18 ");
// }
// else if (age < 18)
// {
//   console.log( " ваш вік менше 18 ");
// }
// else if  (age ==18 )
// {
//   console.log("ваш вік 18")
// }
// else 
//     {
//         console.log("Ви ввели неправильний символ , введіть число ");
//   }

//
// let login = prompt("Введіть логін","");
// let pasword = prompt("Введіть пароль","");
// let yourLogin =(`your login = ${login}`);
// let yourPasword =(`your login = ${pasword}`);
// console.log(yourLogin);
// console.log(yourPasword);


//5 завдання
//  let dayOfWeek=+prompt("Введіть число ");
// switch (dayOfWeek)
// {
//   case 1 :{
//         console.log("Today is Monday");
//   }
//   break;
//   case 2 : {
//     console.log("Today is Tusday");
//   }
//   break;
//   case 3 : {
//     console.log("Today is Wetnesday");
//   }
//   break;
//   case 4 : {
//     console.log("Today is Thursday");
//   }
//   break;
//   case 5 : {
//     console.log("Today is Friday");
//   }
//   break;
//   case 6 : {
//     console.log("Today is Satursday");
//   }
//   break;
//   case 7 : {
//     console.log("Today is Sanday");
//   }
//   break;
//   default :{
//     console.log("Ви некоректне значення");
//   }
//   break;
// };