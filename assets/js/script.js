if(document.readyState === 'loading') {                                                 /*makes sure that html loads before any JavaScript is run */
    document.addEventListener('DOMContentLoaded', ready());
    } else {
        ready();
    }

    


function ready() {                                                                   // All Javascript developed using Port Exe tutorial here: https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=983s&ab_channel=PortEXE            
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'))

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');                                       /*removes the visisble class when an overlay is clicked */ 
                // add code here to start game when "click to play overlay is clicked " game.startgame
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}

class MusicMatcherGame {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remianing');
        this.ticker = document.getElementById('moves');
        this.starRating = document.getElementById('star-rating');
    }
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;

    }
}