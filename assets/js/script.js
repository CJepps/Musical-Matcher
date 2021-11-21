class musicMatcherGame {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('moves');
        this.starRating = document.getElementById('star-rating');
    }
    startGame() {
        this.cardToCheck = null;
        this.totalMoves = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;

    }
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.totalMoves++;
            this.ticker.innerText = this.totalMoves;
            card.classList.add('visible');                       //Adds the class 'visible' to the card that is clicked, which should flip it and reveal the card backface.//  
        } 
    }
    canFlipCard(card) {
        return true;
        //return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck)
    }
}    

function ready() {                                                                   // All Javascript developed using Port Exe tutorial here: https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=983s&ab_channel=PortEXE            
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new musicMatcherGame(120, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');                                       /*removes the visisble class when an overlay is clicked */ 
            game.startGame();    
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}

if(document.readyState === 'loading') {                                                 /*makes sure that html loads before any JavaScript is run */
    document.addEventListener('DOMContentLoaded', ready());
    } else {
        ready();
    }
    