console.log("Hello World")

var choices = ["R", "P", "S"]
var wins = 0
var ties = 0
var losses = 0


function rockPaperScissors() {
    if (userChoice == "S" && computerChoice == "R") {
        losses ++
        alert("The computer chose R. You lost.")
    } else if (userChoice == "R" && computerChoice == "S") {
        wins ++
        alert("The computer chose S. You win")
    }else if (userChoice == "R" && computerChoice == "P") {
        losses ++
        alert("The computer chose P. Computer wins")
    } else if (userChoice == "P" && computerChoice == "S") {
        loss ++
        alert("The computer chose S. Computer wins")
    }else if (userChoice == "P" && computerChoice == "R") {
        wins ++
        alert("The computer chose R. You win")
    } else if (userChoice == "S" & computerChoice == "P") {
        wins ++
        alert("The computer chose P. You win")
    }else {
        ties ++
        alert("You tied")
    }
}

var play = confirm("Do you want to play rock, paper, scissors?")

// var userChoice = prompt("Type R, P, or S")

// var computerChoice = Math.floor(Math.random()*choices.length)

if (play===true) {
    var userChoice = prompt("Type R, P, or S")
    var computerChoice = Math.floor(Math.random()*choices.length)
    rockPaperScissors() 
    alert("Wins: " + wins + ". Losses: " + losses + ". Ties: " + ties)
} else {
    alert("Thanks for playing")
}

// alert("Wins: " + wins + ". Losses: " + losses + ". Ties: " + ties)

var playAgain = confirm("Do you want to play again?")

if (playAgain===true) {
    var userChoice = prompt("Type R, P, or S")
    var computerChoice = Math.floor(Math.random()*choices.length)
    rockPaperScissors()
} 