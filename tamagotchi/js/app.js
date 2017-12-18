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
  	},
  	yawn: function () {
  		console.log(this.name + " let out a yawn... Yaaaaaaawn");
  	},
}