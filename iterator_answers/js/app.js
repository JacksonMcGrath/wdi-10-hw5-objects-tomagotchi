const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

// let capitalized = [];
//capitalize each word and console.log them
words.forEach((str) => {
	// set a new variable to hold the capitalized strings
	let capitalized = str.toUpperCase()
	console.log(capitalized);
});

const more_words = ["Joe", "Overeats", "Eggs"];

more_words.map((str) => {
	console.log(str.charAt(0));
})

const arr = [8, 8, 8, 8, 8, 8, 8, 8];

//set a variable to equal the result of the .reduce on arr
let reducedIt = arr.reduce((prev,cur) => prev + cur);

console.log(reducedIt);