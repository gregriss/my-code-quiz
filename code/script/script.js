var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector(".startScreen");
var highScoreBtn = document.querySelector("#highScoreBtn");

// variables where content shows up on the page
var containerTag = document.querySelector(".container");
// var questionScreen = document.querySelector(".questionScreen");
var resultTag = document.querySelector(".result");
var endScreen = document.querySelector(".endScreen");

questionIndex = 0;
questionArr = [
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
        question: 'Which of these repeats a block of code until a specified condition evaluates to false?',
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

// setting user's score to zero
var userScore = 0;
// creating a place for the time to show up on the page
var timeEl = document.querySelector(".time");
// setting timer to start at 30 seconds
var secsRemain = 30;

// setting up a timer
var timeSet = function () {
    var timeInterval = setInterval(function () {
        // decrementing time by 1 second each second
        secsRemain--;
        // rendering timer on the page
        timeEl.textContent = "Time: " + secsRemain;
        // stopping time and ending the game if time has run out or if all questions have been answered 
        if (secsRemain === 0 || questionIndex > 9) {
            clearInterval(timeInterval);
            timeEl.textContent = "Time: 0";
            endGame();
        }
    // timer decrements every 1000ms, or one second
    }, 1000);
    
};

// function to display questions
var showNextQuestion = function () {
    // starting with empty tag
    containerTag.textContent = "";
    // stopping function if all questions have been answered
    if (questionIndex > 9){
        return;     
    } 
    // creating a question tag, appending it to container, putting array question into it
    var questionTag = document.createElement("h2");
    containerTag.appendChild(questionTag);
    questionTag.textContent = questionArr[questionIndex].question;
    // making a list tag for the multiple choice options, append to container, putting answer choices into it 
    var choiceListTag = document.createElement("ol");
    containerTag.appendChild(choiceListTag);
    choiceListTag.textContent = questionArr[i];

    // looping through each question 
    for (var i = 0; i < questionArr[questionIndex].choices.length; i++) {
        // making a button for each answer choice, putting array choices into subsequent buttons, giving each button an index id, appending to choice list tag
        var choiceTag = document.createElement("button");
        choiceTag.textContent = (questionArr[questionIndex].choices[i]);
        choiceTag.setAttribute('id', i);
        choiceListTag.appendChild(choiceTag);
        // adding event listener to all answer choice buttons
        choiceTag.addEventListener("click", function (event) {
            // making sure only the clicked button is targeted
            event.stopPropagation();

            // clearing out result of previous question 
            resultTag.textContent = "";

            // creating a variable for which answer button is clicked, determining it's id 
            var answerClicked = parseInt(event.target.id);
            // if answer user clicked is equal to the "answer index" (the correct answer)...
            if (answerClicked === questionArr[questionIndex].answerIndex) {
                // add 1 point to user's score
                userScore++;
                // log user's score to the console
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
                // moving to next question info in array
                questionIndex++; 
                // ***
                // calling the function again
                showNextQuestion();
        
            }
            else {
                // taking 1 point from user's score 
                userScore--;
                // subtracting 5 seconds from timer if a question is answered incorrectly
                secsRemain -= 5;
                // console.log("User Score: " + userScore);

                // adding to user's score in local storage
                localStorage.setItem("User Score", userScore);

                // displays "Incorrect" on the page
                var incorrectText = document.createElement("h2");
                resultTag.appendChild(incorrectText);
                incorrectText.textContent = "Incorrect!";
                // moving to next question info in array
                questionIndex++;
                // calling the function again
                showNextQuestion();
            }
        });
    };

};

// var pauseTime = function () {
// }

var endGame = function () {
    
    containerTag.textContent = "";
    resultTag.textContent = "";
    localStorage.getItem("User Score", JSON.parse(userScore));
    var displayScore = document.createElement("h1");
    containerTag.appendChild(displayScore);
    displayScore.textContent = "Game Over! Your Score is: " + userScore;
    var addIntialsMessage = document.createElement("h3");
    containerTag.appendChild(addIntialsMessage);
    addIntialsMessage.textContent = "Add your initials in the box below!";

    var userInitials = document.createElement("input");
    containerTag.appendChild(userInitials);
    userInitials.textContent = "";
    var submitBtn = document.createElement("button");
    containerTag.appendChild(submitBtn);
    submitBtn.textContent = "Submit";

    submitBtn.addEventListener("click", function () {
        var userInitialsInput = userInitials.textContent;
        localStorage.setItem("User Intials", JSON.stringify(userInitialsInput));
        viewHighScores();
    });
};

var viewHighScores = function (event) {
    // event.preventDefault();
    containerTag.textContent = "";
    var highScoresHeading = document.createElement("h1");
    containerTag.appendChild(highScoresHeading);
    highScoresHeading.textContent = "High Scores";
    var highScoresList = document.createElement("h3");
    containerTag.appendChild(highScoresList);
    
    highScoresList.textContent = localStorage.getItem("User Score", JSON.stringify(userScore)); // need to put data here from local storage
    var goBackBtn = document.createElement("button");
    containerTag.appendChild(goBackBtn);
    goBackBtn.textContent = "Go Back";
    var clearHighScoresBtn = document.createElement("button");
    containerTag.appendChild(clearHighScoresBtn);
    clearHighScoresBtn.textContent = "Clear";
    
    goBackBtn.addEventListener("click", function (event) {
        // console.log(event.target);
        // containerTag.textContent = "";

        // takes user back to home page
        location.reload();
    });

    clearHighScoresBtn.addEventListener("click", function(event) {
        console.log(event.target);
        localStorage.removeItem("User Score");
        localStorage.removeItem("User Initials");
        highScoresList.textContent = "";
    });
};

// startBtn.addEventListener("click", showNextQuestion);
startBtn.addEventListener("click", timeSet);
startBtn.addEventListener("click", showNextQuestion);
highScoreBtn.addEventListener("click", viewHighScores);
// timeEl.addEventListener("click", pauseTime);
// submitBtn.addEventListener("click", viewHighScores);
