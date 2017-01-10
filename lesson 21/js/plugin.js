//this Задачи:

//Задача 1
const rectangle = {
	width: 10,
	height: 20,
	getSquare: function () {
		return this.width * this.height;
	}
}
console.log(rectangle.getSquare());

//Задача 2
const price = {
	price: 10,
	discount: '15%',
	getPrice: function () {
		return this.price;
	},
	getPriceWithDiscount: function () {
		var res = parseInt(this.discount)
		return (this.price * res)/100;
	}
}
console.log(price.getPriceWithDiscount());

//Задача 3
getUserName = function () {
	return this.name
}
const user = {
	name: 'Abraham',
	getName: getUserName,
}

console.log(user.getName());

//Задача 4
const skyScraper = {
	height: 10,
	newFloor: function () {
		return ++this.height;
	}
}
console.log(skyScraper.newFloor());
console.log(skyScraper.height);
console.log(skyScraper.newFloor());
console.log(skyScraper.height);

//Задача 5
const numerator = {
	value: 1,
	double: function () {
		this.value *= this.value;
		return this;
	},
	plusOne: function () {
		++this.value;
		return this;
	},
	minusOne: function () {
		--this.value
		return this;
	},
}
console.log(numerator.double().plusOne().plusOne().minusOne());
console.log(numerator.value);

//Задача 6
//	В этой задаче есть два объекта (user и otherUser)
//	в которых есть свойство (name). Во втором объекте 
//	есть метод (getName), который возвращает свойство name.
//	В первом случае пытаются вызвать getName(как свойство) в объекте user и
//	получают undefined так как в первом объекте не существует такого свойства.
//	Дальше первому объекту добавляют/присваивают метод второго объекта.
//	Вызывают метод у первогоы объекта - получают Abraham.
//	Вызывают метод у второго объекта - получают John.

