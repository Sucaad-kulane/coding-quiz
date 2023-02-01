var clearButton = document.getElementById("clear");
var ol = document.getElementById("highscores");
function printHighScores(){

var highScores = JSON.parse(localStorage.getItem("highscore")) || [];

    highScores.sort(function(a,b){
    return b.score - a.score;
})

    highScores.forEach(function(score){
    var li = document.createElement("li");
    li.textContent = `${score.intials} - ${score.Score}`

    console.log(ol);
    ol.append(li);
})

}

function ClearHighScores(){

localStorage.removeItem("highscore");
window.location.reload();

}
console.log(clearButton);


document.getElementById("clear").addEventListener("click", ClearHighScores);

printHighScores();
