
var userScore = 0;
var timeEl = document.querySelector(".time");
var secsRemain = 30;

var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector(".startScreen");
var highScoreBtn = document.querySelector("#highScoreBtn");

// variables where content shows up on the page
var containerTag = document.querySelector(".container");
// var questionScreen = document.querySelector(".questionScreen");
var resultTag = document.querySelector(".result");
var endScreen = document.querySelector(".endScreen");

var submitBtn = document.querySelector("#submit");

// var highScoreScreen = document.querySelector(".highScoreScreen");
// var highScores = document.querySelector(".highScores");
// var goBackBtn = document.querySelector("#goBackBtn");
// var clearBtn = document.querySelector("#clearBtn");


var questionIndex = 0;
var questionArr = [
    {
        question: 'Which function is used primarily for debugging?',
        answerIndex: 0, 
        choices: [
          'console.log',
          'debug.My.Life',
          'console.frog',
          'console.debug'
        ]
    },
    {
        question: 'What of these symbols signifies the logical OR operator?',
        answerIndex: 2,
        choices: [
            '//',
            '**',
            '||',
            '@@'
        ] 
    },
    {
        question:'Which of these repeats a block of code until a specified condition evaluates to false?',
        answerIndex: 3,
        choices: [
            'function', 
            'conditional',
            'object',
            'for loop'
        ]
    },
    {
        question: 'What does the acronym JSON stand for?',
        answerIndex: 2,
        choices: [
            'jQuery Script Object Null',
            'JavaScript Order Number',
            'JavaScript Object Notation',
            'Join Storage Object: Null'
        ]
    },
    {
        question: 'Which symbol do we use to contain the contents of an Array?',
        answerIndex: 0,
        choices: [
            '[]',
            '{}',
            '()',
            '<>'
        ]
    },
    {
        question: 'What are the three components of a for loop that occur before the code block?',
        answerIndex: 1,
        choices: [
            'index, function, limit',
            'iterator, condition, increment',
            'itemizer, indexOf, stringify',
            'for, loop, components'
        ]
    },
    {
        question: 'Which symbols surround the condition in an "if...else statement?',
        answerIndex: 2,
        choices: [
            '[]',
            '??',
            '()',
            '||'
        ]
    },
    {
        question: 'What operator is used to store a value inside a variable?',
        answerIndex: 3,
        choices: [
            '-->',
            '==',
            '#',
            '='
        ]
    },    
    {
        question: 'What was the first browser to support Javscript?',
        answerIndex: 1,
        choices: [
            'Internet Explorer',
            'Netscape',
            'Chrome',
            'Firefox'
        ]
    },
    {
        question: 'Which method generates a pseudo-random number between 0 and less than 9?',
        answerIndex: 0,
        choices: [
            'Math.random',
            'Math.floor',
            'floor.Random',
            'Random.floor'
        ]
    },
];


// var timeSet = function() {
//     var timeInterval = setInterval(function() {
//         secsRemain--;
//         timeEl.textContent = "Time: " + secsRemain;
//         if (secsRemain < 1) {
//             clearInterval(timeInterval);
//             endGame();
//         }
//     }, 1000);
// };

// var startGame = function() {
//     // startScreen.classList.add("hide");
//     // questionScreen.classList.remove("hide");
//     // startScreen.textContent = ""
//     timeSet();  
//     showNextQuestion();
// };

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

var showNextQuestion = function() {
    // starting with empty tag
    containerTag.textContent = "";

    timeSet();

    // creating a tag to put question text inside
    var questionTag = document.createElement("h2");
    // appending new tag to the container that will house it
    containerTag.appendChild(questionTag);
    // saying that the text of the question tag will follow the current index inside question array
    questionTag.textContent = questionArr[questionIndex].question;

    // making a list tag for the multiple choice options 
    var choiceListTag = document.createElement("ol");
    // appending choice tag to the container
    containerTag.appendChild(choiceListTag);
    // text of choice list will follow current index within question array
    choiceListTag.textContent = questionArr[i];

    // looping through each question 
    for (var i = 0; i < questionArr[questionIndex].choices.length; i++) {
        var choiceTag = document.createElement("button");
        choiceTag.textContent = (questionArr[questionIndex].choices[i]);
        choiceTag.setAttribute('id', i);
        choiceListTag.appendChild(choiceTag);
    
        choiceTag.addEventListener("click", function(event){
            event.stopPropagation();
            console.log(event.target);
            // console.log(questionArr[i]);
            var answerClicked = parseInt(event.target.id);
            // console.log(questionArr[i].choices);
            // parseInt('data-index', i);
            // if (questionArr[i].answerIndex === questionArr[i].choices[i]){
            if (answerClicked === questionArr[questionIndex].answerIndex) {
                // adding 1 point to user's score
                userScore++;
                // logging user's score to the console
                console.log("User Score: " + userScore);
                // storing user's score in local storage
                localStorage.setItem("User Score", userScore);
                // logging correct to console
                console.log('correct!');
                // making element that says "correct" at bottom of page
                var correctText = document.createElement("h2");
                // appending new tag to div at bottom of page
                resultTag.appendChild(correctText);
                // dictating text of new tag will say "correct"
                correctText.textContent = "Correct!";
                // console.log(questionArr[i].answerIndex[i]);
                // containerTag.textContent = "";
            
                questionIndex++;
            
                showNextQuestion();
            }
            else  {
                // taking 1 point from user's score 
                userScore--;
                
                console.log("User Score: " + userScore);
            
                localStorage.setItem("User Score", userScore);

                console.log("Incorrect!");

                var incorrectText = document.createElement("h2");
                resultTag.appendChild(incorrectText);
                incorrectText.textContent = "Incorrect!";

                questionIndex++;
                showNextQuestion();
            }

            
            
        });
    };
    
};

// var pauseTime = function() {

// }

var endGame = function() {
    containterTag.textContent = "";
    resultTag.textContent = "";
    localStorage.getItem("User Score");
    var displayScore = document.createElement("h1");
    containerTag.appendChild(displayScore);
    displayScore.textContent = userScore;
    // questionScreen.classList.add("hide");
    // highScoreScreen.classList.add("hide");
    // endScreen.classList.remove("hide");
} 
// var goBack = function() {
//     highScoreScreen.classList.add("hide");
//     startScreen.classList.remove("hide");
// };

// var clearHighScores = function() {
//     highScores.textContent = "";
// }
var viewHighScores = function(event) {
    event.preventDefault();
    containerTag.textContent = "";
    var highScoresHeading = document.createElement("h1");
    containerTag.appendChild(highScoresHeading);
    highScoresHeading.textContent = "High Scores";
    var highScoresList = document.createElement("input");
    containerTag.appendChild(highScoresList);
    highScoresList.style.lineHeight = "32px";
    highScoresList.style.fontFamily = "Courier";
    highScoresList.style.fontSize = "28px";
    highScoresList.textContent = ""; // need to put data here from local storage
    var goBackBtn = document.createElement("button");
    containerTag.appendChild(goBackBtn);
    goBackBtn.textContent = "Go Back";
    var clearHighScoresBtn = document.createElement("button");
    containerTag.appendChild(clearHighScoresBtn);
    clearHighScoresBtn.textContent = "Clear";


    goBackBtn.addEventListener("click", function(event){
        console.log(event.target);
        containerTag.textContent = "";
        containerTag.textContent = startScreen;
    });

    clearHighScoresBtn.addEventListener("click", function(event){
        console.log(event.target);
        highScoresList.textContent = "";
        console.log(highScoresList.textContent);
    });
    // startScreen.classList.add("hide");
    // endScreen.classList.add("hide");
    // questionScreen.classList.add("hide");
    // highScoreScreen.classList.remove("hide");
};

// remember what I'm changing around down here
startBtn.addEventListener("click", showNextQuestion); // <-- had startGame function there before
highScoreBtn.addEventListener("click", viewHighScores);
// timeEl.addEventListener("click", pauseTime);

submitBtn.addEventListener("click", viewHighScores);
