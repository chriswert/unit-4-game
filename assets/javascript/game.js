$(document).ready(function(){

//Global Var

var randomNumber;
var win;
var Losses;
var score;




// write function to select a random number between 20 - 135.

function randomNumber() {
   return Math.floor(Math.random() * 115) + 20;   
}

let num = randomNumber();
console.log(num); 

// display random number on web page
$('.randomNumGen').text(num);

//create an onClick function for the buttons


// write function to select a random number for each button

for (var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 18) + 1;
    console.log(random)

    var captainButton = $(this);
    captainButton.attr({
        "data-random": random
    })
}

//function beginGame() {
   


// reset random number after win or loss




// write function to display the total score for buttons selected





// display wins or losses




// end game and reset




})