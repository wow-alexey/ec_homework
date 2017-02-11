//Доступ к DOM: задачи
var one = document.getElementsByTagName('head');
console.log(one);

var two = document.getElementsByTagName('body');
console.log(two);

var three = document.body.children;
console.log(three);

var fourA = document.body.firstElementChild;
console.log(fourA);

var fourB =  fourA.children;
for (var i = 1, max = fourB.length-1; i < max; i++){
	console.log(fourB[i]);
}