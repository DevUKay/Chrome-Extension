
// SETTING THE STAGE
const player = "Kingsley"
const opponent = "Nick"
const game = "AmazingFighter"

let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log( `${player} got ${points} points and won the ${game} game!` )
} else {
    console.log( `The winner is ${opponent}! ${player} lost the game` )
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

//////////////////////////////////// */ 
/*

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function fun(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
fun(myCourses)

/////////////////// */ /*

let mycredit = localStorage.getItem("myCredits")
// console.log(mycredit)

// localStorage.setItem("bigMoney", "into my Pocket", "199")

let items = localStorage.getItem("bigMoney")
console.log(items)

//// */ /*

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

let btnScore = document.getElementById('score-el')
let logBtn = document.getElementById('log-out')

btnScore.addEventListener("click", function() {
    console.log(data[0].score)
    // logBtn.textContent 
}) 

// */


