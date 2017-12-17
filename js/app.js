let clicker = {
	clickCount: 0,
	click () {
		this.clickCount += 1;
		console.log(this.clickCount);
	}
}

clicker.click();


let myInformation = {
	name: "Jackson",
	age: 24,
	funFact: "I was born in Australia",
	anotherYear: function () {
		return this.age += 1
	},
	agePlus: function () {
		return this.age + 10
	},
	newName: function (string) {
		return this.name = string;
	},
	statement: function () {
		console.log("Hello, my name is " + this.name + " and I am " + this.age + ". Here is one fun fact about me. " + this.funFact + ". In ten years I will be " + this.agePlus());
	},
}

// console.log(myInformation.agePlus());

myInformation.anotherYear();

myInformation.newName("Rumpelstiltskin");

console.log(myInformation);

let greeter = {
	hello: function (name) {
		console.log("Oh hello there, " + name);
	},
	goodbye: function (name) {
		console.log("See you later " + name);
	},
	whoAreYou: function(name) {
		console.log("Oh right! " + name + " how could I forget");
	}
}

greeter.hello("Matt");

greeter.goodbye("Matt");

greeter.whoAreYou("Matt");

let stringCollector = {
	collection: [],
	collect: function (str) {
		let splitter = str.split(" ");
		let reverse = splitter.reverse();
		this.collection.push(reverse);
		console.log(this.collection);
	}
}

stringCollector.collect("Hello I hope all is well")


let atm = {
	totalCash: 140,
	dispenseTwenties: function(num) {
		this.totalCash = this.totalCash - (20 * num)
		if (this.totalCash >= 0) {
			console.log(20 * num);
		} else if (this.totalCash < 0) {
			return null;
		}
	}
}

let leonardo = {
	name: "Leonardo",
	color: "blue",
	weapon: "Katana",
	pizzaEaten: false,
	eatPizza: function () {
		if (this.pizzaEaten === false) {
			console.log("Leonardo is eating pizza.");
			return this.pizzaEaten = true;
		} else if (this.pizzaEaten === true) {
			console.log("Leonardo has already eaten pizza.");
			return this.pizzaEaten = false;
		}
	}
}