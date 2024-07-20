// script.js
// Quote Rotator
const quotes = [
	"Believe you can and you're halfway there. - Theodore Roosevelt",
	"The only way to do great work is to love what you do. - Steve Jobs",
	"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
	"Don't watch the clock; do what it does. Keep going. - Sam Levenson",
	"Keep your eyes on the stars, and your feet on the ground. - Theodore Roosevelt"
];

let currentQuote = 0;

function rotateQuote() {
	document.getElementById("quote").innerHTML = quotes[currentQuote];
	currentQuote = (currentQuote + 1) % quotes.length;
}

setInterval(rotateQuote, 5000); // rotate quote every 5 seconds

// Joke Generator
const jokes = [
	"Why don't scientists trust atoms? Because they make up everything!",
	"Why don't eggs tell jokes? They'd crack each other up!",
	"Why did the tomato turn red? Because it saw the salad dressing!",
	"What do you call a fake noodle? An impasta!",
	"Why did the scarecrow win an award? Because he was outstanding in his field!"
];

let currentJoke = 0;

function generateJoke() {
	document.getElementById("joke").innerHTML = jokes[currentJoke];
	currentJoke = (currentJoke + 1) % jokes.length;
}

setInterval(generateJoke, 10000); // generate joke every 10 seconds