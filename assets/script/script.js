

// grabbing buttons on the start page, connecting to JS 
var startBtn = document.querySelector("#startBtn");
var highScoreBtn = document.querySelector("#highScoreBtn");

// making variables for containers where content will appear on the page
var containerTag = document.querySelector(".container");
var resultTag = document.querySelector(".result");

// defining starting point for questions
questionIndex = 0;
// array of questions objects with choice and answer index values
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

// If any hi scores exist, get them from local storage
// if not, array to store users initials and scores is empty
var allUsers = [];
if (localStorage.getItem("All Users") !== null){
    for (let i = 0; i < allUsers.length; i++) {
    var usersHiScores = JSON.parse(localStorage.getItem("All Users", allUsers));
    highScoresList.textContent = allUsers[i].initials + "  " + allUsers[i].score;
    }
}
else {
    allUsers = [];
};

// setting user's score to zero
var userScore = 0;
// creating a place for the time to show up on the page
var timeEl = document.querySelector("#time");
// setting timer to start at 30 seconds
var secsRemain = 30;

// setting up a timer
var timeSet = function () {
    var timeInterval = setInterval(function () {
        // decrementing time by 1 second each second
        secsRemain--;
        // rendering timer on the page
        timeEl.textContent = "Time: " + secsRemain;
        // timer turns red when there are only 5 seconds left
        if (secsRemain <= 5){
            document.getElementById("time").style.backgroundColor = "rgb(240, 60,60)";
        }
        // if time has run out or if all questions have been answered, stop timer, display 0 on timer, revert to normal button color
        if (secsRemain <= 0 || questionIndex > 9) {
            clearInterval(timeInterval);
            timeEl.textContent = "Time: 0";
            timeEl.setAttribute("style", "background-color:  rgb(156, 172, 187)");
            // call function to end the game
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

    // looping through each choice in a question 
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
                // // storing user's score in local storage
                // localStorage.setItem("User Score", userScore);
                // logging correct to console
                console.log('Correct!');
                console.log("Current Score: " + userScore);
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
                // subtracting 5 seconds from timer if a question is answered incorrectly
                secsRemain -= 5;
                // logging Incorrect to the console
                console.log("Incorrect :(");
                // shows user score in the console
                console.log("Current Score: " + userScore);
                // // adding to user's score in local storage
                // localStorage.setItem("User Score", userScore);
            
                // creating an element that displays "Incorrect" on the page
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
// function to run if game is over
var endGame = function () {
    // clearing containers
    containerTag.textContent = "";
    resultTag.textContent = "";
    // creating elements for results of the quiz
    var displayScore = document.createElement("h1");
    containerTag.appendChild(displayScore);
    // showing Game Over screen and user's score
    displayScore.textContent = "Game Over! Your Score is: " + userScore;
    var initialsMessage = document.createElement("h3");
    containerTag.appendChild(initialsMessage);
    // allowing user to type their initials 
    initialsMessage.textContent = "Add your initials in the box below";
    var initialsInput = document.createElement("input");
    containerTag.appendChild(initialsInput);
    // creating a button for user to click to submit their initials
    var submitBtn = document.createElement("button");
    containerTag.appendChild(submitBtn);
    submitBtn.textContent = "Submit";

    // event listener to handle user input
    submitBtn.addEventListener("click", function () {
        var initials = initialsInput.innerHTML;
        // creating an object to store initials with user's score
        var user = {
            initials: initialsInput.value.trim(),
            score: userScore
        };

        console.log(user);
        allUsers.push(user);
        console.log(allUsers);
        // validate user's initials
        if(user.initials === ""){
            alert("Error", "Initials cannot be blank");
        }
        else {
            alert("Success. Your name and score have been stored.");
        }
        // storing user's initials and score in local storage
        // localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("All Users", JSON.stringify(allUsers));
        viewHighScores();
    });
};
// function to run to let user see high scores
var viewHighScores = function (event) {
    event.preventDefault();
    console.log(event.target);
    // arrray to store users initials and scores
    // allUsers;
    // clearing the container
    containerTag.textContent = "";
    // creating elements to make high scores page
    var highScoresHeading = document.createElement("h1");
    containerTag.appendChild(highScoresHeading);
    highScoresHeading.textContent = "High Scores";
    var highScoresList = document.createElement("h3");
    containerTag.appendChild(highScoresList);
    
    // checking if there is any data stored yet 
    // if(localStorage.getItem("user") !== null){
        
        // var lastUser = JSON.parse(localStorage.getItem("user"));
        // retrieving user's score from local storage
        // highScoresList.textContent = lastUser.initials + "   " + lastUser.score; 
        
    // };
    // checking if any user data is stored 
    if (localStorage.getItem("All Users") !== null){
        for (let i = 0; i < allUsers.length; i++) {
        var usersHiScores = JSON.parse(localStorage.getItem("All Users", allUsers));
        highScoresList.textContent = allUsers[i].initials + "  " + allUsers[i].score;
        }
    }
    // building buttons to clear high scores or go to homepage
    var goBackBtn = document.createElement("button");
    containerTag.appendChild(goBackBtn);
    goBackBtn.textContent = "Go Back";
    var clearHighScoresBtn = document.createElement("button");
    containerTag.appendChild(clearHighScoresBtn);
    clearHighScoresBtn.textContent = "Clear";

    // goes back to homepage if user clicks Go Back
    goBackBtn.addEventListener("click", function (event) {
        location.reload();
    });
    // clears display of high scores and clears local storage
    clearHighScoresBtn.addEventListener("click", function() {
        // clearing local storage 
        localStorage.removeItem("All Users");
        // deleting scores from the page display
        highScoresList.textContent = "";
    });
};

// event listeners to trigger above functions when clicked
startBtn.addEventListener("click", timeSet);
startBtn.addEventListener("click", showNextQuestion);
highScoreBtn.addEventListener("click", viewHighScores);