// Конструкторы. Задачи:
// Задача 1
function Car (carType, carAge) {
	this.carType = carType;
	this.carAge = carAge;
	this.getType = function () {
		return carType.toUpperCase().charAt(0) + carType.substr(1);
	}
	this.getAge = function () {
		const date = new Date;
		return date.getFullYear() - carAge;
	}
}

var lexus = new Car ('lexus', 40);
console.log(lexus.getType());
console.log(lexus.getAge());

// Задача 2
function Cipher (anyStr) {
	 this.anyStr = anyStr.split('') .reverse() .join('');
	 this.original = function () {
	 	return anyStr;
	 }
	 this.fake = function () {
	 	return anyStr.split('') .reverse() .join('');
	 }
	 this.delete = function () {
	 	return anyStr = '';
	 }
}
var string = new Cipher ('hello world!');

console.log(string);
console.log(string.original());
console.log(string.fake());
console.log(string.delete());

// Задача 3
function WorkWithString (string) {
	this.string = string;

	this.length = function () {
		return string.length;
	}
	this.toString = function () {
		return string.toString();
	}
	this.number = function () {
		return string.toString().length;
	}
}
var str = new WorkWithString ('test');

console.log(str);
console.log(str.string);

console.log(str.length());
console.log(str.toString());
console.log(str.number());




// ООП. Задачи:
// Задача 1
function Planet (name) {
	this.name = name;
	this.getName = function () {
		return 'Planet name is ' + this.name;
	}
}
function PlanetWithSatellite (name, satelliteName) {
	this.satelliteName = satelliteName;
	Planet.apply(this, arguments);
	this.getName = function () {
		return 'Planet name is ' + this.name + '. ' + 'The satellite is ' + this.satelliteName;
	}
}
var earth = new PlanetWithSatellite('Earth', 'Moon')
console.log(earth.getName());

// Задача 2

// Задача 3

// Задача 4

// Задача 5