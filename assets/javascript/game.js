$(document).ready(function(){

//Global Var

var randomNumber;
var wins = 0;
var Losses = 0;
var userScore = 0;
var game;

var num1 = Math.floor(Math.random() * 12 + 1)
var num2 = Math.floor(Math.random() * 12 + 1)
var num3 = Math.floor(Math.random() * 12 + 1)
var num4 = Math.floor(Math.random() * 12 + 1)




// write function to select a random number between 20 - 99.

function randomNumber() {
   return Math.floor(Math.random() * 99) + 20;   
}
let num = randomNumber();
console.log(num); 

// display random number on web page
$('.randomNumGen').text(num);

//create an onClick function for the buttons


// write function to select a random number for each button

function game(){       
    num1 = Math.floor(Math.random() * 12 + 1);
    num2 = Math.floor(Math.random() * 12 + 1);
    num3 = Math.floor(Math.random() * 12 + 1);
    num4 = Math.floor(Math.random() * 12 + 1);
    userScore = 0;   
}
let start = game()
console.log(num1, num2, num3, num4);
$('.totalScore').text(userScore);


$('captain0').on('click', function(){
    userScore = userScore + num1;
    
    $('totalScore').text(userScore);
    console.log("userScore = " + userScore);

    if(userScore === random){
        win();
    }
    else if (userScore > random){
        lose()
    }    
})

$('captain1').on('click', function(){
    userScore = userScore + num1;
    
    $('totalScore').text(userScore);
    console.log("userScore = " + userScore);

    if(userScore === random){
        win();
    }
    else if (userScore > random){
        lose()
    }    
})

$('captain2').on('click', function(){
    userScore = userScore + num1;
    
    $('totalScore').text(userScore);
    console.log("userScore = " + userScore);

    if(userScore === random){
        win();
    }
    else if (userScore > random){
        lose()
    }    
})

$('captain3').on('click', function(){
    userScore = userScore + num1;
    
    $('totalScore').text(userScore);
    console.log("userScore = " + userScore);

    if(userScore === random){
        win();
    }
    else if (userScore > random){
        lose()
    }  
})

        

    

   


// reset random number after win or loss




// write function to display the total score for buttons selected
   




// display wins or losses
   function win(){
       wins++;
       $('#win').text(wins);
       reset()
   }
   function lose() {
       losses++;
       $('#loss').text(losses);
       reset()
   }




// end game and reset




})