var lettersWord =["F", "O", "X", "F"];
var guessedLetters = ["_", "_", "_", "_"];
var counter = 0;
var reward = 0;

function guessLetter(l) {
    var prize = getRandomInt(1, 100);
    var num = 0;
    console.log("The prize for this round is " + prize);
    for (var i = 0; i < lettersWord.length; i++) {
        if (l == lettersWord[i] && guessedLetters[i] == "_") {
            guessedLetters[i] = l;
            console.log("Congratulations! You found a new letter!");
            num ++;
            counter++;
            }
        }
    if (num === 0) {
        reward -= prize;
    } else {
        reward += (prize * num);
    }
    console.log(guessedLetters);
    console.log("Your reward is " + reward);
    if (counter == lettersWord.length){
        console.log("You won!");
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

guessLetter("F");
guessLetter("B");
guessLetter("B");