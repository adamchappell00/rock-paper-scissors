
var instructions = document.getElementById('instructions')
function hideInstructions(){
    instructions.style.display = 'none';
}


var randomWpn;
var result;
var computerScore = 0;
var playerScore = 0;
/* USER WEAPON FUNCTIONS BELOW:
* When the Player Clicks on any "weapon-div", the weapon value is passed through the userWeapon variable
* and the background image for the "#player-throw" div is updated to show that choice */
var userWeapon = 1;
$('#rock').click(function(){
    updateWeapon("rock");
});
$('#paper').click(function(){
    updateWeapon("paper");
});
$('#scissors').click(function(){
    updateWeapon("scissors");
});
$('#lizard').click(function(){
    updateWeapon("lizard");
});
$('#spock').click(function(){
    updateWeapon("spock");
});
$('#kaiju').click(function(){
    updateWeapon("godzilla");
});
function updateWeapon(str){
    switch(str){
        case "rock":
            userWeapon = "Rock";
            $('#player-throw').css('background-image',"url('/img/rock.png')");
            break;
        case "paper":
            userWeapon = "Paper";
            $('#player-throw').css('background-image',"url('/img/paper.png')");
            break;
        case "scissors":
            userWeapon = "Scissors";
            $('#player-throw').css('background-image',"url('/img/scissors.png')");
            break;
        case "lizard":
            userWeapon = "Lizard";
            $('#player-throw').css('background-image',"url('/img/lizard.png')");
            break;
        case "spock":
            userWeapon = "Spock";
            $('#player-throw').css('background-image',"url('/img/spock.png')");
            break;
        case "godzilla":
            userWeapon = "Godzilla";
            $('#player-throw').css('background-image',"url('/img/godzilla.png')");
            break;
        default:
            console.log("whoops, weapon switch uncaught value!");
    }
}
/* FIGHT FUNCTION BELOW:
* When the Player Clicks on the "FIGHT" Button, the computer weapons display randomly picks a weapon every 1/4 second
* for 4 seconds, and (TO BE ADDED: PLAYS A SOUND)
* Afterwards, the randomly selected weapon
* is randomly selected and displayed
* in the "#computer-throw" div, with timers included. The function then updates the current score for
* the player or the computer based on the winner */
$('#fight-me').click(function(){
    var count = 0;
    var max = 24;
    var intervalId = setInterval(function () {
        if (count >= max) {
            clearInterval(intervalId);
        } else {
            var randomNum = Math.floor(Math.random() * 5);
            switch (randomNum){
                case 0:
                    $('#computer-throw').css('background-image',"url('/img/rock.png')");
                    randomWpn = "Rock";
                    break;
                case 1:
                    $('#computer-throw').css('background-image',"url('/img/paper.png')");
                    randomWpn = "Paper";
                    break;
                case 2:
                    $('#computer-throw').css('background-image',"url('/img/scissors.png')");
                    randomWpn = "Scissors";
                    break;
                case 3:
                    $('#computer-throw').css('background-image',"url('/img/lizard.png')");
                    randomWpn = "Lizard";
                    break;
                case 4:
                    $('#computer-throw').css('background-image',"url('/img/spock.png')");
                    randomWpn = "Spock";
                    break;
            }
            count++;
        }
    }, 250);
    if(typeof userWeapon === 'number'){
        alert("Silly Player, Select Your Weapon First! I guess you have to use stick instead!");
        userWeapon = "Stick";
        $('#player-throw').css('background-image',"url('/img/stick.png')");
        fightRoll(randomWpn);
    }else{
        fightRoll(randomWpn);
    }
});
function updateResult(){

    $('#player-score').html(playerScore);
    $('#computer-score').html(computerScore);
}

/* The Tedious fightRoll function is below, it calls other functions to update the score and display the result,
* all of the interesting functions are above*/
function fightRoll(str) {
    if (userWeapon === "Stick") {
        result = "Player used a stick and lost, way to go!"
        computerScore++;
    } else if (userWeapon === "Godzilla") {
        result = "Player Wins! Godzilla conquers all! Put away your puny " + str + "!";
        playerScore++;
    } else {
        switch (str) {
            case "Rock":
                if (userWeapon === "Rock") {
                    result = "Draw! Rock vs Rock";
                } else if (userWeapon === "Lizard" || userWeapon === "Scissors") {
                    result = "Computer Wins! " + userWeapon + " loses to " + str + "!";
                    computerScore++;
                } else if (userWeapon === "Spock" || userWeapon === "Paper") {
                    result = "Player Wins! " + userWeapon + " beats " + str + "!";
                    playerScore++;
                }
                break;
            case "Paper":
                if (userWeapon === "Paper") {
                    result = "Draw! Paper vs Paper";
                } else if (userWeapon === "Rock" || userWeapon === "Spock") {
                    result = "Computer Wins! " + userWeapon + " loses to " + str + "!";
                    computerScore++;
                } else if (userWeapon === "Scissors" || userWeapon === "Lizard") {
                    result = "Player Wins! " + userWeapon + " beats " + str + "!";
                    playerScore++;
                }
                break;
            case "Scissors":
                if (userWeapon === "Scissors") {
                    result = "Draw! Scissors vs Scissors";
                } else if (userWeapon === "Paper" || userWeapon === "Lizard") {
                    result = "Computer Wins! " + userWeapon + " loses to " + str + "!";
                    computerScore++;
                } else if (userWeapon === "Rock" || userWeapon === "Spock") {
                    result = "Player Wins! " + userWeapon + " beats " + str + "!";
                    playerScore++;
                }
                break;
            case "Lizard":
                if (userWeapon === "Lizards") {
                    result = "Draw! Lizard vs Lizard";
                } else if (userWeapon === "Spock" || userWeapon === "Paper") {
                    result = "Computer Wins! " + userWeapon + " loses to " + str + "!";
                    computerScore++;
                } else if (userWeapon === "Rock" || userWeapon === "Scissors") {
                    result = "Player Wins! " + userWeapon + " beats " + str + "!";
                    playerScore++;
                }
                break;
            case "Spock":
                if (userWeapon === "Spock") {
                    result = "Draw! Spock has broken a key rule of physics!";
                } else if (userWeapon === "Rock" || userWeapon === "Scissors") {
                    result = "Computer Wins! " + userWeapon + " loses to " + str + "!";
                    computerScore++;
                } else if (userWeapon === "Paper" || userWeapon === "Lizard") {
                    result = "Player Wins! " + userWeapon + " beats " + str + "!";
                    playerScore++;
                }
                break;
            default:
                console.log("UserWeapon: "+userWeapon);
                console.log("ComputerWeapon: "+ str);
                console.log("Whoops, fightRoll switch default!");
        }
    }
    updateResult();
}