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


const sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];

// access all the sheepCount values and add them up

for (let i = 0; i < sheepShearers.length; i++) {
	//set variable to hold the sheepCount values
	let count = 0;
	count = count + sheepShearers[i].sheepCount;
	// count.push(sheepShearers[i].sheepCount);
	console.log(count);
}
