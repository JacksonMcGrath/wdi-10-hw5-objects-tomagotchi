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