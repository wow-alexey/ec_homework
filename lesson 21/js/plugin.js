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







//this Задачи №2:

//Задача 1
//	getList() - выведет undefined так как не указанно в контексте чего вызывается этот метод;
//	users.getList = getList - выведет тело функции так как не стоят скобки после getList:
//	users.getList() - в объект users добавляется функция/метод getList() и выполняется, то-есть выдает ['Abraham', 'James', 'John', 'Steven']; 
//	getList.call(users) - выведет ['Abraham', 'James', 'John', 'Steven'], так как в контексте users вызыввается функция getList;

//Задача 2
const goods = {
	price: 15,
	amount: 40,
	getPrice: function function_name () {
		return this.price * this.amount;
	}
}
console.log(goods.getPrice())

//Задача 3
const goods2 = {
	price: 15,
	amount: 40,
	getPrice: function function_name () {
		return this.price * this.amount;
	}
},
details = {
	price: 23,
	amount: 50,
}
console.log(goods2.getPrice.call(details));

//Задача 4
let sizes = {
	width: 5,
	height: 10,
}
getSquare = function (){
	return this.width * this.height;
}
console.log(getSquare.call(sizes));

//Задача 5
let numbers = [4, 12, 0, 10, -2, 4];
console.log(Math.min.apply(null, numbers));

//Задача 6
const element = {
	height: '15px',
	marginTop: '5px',
	marginBottom: '5px',
	getFullHeight: function () {
		return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
	}
}
const block = {
	height: '5px',
	marginTop: '3px',
	marginBottom: '3px',
}
console.log(element.getFullHeight());
console.log(element.getFullHeight.call(block));

//Задача 7
let element1 = {
	height: 25,
	getHeight: function (){
		return this.height;
	}
};
let getElementHeight = element1.getHeight.bind(element1);
console.log(getElementHeight());





//Лексическое окружение: задачи:

/////////////////////////////////////////Задача 1
// console.log(getBigName(userName));
// function getBigName(name) {
// 	name = name + '';
// 	return name.toUpperCase();
// }
// var userName = 'Ivan';

//	Такой код выдаст UNDEFINED так как в его лексическом окружении еще нет какого-то конкретного "name";

/////////////////////////////////////////Задача 2
// function test () {
// 	var name = 'Vasiliy';
// 	return getBigName(userName);
// }
// function getBigName (name) {
// 	name = name + "";
// 	return name.toUpperCase();
// }

// var userName = 'Ivan';
// console.log(test());

// Вернет IVAN так как функция test возвращает(return) функцию getBigName;

/////////////////////////////////////////Задача 3
// var food = 'cucumber';

// (function () {
// 	var food = 'bread';
// 	getFood();
// })();

// function getFood() {
// 	console.log(food);
// }

// Вернет cucumber в приоритете переменная food которая не находится в функции;


//Замыкания. Задачи:
/////////////////////////////////////////Задача 1
// var dollar,
// 	getDollar;
// (function(){
// 	var dollar = 0;
// 	getDollar = function () {
// 		return dollar;
// 	}	
// 	}());	
// dollar = 30;
// console.log(getDollar());

//	Вернет 0 так как функция getDollar была создана в том окружении  котром переменная dollar = 0;


/////////////////////////////////////////Задача 2
// var greet = 'Hello';
// (function(){
// 	var text = " World";
// 	console.log(greet + text);
// }());
// console.log(greet + text);

//	Внутри функции выдаст Hello World так как перемнную greet, функция(анонимная самовызывающаяся функция) 
//	позаимствовала извне. А во втором вызове выдаст ошибку 
//	так как функция в которой есть text является анонимной. 

/////////////////////////////////////////Задача 3
var minus = function (valueOne) {
	var firstNumber = valueOne || 0;
	return function (valueTwo) {
		var secondNumber = valueTwo || 0;
		console.log(firstNumber - secondNumber);
	}
}
minus(10)();

/////////////////////////////////////////Задача 4


/////////////////////////////////////////Задача 5


/////////////////////////////////////////Задача 6