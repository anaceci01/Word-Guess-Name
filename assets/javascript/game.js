$(document).ready(function () {



    var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var winsCount = 0;
    var lossesCount = 0;
    var guessRemaining = 12;
    var letterGuessed = [];
    document.onkeyup = function (event) {
        var userGuess = event.key;
        letterGuessed.push(letter.userGuess);

        var computerGuess = letter[Math.floor(Math.random() * letter.length)];
        console.log(computerGuess)

        if (userGuess === computerGuess) {
            winsCount++;
            guessRemaining = 11;
        }
        else {
         guessRemaining--; 
        }
        if (guessRemaining === 0 ) {
            lossesCount++;
            guessRemaining =10;
        }

        var html = "<h3>Guess what letter I'm thinking of:</h3>" +
        "<p>"

        document.getElementById("letterGuessed").innerHTML = userGuess;
        document.getElementById('wins').innerHTML = "" + winsCount;
        document.getElementById('losses').innerHTML = "" + lossesCount;
        document.getElementById('guessRemaining').innerHTML = "" + guessRemaining;
    
    }
    

});
