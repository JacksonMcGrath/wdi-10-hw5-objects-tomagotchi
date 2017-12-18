let tamagotchi1 = {
	name: "Chico",
  	creatureType: "Dragon",
  	foodInTummy: 10,
  	restedness: 10,
  	health: 10,
  	cry: function () {
  		console.log("Waaaaa");
  		this.foodInTummy -= 1;
  		console.log(this.name + "'s foodInTummy is now " + this.foodInTummy);
  	},
  	puke: function () {
  		console.log(this.name + " threw up... Blaaaauuugh!");
  		this.foodInTummy -= 1;
  		console.log(this.name + "'s foodInTummy is now " + this.foodInTummy);
  		this.health -= 1;
  		console.log("and " + this.name + "'s health is now " + this.health);
  	},
  	yawn: function () {
  		console.log(this.name + " let out a yawn... Yaaaaaaawn");
  		this.restedness -= 1;
  		console.log(this.name + "'s restedness is now " + this.restedness);
  	},
}

let tamagotchi2 = {
	name: "Nymeria",
  	creatureType: "Wolf",
  	foodInTummy: 10,
  	restedness: 10,
  	health: 10,
  	cry: function () {
  		console.log("Waaaaa");
  		this.foodInTummy -= 1;
  		console.log(this.name + "'s foodInTummy is now " + this.foodInTummy);
  	},
  	puke: function () {
  		console.log(this.name + " threw up... Blaaaauuugh!");
  		this.foodInTummy -= 1;
  		console.log(this.name + "'s foodInTummy is now " + this.foodInTummy);
  		this.health -= 1;
  		console.log("and " + this.name + "'s health is now " + this.health);
  	},
  	yawn: function () {
  		console.log(this.name + " let out a yawn... Yaaaaaaawn");
  		this.restedness -= 1;
  		console.log(this.name + "'s restedness is now " + this.restedness);
  	},
}

let player = {
	name: "Jackson",
	sayName: function () {
		console.log("Hello, my name is " + this.name);
	},
	feedTamagotchi: function () {
		console.log("You just fed " + tamagotchi1.name);
		tamagotchi1.foodInTummy += 1;
  		console.log(tamagotchi1.name + "'s foodInTummy is now " + tamagotchi1.foodInTummy);
  		console.log("You also just fed " + tamagotchi2.name);
		tamagotchi2.foodInTummy += 1;
  		console.log(tamagotchi2.name + "'s foodInTummy is now " + tamagotchi2.foodInTummy);
	}
}