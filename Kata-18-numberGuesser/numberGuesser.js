let prompt = require("prompt-sync")();
let number = 0; let guesses = [];

number = Math.floor(Math.random() * 100);

let answer = Number(prompt("Guess a number: "));

function alreadyGuessed(number, array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true;
    }
  } return false;
}

let j = 'a'; for (i = 0; i !== j; i++) {
  if (alreadyGuessed(answer, guesses)) {
    console.log("Already Guessed!");
    answer = Number(prompt("Guess a number: "));
  } else if (answer < number) {
    console.log("Too Low!"); guesses.push(answer);
    answer = Number(prompt("Guess a number: "));
  } else if (answer > number) {
    console.log("Too High!"); guesses.push(answer);
    answer = Number(prompt("Guess a number: "));
  } else if (answer === number) {
    console.log(guesses.push(answer));
    if (guesses.length > 1) {
      console.log("You got it! You took " + guesses.length + " attempts!");
    } else {
      console.log("You got it! You took " + guesses.length + " attempt!");
    }
    break;
  } else if (!Number(answer)) {
    console.log("Not a number! Try again!");
    answer = Number(prompt("Guess a number: "));
  }
}