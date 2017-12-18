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
  		console.log("and " this.name + "'s health is now " + this.health);
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
  		console.log("and " this.name + "'s health is now " + this.health);
  	},
  	yawn: function () {
  		console.log(this.name + " let out a yawn... Yaaaaaaawn");
  		this.restedness -= 1;
  		console.log(this.name + "'s restedness is now " + this.restedness);
  	},
}