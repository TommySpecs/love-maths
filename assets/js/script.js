//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listener to them

document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
button.addEventListener("click", function(){
if (this.getAttribute("data-type") === "submit") {
    alert("You Clicked Submit");
} else{
    let gameType = this,getAttribute("data-type");
    alert('You Clicked $(gameType)');
}
})
}
})

/**
 * The main game "loop", called when the scrip: is first loaded
 * and after the user 's answer has been processed
 */
function runGame() {
    //creates two random numbers between 1 and 25
    let num1 = Math.floor(math.random() *25) + 1;
    let num2 = Math.floor(math.random() * 25) + 1;
}


function checkAnswer() {


}

function calculateCorrectAnswer() {
  
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}