function printHighScores(){
//Need to fill

}

function ClearHighScores(){
//Need to fill
}

var ClearButton = document.getElementById("clear");
ClearButton.addEventListerner("click", ClearHighScores);

printHighScores();



//-------------------------- Time tracker-------------------------

var currentQuestionIndex = 0;
var time = Questions.length * 15;
var timerID;

// HTML element
var questionsElement = document.getElementById("questions");
var timerElement = document.getElementById("time");
var choicesElement = document.getElementById ("choices");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");
var initialElement = document.getElementById("intials");
var feedBackElement = documnet.getElementById("feedback");

// Sound

var sfxCorrect = new Audio("assets\sfx\correct.wav");
var sfxIncorrect = new Audio("assets\sfx\incorrect.wav");

function questionClick(){
    alert("question was clicked")
}
