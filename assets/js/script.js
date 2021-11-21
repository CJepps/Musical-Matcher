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
        setTimeout(() => {
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalMoves;
    }
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.totalMoves++;
            this.ticker.innerText = this.totalMoves;
            card.classList.add('visible');                        //Adds the class 'visible' to the card that is clicked, which should flip it and reveal the card backface.// 
            
            if(this.cardToCheck)
                this.checkForMatch(card);
            else
                this.card.cardToCheck = card;    
        } 
    }
    checkForMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMisMatch(card, this.cardToCheck);
        
        this.cardToCheck = null;    
    }
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        if(this.matchedCards.length === this.cardsArray.length) {         // if the number of matched cards is the same as the number of cards in the cards array then all the cards have been matched and the win game function is called. //
            this.winGame();                                     
        }
    }
    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible')                      //Removes visible class if the cards are mismatched and should flip them back to front face of card.//
            card2.classList.remove('visible')
            this.busy = false;
        }, 1000);
    }
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src   // checks if the two cards have the same image file name. If they do then they are a match. //
    }
    startCountDown() {                                           //takes 1 off of timeRemaining every 1000ms(1 second)//
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)                         // runs gameover function when timer hits zero.//
                this.gameOver();
        }, 1000);
    }
    gameOver() {
        clearInterval(this.countDown);
        $("#game-over-modal").modal("toggle");
    }
    winGame() {
        clearInterval(this.countDown);
        document.getElementById('win-game-modal').classList.add('visible');
        $("#win-game-modal").modal("toggle");
    }

    shuffleCards() {                                             //Shuffles cards based on the Fisher-Yates algorithm.// 
        for(let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randomIndex].style.order = 1;
            this.cardsArray[i].style.order = randomIndex;
        }

    }

    canFlipCard(card) {
        return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck)
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
    