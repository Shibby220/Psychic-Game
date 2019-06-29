let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"]

let alreadyGuessed = []
let cpuChoice = randomLetter();

function randomLetter(){
    return letters[Math.floor(Math.random() * letters.length)];
}

document.onkeyup = function(event) {
    let userChoice = event.key.toLowerCase();
    let guessesLeft = document.getElementById("guessesLeft");
    alreadyGuessed.push(userChoice);
    let guesses = document.getElementById("guessesSoFar");
    let preValue = guesses.innerText;
    guesses.innerText = preValue + " " + userChoice;

    if (userChoice === cpuChoice){
        document.getElementById("wins").innerText++;
        guessesLeft.innerText = 10;
        cpuChoice = randomLetter();
        document.getElementById("guessesSoFar").innerText = "";
    }  

    if (guessesLeft.innerText == 1) {
        document.getElementById("losses").innerText++;
        guessesLeft.innerText = 9;
        cpuChoice = randomLetter();
        document.getElementById("guessesSoFar").innerText = "";

    } else {
        document.getElementById("guessesLeft").innerText--;
    }    

    console.log(userChoice);
    console.log(cpuChoice);
    
}