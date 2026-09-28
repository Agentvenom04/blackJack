let cards = []
let sum = 0
let winner = false
let blackJack = false
let isAlive = true
let gameStart = false
let messageEl = document.getElementById("message-el")
let cardsEl= document.getElementById("cards-el")
let sumEl= document.getElementById("sum-el")


function randomizeCard(){
   let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " | "
    }
    
    sumEl.textContent = "Sum: " + sum
    if(sum < 21){
        messageEl.textContent = "Do you want to draw another card?"
    
    }

    else if (sum === 21){
        messageEl.textContent = "BlackJack!"
        winner = true
        blackJack = true


    }

    else if (sum > 21){
        messageEl.textContent = "Loser"
        isAlive = false
    }

}

function startGame(){
    if (gameStart === false){
        isAlive = true
        let firstCard = randomizeCard()
        let secondCard = randomizeCard()
        cards.push(firstCard)
        cards.push(secondCard)
        sum = cards[0] + cards[1]
        renderGame()
        gameStart = true
    }
}

function drawCard(){
    if (isAlive === true && blackJack === false && gameStart === true){
    let newCard = randomizeCard()
        sum += newCard
        cards.push(newCard)
        renderGame()    
    }
    
}
