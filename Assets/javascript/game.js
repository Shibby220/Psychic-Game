let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"]

document.onkeyup = function(event) {
    let userChoice = event.key;
    let cpuChoice = letters[Math.floor(Math.random() * letters.length)];
    let guessesLeft = document.getElementById("guessesLeft");

    
    if (userChoice === cpuChoice){
        document.getElementById("wins").innerText++;
    } else {
        document.getElementById("losses").innerText++;
    }

    if (guessesLeft.innerText == 1) {
        location.reload();
    }

    document.getElementById("guessesLeft").innerText--;

    let g = document.getElementById("guessesSoFar");

    let preValue = g.innerText;

    g.innerText = preValue + " " + userChoice;



    console.log(userChoice);
    console.log(cpuChoice);
    console.log(guessesLeft);
    


}