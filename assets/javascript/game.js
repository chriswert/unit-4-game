$(document).ready(function(){

//Global Var

var randomNumber;
var winLosses;
var kirk;
var picard;
var sisko;
var janeway;
var score;
var totalScore;

// write function to select a random number between 20 - 135.

function randomNumber() {
   return Math.floor(Mth.random() * 115) + 20;   
}
console.log();

// display random number on web page




// write function to select a random number for each button

function randomNumCaptains() {
    return {
        kirk: {
            points: Math.floor(Math.random() * 15) + 1,
            imageUrl: "assets/images/kirk.jpg"
        },
        picard: {
            points: Math.floor(Math.random() * 15) + 1,
            imageUrl: "assets/images/picard.jpg"
        },
        sisko: {
            points: Math.floor(Math.random() * 15) + 1,
            imageUrl: "assets/images/sisko.jpg"
        },
        janeway: {
            points: Math.floor(Math.random() * 15) + 1,
            imageUrl: "assets/images/janeway.jpg"
        }
    };
    console.log();
}

// reset random number after win or loss




// write function to display the total score for buttons selected





// display wins or losses




// end game and reset




})