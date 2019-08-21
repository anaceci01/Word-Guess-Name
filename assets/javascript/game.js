var $ = function (id) {
    return document.getElementById(id);
}


var words = ["shark", "dolphin", "scubadiving", "snorkel", "whale", "fish"]
var wordChoice = Math.floor(Math.random()*5);
var answer = words[wordChoice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split ('');
var attemptsleft = 7;
var output = "";
var userLetter = "";






// Functions
var setup = function() {
    for (var i=0; i<answer.lenght; i++)
    display [i] = "_ ";
    output = output + display[i];
}
// document.getElementById("words").innerHTML = output;
 //output ="";   

 window.onload = function () {
     setup ();

 }