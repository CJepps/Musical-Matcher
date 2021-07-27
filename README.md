# Musical Matcher 

# User experience (UX)

## Strategy
---
The main requirement of this project was to create a memory card game that is fun, requires minimal explanation, and can be enjoyed by an audience of all ages. I anticipate that this game will appeal more to music lovers or people learning music, so I also wanted to include a small educational component to the game. 

## User Stories
---
### Business Goals
- The game needs to incorporate a home page that is visually appealing and straightforward to use. 
- The game needs to be fun to play and easy to understand from the first instance so that users continue to play. 
- The game needs to be fully reponsive on a range of screen resolutions so that a broader audience is reached; If the game is difficult to play on a particular device then we may lose those users.
### User Goals
- I want to know what the website is offering me, with a clear and straightforward layout to enable navigation.
- I want to be able to start the game easiliy and be presented with instructions on how to play the game.
- I want feedback on how well i am doing in the game. 
- I want the option of different difficulty levels.
- I want the ability to enable / disable sounds.
- I want to contact the developer with any suggestions / feedback for the game. 

## Scope
---
- Home page with logo, start button that presents instructions on how to play the game (Modal).
- A 
- A button that enables users to bring up a contact form to email me (EmailJS API)
- Separate Game page with blank cards laid out in a Grid. 
- A timer that is displayed to the user and starts counting down upon the first card being flipped.
- A reset button 

## Structure
---

### Design
- Color Palette - I've gone for a minimalist styling to complement the musical theme and simplicity of a keyboard. I will use a monochrome color design for the majority of the application and use red (#FF0000) and green (#00FF00) in the game to show correct/ incorrect pairs respectably.

- Typography - I will use the Tourney Font (Google fonts) to style the website icon. Montserrat will be used as the main font with Sans Serif as the fallback in case this does not load.

- Audio - It is my intention that when a user flips a card and reveals an image of a particular musical notation, a relevant sound will play. This will add an educational element to the game where users can practice corresponding musical notation to the sound produced. This would help with abilities such as sight reading. 

- Imagery - I have chosen to style the website and game with a minimalist style to reflect musical notation. I will use an appealing icon for the homepage to entice users to play the game. This icon will match the theme of music that i've used to style the rest of the game. 
## Skeleton
---
### Wireframes - created using Balsamiq
#### Home Page
- iPhone - [View](/workspace/Musical-Matcher/assets/images/wireframes/homepage-iphone.JPG)
- iPad - [View](/workspace/Musical-Matcher/assets/images/wireframes/homepage-ipad.JPG)
- Desktop - [View](/workspace/Musical-Matcher/assets/images/wireframes/homepage-desktop.JPG)
#### Home Page Modal
- iPhone - [View](/workspace/Musical-Matcher/assets/images/wireframes/homepage-modal-iphone.JPG)
- iPad - [View](/workspace/Musical-Matcher/assets/images/wireframes/homepage-modal-ipad.JPG)
- Desktop - [View](/workspace/Musical-Matcher/assets/images/wireframes/homepage-modal-desktop.JPG)
#### Game
- iPhone - [View](/workspace/Musical-Matcher/assets/images/wireframes/gamepage-iphone.JPG)
- iPad - [View](/workspace/Musical-Matcher/assets/images/wireframes/gamepage-ipad.JPG)
- Desktop - [View](/workspace/Musical-Matcher/assets/images/wireframes/gamepage-desktop.JPG)
#### Game Modal
- iPhone - [View](/workspace/Musical-Matcher/assets/images/wireframes/gamepage-modal-iphone.JPG)
- iPad - [View](/workspace/Musical-Matcher/assets/images/wireframes/gamepage-modal-ipad.JPG)
- Desktop - [View](/workspace/Musical-Matcher/assets/images/wireframes/gamepage-modal-desktop.JPG)
## Features
---
### Home page
- Central music themed icon that doubles as a new game button 
- "Contact the Developer" button that opens a modal containing a contact form. Here, users can email their enquiries/ feedback using EmailJS API
### All pages
- Logo for 'Music Matcher' which allows navigation to Home page when clicked.
### Home page modal
- Provides instructions/ rules of the game
- New game section includes three buttons; Beginner, Intermediate, Expert, that allows users to select the difficulty of the game
### Game page
- Game information section displays the time remaining in the game, number of moves made, and a star rating based on number of moves made.
- 4x4 grid of 16 cards that are on a dark background so they are easily visable by the user.
- Cards present a musical notation image when clicked. If a correct pair is clicked then both cards flash green and do not flip back over. If an incorrect pair is matched then the cards flash red and turn back over.
- Cards emit sound when clicked, corresponding to the type of image displayed on the card.
- Audio toggle swtch allows users to disable sound.
- Restart button which allows users to start game from the start.
### Game page modals
- Modal presents once time limit has been reached (lost game) or all cards have been matched (won game)
### Won game modal 
- Congratulates users with a victory image.
- Includes a game information section that displays; number of moves made, corresponding star rating, and time remaining. 
- Includes a 'Play Again?' button that starts the game again at the previously played difficulty.
- Change difficulty button allows users to start the game again on another difficulty.
- Homepage button returns users to the homepage.
### Lost game modal
- Comiserates users with a game over image 
- Includes a game information section that displays; number of moves made, corresponding star rating, and time remaining. 
- Includes a 'Play Again?' button that starts the game again at the previously played difficulty.
- Change difficulty button allows users to start the game again on another difficulty.
- Homepage button returns users to the homepage.


# Technologies used 
## Languages
## Additional Frameworks, Libraries, and Programs used
# Testing 
# Deployment
# Credits 
