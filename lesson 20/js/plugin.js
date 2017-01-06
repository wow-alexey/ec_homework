//Функции. Задачи:

//Задача 1
function multiply() {
	var res = 1;
	var max = arguments.length;
	for (var i = 0 ; i < max; i++){
		res *= arguments[i];
	}
	console.log(res);
	return res;
}
multiply(1,2,3);

//Задача 2
function factorial (number) {
    var n = parseInt(number);
    for (var i = 1, res = 1; i <= n; i++) {
        res *= i;
    }
    console.log(res);
    return res;
}
factorial(10);

//Задача 3
function string(smth) {
	smth = smth.split('');
	smth = smth.reverse();
	smth = smth.join('');
	console.log(smth);
	return smth;
}
string('test');

//Задача 4
function changeStr(str, func){
	var newStr = '';

	for (var i = 0; i < str.length; i++){
		newStr += func(str[i]);
	}
	return newStr;
}

function handler(letter) {
	var n = letter.charCodeAt();
	return n + ' ';
}
var res = changeStr('hello', handler);
console.log(res);

//Задача 5
// function changeStr(str, func) {
// 	var newStr = '';

// 	for (var i = 0; i < str.length; i++){
// 		newStr += func(str[i]);
// 		console.log(func(str[i]));
// 	}
// 	return newStr;
// }

// function handler(letter) {
// 	var n = letter;
// 	return n;
// }
// changeStr('test', handler);

//Задача 6
function ArrAndCall(arr, call) {
    var newStr = '';
    for (var i = 0; i < arr.length; i++){
        newStr += call(arr[i]);
    }
    return "New value: " + newStr;
}

//6(1)
function firstFunc(arrSymbol){
    var upperLetter;
    upperLetter = arrSymbol.charAt(0) .toUpperCase() + arrSymbol.substr(1);
    return upperLetter;
}
console.log(ArrAndCall(['my', 'name', 'is', 'Trinity'], firstFunc));

//6(2)
function secondFunc(arrSymbol) {
    var mult = 10;
    mult = arrSymbol * 10 + ', ';
    return mult;
}
console.log(ArrAndCall([10, 20, 30], secondFunc));

//6(3)
function thirdFunc(arrSymbol) {
    var mainInfo;
    mainInfo = arrSymbol.name + ' is ' + arrSymbol.age + ', ';
    return mainInfo;
}
console.log(ArrAndCall([{age:45, name:'Jhon'},{age:20, name:'Aaron'}], thirdFunc));

//6(4)
function fourthFunc(arrSymbol) {
    var reverse;
    reverse = arrSymbol.split('') .reverse() .join('') + ', ';
    return reverse;
}
console.log(ArrAndCall(['abc', '123'], fourthFunc));

//6(5)
function fifthFunc(arrSymbol) {
    var numPlusNum = arrSymbol + 5 + ', ';
    return numPlusNum;
}
console.log(ArrAndCall([1, 2, 3], fifthFunc));







//Массивы. Задачи:

//Задача 1
// var str = 'bcdaeflmjgkhi';
// var newStr = str.split('')
// 				.sort()
// 				.reverse()
// 				.join('');
// console.log(newStr);

//Задача 2
// function arrSort(prev, next){
// 	if (prev < next) return -1;
// 	if (prev > next) return 1;
// }

// var arr = [2, 4, 7, 1, -2, 10, -9];
// var newArr = arr.sort(arrSort)
// 				.reverse(); //или, не используя reverse, можно поменять return на -1 и 1, соответсвенно.
// console.log(newArr);

//Задача 3
// function getNewArray(array, first, last){
// 	return array.splice(first, last - 1);
// }
// console.log(getNewArray(['a','b','c','d','e','f'], 2, 4));

//Задача 4
// var arr = ['one', 2, 'three', 4];
// var conc = arr.concat(arr);
// console.log(conc);

//Задача 5
// var arr = [1,2,3,4,5];
// arr.splice(2,2);
// console.log(arr);

//Задача 6
// var arr = [1,2,3,4,5];
// arr[2] = 'three';
// arr[3] = 'four';
// console.log(arr);

//Задача 7
// var arr = ['I', 'am', 'an', 'array'];
// arr.splice(3, 0,'awesome');
// console.log(arr);

//Задача 8
// function arrSort(prev, next){
// 	return prev.length - next.length;
// }
// var arrComb = [[14, 45], [1], ['a', 'b', 'c']];
// console.log(arrComb.sort(arrSort));

//Задача 9
// var arr = ['Hello', 'World', '!', 1, 2, 3]
// var sli = arr.slice();
// var conc = arr.concat(sli);
// console.log(conc);

//Задача 10
// function arrSort(prev, next){
// 	if (prev.info.cores < next.info.cores) return -1;
// 	if (prev.info.cores > next.info.cores) return 1;
// }
// var arr = [	{cpu: 'intel', info:{cores:2, cache: 2}},
// 			{cpu: 'intel', info:{cores:4, cache: 4}},
// 			{cpu: 'amd', info:{cores:1, cache: 1}},
// 			{cpu: 'intel', info:{cores:3, cache: 2}},
// 			{cpu: 'amd', info:{cores:4, cache: 2}}];
// var newArr = arr.sort(arrSort);
// console.log(newArr);

//Задача 11
function arrSort(prev, next){
	if (prev.price < next.price) return -1;
	if (prev.price > next.price) return 1;
}
function filterCollection (array, priceMin, priceMax){
	var resPrice = products.sort(arrSort);
	var res = [];
	i = 0;
    while (i < products.length) {
    	if ((priceMin <= resPrice[i].price) && (resPrice[i].price <= priceMax)) {
    		res[i] = products[i];
    	}
        i++;
    }
    return  res;
}
var products = [
    {title:'prod1', price:5.2}, {title:'prod2', price:0.18},
    {title:'prod3', price:15}, {title:'prod4', price:25},
    {title:'prod5', price:18.9}, {title:'prod6', price:8},
    {title:'prod7', price:19}, {title:'prod8', price:63}
];
console.log(filterCollection(products, 15, 30));





//Дата и время. Задачи:

//Задача 1
function randomYear(year) {
    const date = new Date(year, 0, 1);
    var options = {
        weekday: 'long'
    };
    return date.toLocaleString('ru', options);
}
console.log(randomYear(2016));

//Задача 2
function stringYear(stringDate){
	var options = {
		weekday: 'long',
	}
	var resDate = stringDate.split('.') .reverse() .join('.');
	const date = new Date(resDate);
	return date.toLocaleString('ru', options);
}
console.log(stringYear('29.03.1985'));

//Задача 3
function date(year, month, day){
	const nowDate = Date.now();
	const userDate = new Date(year, month, day);
	const specialDate = userDate.getTime();	
	var options = {
		year: 'numeric',
  		month: 'long',
  		day: 'numeric',
	}
	var res = nowDate - specialDate;
	return Math.round(res/1000/60/60/24/7) + ' недели прошло с ' + userDate.toLocaleString('ru', options);
}
console.log(date(2016, 0, 1));
