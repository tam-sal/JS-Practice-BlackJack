// range values for cards 2-11
// k= 10 A = 11
// Exact to win = 21, in_game < 21, loss > 21
let player = {
                name: 'Player', 
                chips: 145,
                greet: function(){
                    return('Hi ')
                }}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector(".cards-el")
let playerEl = document.querySelector('#player-el')


playerEl.textContent = player.greet() + player.name + ': $' + player.chips


function getRandomCard(){
    let randNumber = Math.ceil(Math.random()*13)
    if (randNumber === 1) {
        randNumber = 11
        return randNumber
    }
    else if (randNumber >= 11 && randNumber <= 13) {
        randNumber = 10
        return randNumber
    }
    
    return randNumber
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard(), secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: "+sum
    let idx = 0
    cardsEl.textContent = "Cards: "
    for(idx; idx < cards.length; idx++) {
        cardsEl.textContent += cards[idx] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    }
    else if (sum === 21){
        message = "you got Backjack!"
        hasBlackJack = true
    }
    else {
        message = "you're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) 
    {let thirdCard = getRandomCard()
    cards.push(thirdCard)
    sum += thirdCard
    renderGame()
    sumEl.textContent = "Sum: "+sum}
    
    
}

