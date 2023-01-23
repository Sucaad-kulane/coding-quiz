function getQuestion(){
    var currentQuestions = Questions[currentQuestionsIndex];
    var timerElement = document.getElementById("questions-title");

    timerElement.textContent = currentQuestions.title;

    choicesElement.innerHTML = "";

    currentQuestions.choices.forEach(function(choices,index){
        var choicesButton = document.createElement("button");

        choicesButton.setAttribute("Class","choice");
        choicesButton.setAttribute("value","choice");

        choicesButton.textContent = `${index + 1}. ${choice}`

        choicesButton.addEventListener("click", questionClick);

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

function questionsClick(){
    time--;
    timerElement.textContent = time;

    if(time <=0){
        quizEnd( )
    }

}

function startQuiz(){
    var statScreenElement = document.getElementById("start-screen");
    statScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick,1000);

    timerElement.textContent = time;

    getQuestions();

}



function clockTick(){

}

function saveHighScore(){

}

function checkForEnter(event){

}

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);