
var score = 0;
var timeEl = document.querySelector(".time");
var secsRemain = 30;

var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector(".startScreen");
var highScoreBtn = document.querySelector("#highScoreBtn");

var questionScreen = document.querySelector(".questionScreen");
var endScreen = document.querySelector(".endScreen");
var submitBtn = document.querySelector("#submit");

var highScoreScreen = document.querySelector(".highScoreScreen");
var highScores = document.querySelector(".highScores");
var goBackBtn = document.querySelector("#goBackBtn");
var clearBtn = document.querySelector("#clearBtn");

var questions = [
    {consoleLogQuestion: 'Which function is used primarily for debugging?',
    answer1: 'console.log',
    answer2: 'debug.My.Life',
    answer3: 'console.frog',
    answer4: 'console.debug'},

    {orQuestion: 'What of these symbols signifies the logical OR operator?',
    answer1: '||',
    answer2: '**',
    answer3: '//',
    answer4: '@@'},

    {loopQuestion:'Which of these repeats a block of code until a specified condition evaluates to false?',
    answer1: 'function',
    answer2: 'conditional',
    answer3: 'object',
    answer4: 'for loop'},

    {jsonQuestion: 'What does the acronym JSON stand for?',
    answer1: 'jQuery Script Object Null',
    answer2: 'JavaScript Order Number',
    answer3: 'JavaScript Object Notation',
    answer4: 'Join Storage Object: Null'},

    {arrayQuestion: 'Which symbol do we use to contain the contents of an Array?',
    answer1: '[]',
    answer2: '{}',
    answer3: '()',
    answer4: '<>'},

    {forLoopComponentQuestion: 'What are the three components of a for loop that occur before the code block?',
    answer1: 'index, function, limit',
    answer2: 'iterator, condition, increment',
    answer3: 'itemizer, indexOf, stringify',
    answer4: 'for, loop, components'},

    {conditionalQuestion: 'Which symbols surround the condition in an "if...else statement?',
    answer1: '[]',
    answer2: '??',
    answer3: '()',
    answer4: '||'},

    {variableQuestion: 'What operator is used to store a value inside a variable?',
    answer1: '-->',
    answer2: '==',
    answer3: '#',
    answer4: '='},

    {browserQuestion: 'What was the first browser to support Javscript?',
    answer1: 'Internet Explorer',
    answer2: 'Netscape',
    answer3: 'Chrome',
    answer4: 'Firefox'},

    {mathRandomQuestion: 'Which method generates a pseudo-random number between 0 and less than 1?',
    answer1: 'Math.random',
    answer2: 'Math.floor',
    answer3: 'floor.Random',
    answer4: 'Random.floor'}
];


var timeSet = function() {
    var timeInterval = setInterval(function() {
        secsRemain--;
        timeEl.textContent = "Time: " + secsRemain;
        if (secsRemain < 1) {
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
};

var startGame = function() {
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
    timeSet();   
};

var endGame = function() {
    questionScreen.classList.add("hide");
    endScreen.classList.remove("hide");
} 
var goBack = function() {
    highScoreScreen.classList.add("hide");
    startScreen.classList.remove("hide");
};

var clearHighScores = function() {
    highScores.textContent = "";
}
var viewHighScores = function() {
    startScreen.classList.add("hide");
    endScreen.classList.add("hide");
    questionScreen.classList.add("hide");
    highScoreScreen.classList.remove("hide");
};


startBtn.addEventListener("click", startGame, timeSet);
highScoreBtn.addEventListener("click", viewHighScores);
goBackBtn.addEventListener("click", goBack);
submitBtn.addEventListener("click", viewHighScores);
clearBtn.addEventListener("click", clearHighScores);