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
var initialElement = document.getElementById("initials");
var feedBackElement = document.getElementById("feedback");
var titleElement = document.getElementById("question-title");
// Sound

var sfxCorrect = new Audio("assets/sfx/correct.wav");
var sfxIncorrect = new Audio("assets/sfx/incorrect.wav");


function questionClick() {
    if(this.value !== Questions[currentQuestionIndex].Answer) {
        time -= 15;

        if(time <0) {
            time = 0;
        }
        timerElement.textContent = time;

        feedBackElement.textContent = "wrong"    
    } else {
        sfxCorrect.play();
        feedBackElement.textContent = "Correct!";
    }

    feedBackElement.setAttribute("class", "feedback");
    setTimeout(function(){
        feedBackElement.setAttribute("Class", "Feedback hide")
    },1000);

    currentQuestionIndex++;

    if(currentQuestionIndex === Questions.length){
        quizEnd()
    }else {
        getQuestion();
    }
}

function getQuestion(){
    var currentQuestions = Questions[currentQuestionIndex];
    console.log(currentQuestions,Questions[currentQuestionIndex]);

    

    titleElement.textContent = currentQuestions.titles;

    choicesElement.innerHTML = "";

    currentQuestions.Choices.forEach(function(choice, index) {
        var choiceButton = document.createElement("button");

        choiceButton.setAttribute("Class","choice");
        choiceButton.setAttribute("value",choice);

        choiceButton.textContent = `${index + 1}. ${choice}`

        choiceButton.addEventListener("click", questionClick);

        choicesElement.append(choiceButton);
    })
 
}

function quizEnd(){
    clearInterval(timerID);

    var endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    var finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class", "hide");

}


function clockTick(){
    time--;
    timerElement.textContent = time;

    if(time<= 0){
        quizEnd();
    }

}

function startQuiz(){
    var startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick,1000);

    timerElement.textContent = time;

    getQuestion();

}

function saveHighScore(){
    var intials = initialElement.value.trim();

    if(intials!== ""){
        var saveHighScore = JSON.parse(localStorage.getItem("highscores")) || [];
        var newScore = {
            Score: time,
            intials: intials
        }

        saveHighScore.push(newScore);
        localStorage.setItem("highscore", JSON.stringify(saveHighScore));

        window.location.href="highscores.html";
    }

}


startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", saveHighScore);
