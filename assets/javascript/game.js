var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var letters = [];
var guess = null;

var computerGuess = options[Math.floor(Math.random() * options.length)];

var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.guess = this.options[Math.floor(Math.random() * this.options.length)];
};

var updateGuesses = function() {
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + letters.join(', ');
};

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  letters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuesses();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  letters.push(userGuess);
  updateGuessesLeft();
  updateGuesses();

        if (guessesLeft > 0){
            if (userGuess == guess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Right on! You are a Psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Whoa...maybe you're not a Psychic after all... Wanna try again?");
            reset();
        }
};
