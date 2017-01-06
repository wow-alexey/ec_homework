//Условные операторы. Задачи:
// var x = 'hidden';

// if (x == 'hidden'){
//     console.log('visible');
// } else {
//     console.log('hidden');
// }

// x == 'hidden' ? console.log('visible') : console.log('hidden');


// var x = 0;

// if (x == 0){
//     console.log(x = 1);
// } else if (x < 0){
//     console.log('less then zero');
// } else if (x > 0){
//     console.log(x*=10);
// }

// x == 0 ? console.log(x = 1) :
//     x < 0 ? console.log('less then zero') :
//         x > 0 ? console.log(x*=10) : console.log('none');

//Switch...case. Задача:
// var a = 'block';
//
// switch (a){
//     case 'block' : console.log('block'); break;
//     case 'none' : console.log('none'); break;
//     case 'inline' : console.log('inline'); break;
//     default: console.log('other');
// }

//Задачи на циклы:
//Задание 1
// var str = 'i am in easycode' ;
// var newStr = '';
// for (var i = 0; i < str.length; i++){
//     if(str[i-1] == ' ' || i == 0){
//         newStr += str[i].toUpperCase();
//     } else {
//         newStr += str[i];
//     }
// }
// console.log(newStr);

//Задание 2
// var str = 'tseb eht ma i';
//
// for (var i = str.length ; i-- ; ){
//     console.log(str[i])
// }

//Задание 3
// function factorial(n){
//     var res = 1;
//     while(n) res *= n--;
//     return res;
// }
// console.log(factorial(10));

//Задание 4
// var x = 10,
//     i = 0,
//     comma= ' ',
//     newStr;
//// var xStr = 'Стичтаем до ' + x + 'и: ';

// while (i++ < x){
//     comma += i + ', ';
// }
// newStr = xStr + comma;
// newStr = newStr.substring(0, newStr.length - 2);
// console.log(newStr);

//Задание 5
// var str = 'JavaScript is a pretty good language';
// var newStr = ' ';
//
// for (var i = 0; i < str.length; i++){
//     if(str[i-1] == ' ' || i == 0){
//         newStr += str[i].toUpperCase();
//     } else if (str[i] == ' '){
//         newStr += str[i] = '';
//     }
//      else {
//         newStr += str[i];
//     }
// }
// delete newStr[' '];
// console.log(newStr);

//Задание 6
// for (var i = 0; i <= 15; i++) {
//
//     if (i % 2) {
//         console.log(i);
//     }
//
// }