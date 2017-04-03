//variables for wins/losses and total score values
//random number generator for total number to get
//random number generator for each crystal
var wins = 0;
var losses = 0;
var addition = 0;
var total = Math.floor((Math.random() * 120) + 19);
var crystalOne = Math.floor((Math.random() * 12) + 1);
var crystalTwo = Math.floor((Math.random() * 12) + 1);
var crystalThree = Math.floor((Math.random() * 12) + 1);
var crystalFour = Math.floor((Math.random() * 12) + 1);

//function to update counters
var updateAddition = function() {
    $('.addition').empty();
    $('.addition').append(addition);
    $('#wins').empty();
    $('#wins').append(wins);
    $('#losses').empty();
    $('#losses').append(losses);
}

//function to restart game for each round
var restart = function() {
    addition = 0;
    total = Math.floor((Math.random() * 100) + 19);
    $('.total').empty();
    $('.total').append(total);
    crystalOne = Math.floor((Math.random() * 12) + 1);
    crystalTwo = Math.floor((Math.random() * 12) + 1);
    crystalThree = Math.floor((Math.random() * 12) + 1);
    crystalFour = Math.floor((Math.random() * 12) + 1);
    updateAddition();
}

//function for placing values in wins/losses/total sections
var logic = function() {
    if (addition == total) {
        wins = wins + 1;
        restart();
    } else if (addition > total) {
        losses = losses + 1;
        restart();
    } else {
        updateAddition();
    }

}

//appending the values to the html classes
$('.total').append(total);
$('.addition').append(addition);

//on click functions to assign the random number generated to each crystal
$(document).ready(function() {
    $('#crystal-one').click(function() {
        addition = addition + crystalOne;
        logic();
    })
    $('#crystal-two').click(function() {
        addition = addition + crystalTwo;
        logic();
    })
    $('#crystal-three').click(function() {
        addition = addition + crystalThree;
        logic();
    })
    $('#crystal-four').click(function() {
        addition = addition + crystalFour;
        logic();
    })
});