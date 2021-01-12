// console.log('Hellow World!');

var score = 0;
var timeEl = document.querySelector(".timer");
var secsRemain = 200;

var start = document.querySelector(".start");
start.addEventListener("click", timeSet());
var questions = [
    'question1',
    'question2',
    'question3',
    'question4',
    'question5',
    'question6',
    'question7',
    'question8',
    'question9',
    'question10'
];

var hiScores = [];
// var hiScoresButton = document.querySelector(".high-scores");
// hiScoresButton.addEventListener("click")
function timeSet() {
    var timeInterval = setInterval(function() {
        secsRemain--;
        timeEl.textContent = "Time: " + secsRemain;

        if(secsRemain === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
};
