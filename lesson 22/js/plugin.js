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
function Building (name, floor) {
	this.name = name;
	this.floor = floor;
	this.getFloorNumber = function () {
		return this.floor;
	}
	this.setFloorNumber = function (value) {
		this.floor = value;
		return this.floor
	}
}

var home = new Building('myHome', 42);
console.log(home);
console.log(home.getFloorNumber());
console.log(home.setFloorNumber(33));

function Hostel (name, floor, flats){
	this.flats = flats;
	Building.apply(this, arguments);
	this.getFloorNumber = function () {
		return	{floor: this.floor,
				 NumberOfFlats: this.floor * this.flats};

	}	
};

var hostel = new Hostel('Hostel_of_KHIF', 5, 9);
console.log(hostel);
console.log(hostel.getFloorNumber());

function ShoppingMall (name, floor, stores){
	this.stores = stores;
	Building.apply(this, arguments);
	this.getFloorNumber = function () {
		return	{floor: this.floor,
				 NumberOfStores: this.floor * this.stores};

	}	

};

var shoppingMall = new ShoppingMall('Karavan', 3, 24);
console.log(shoppingMall);
console.log(shoppingMall.getFloorNumber());

// Задача 3
function Furnirure (name, price) {
	this.name = name;
	this.price = price;
}
Furnirure.prototype.getInfo = function () {
	// console.log(this)
	// var infoObj = {};
	// for (var key in this){
	// 	infoObj[key] = this[key];
	// 	console.log(key)
	// }
	// return infoObj
	return {name: this.name, 
			price: this.price};
}

// function OfficeFurniture(name, price) {
// 	Furnirure.apply(this, arguments);
// 	this.have_a_shredder = true;
// }
// OfficeFurniture.prototype = Object.create(Furnirure.prototype);


var officeFurniture = new Furnirure('ComputerTable', 444.9);
officeFurniture.have_a_shredder = true;
officeFurniture.getInfo = function(){
	var originalMethod = Furnirure.prototype.getInfo.call(this);
	originalMethod.have_a_shredder = true;
	console.log(originalMethod);
}

var homeFurniture = new Furnirure('Chair', 223.9);
homeFurniture.have_a_wheels = true;
homeFurniture.getInfo = function(){
	var originalMethod = Furnirure.prototype.getInfo.call(this);
	originalMethod.have_a_wheels = true;
	console.log(originalMethod);
}

console.log(officeFurniture.getInfo());
console.log(homeFurniture.getInfo());

// Задача 4
// function User (name, registration) {
// 	this.name = name;
// 	this.registration - registration;
// }
// User.prototype.getInfo = function () {
// 	return {name: this.name, 
// 			registration: this.registration};
// }


// Задача 5