if(document.readyState === 'loading') {                                                 /*makes sure that html loads before any JavaScript is run */
    document.addEventListener('DOMContentLoaded', ready());
    } else {
        ready();
    }


function ready() {                                                                        
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