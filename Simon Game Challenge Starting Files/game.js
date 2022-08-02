var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).on("keypress", function() {
    if (!started){
        $("#level-title").text("Level "+level);
        newSequence();
        started = true;
    }
})

$(".btn").click(function(){

    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                newSequence();
            }, 1000);
        }
    } else {
        console.log("failure");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function newSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("level "+ level);
    
    var randomNumber = Math.floor(Math.random()*4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);

    $("#"+randomChoosenColour).fadeOut(250).fadeIn(250);
    playSound(randomChoosenColour);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function playSound(name) {
    var buttonSound = new Audio("sounds\\" + name + ".mp3");
    buttonSound.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}
