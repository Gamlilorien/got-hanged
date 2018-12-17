# GOT Hanged - An 8-bit inspired Game Of Thrones version of Hangman

# WARNING: Playing may reveal spoilers!!

### Overview

In this project, I was tasked with creating a 'Word Guess' game themed in a particular visual style. A simple web app intended to run in a web browser, and feature dynamically updated HTML and CSS powered by JavaScript code for the game logic and interactive elements.

### Technology Used

* Typical HTML, CSS, and good old fashioned vanilla Javascript
* Bootstrap CSS framework for site grid layout and mobile responsiveness
* Object notation and object methods for declaring and calling various game functions, LOTS of conditional logic, JSON dot notation, Math.random() and event listeners.

### How to Play

Designed for computers due to the required KEY press listners, simply type any LETTER key on the keyboard to begin play.

Each round a deceased character name from the Game Of Thrones franchise will be chosen and it's your job to guess their name before running out of guesses.

You will be aloud a total of 12 letter guesses to try and discover the name of the parished character.

Incorrectly guessed letters will be displayed for quick reference and the number of guesses goes down accordingly.

If you guess a correct letter the displayed name dashes (ie '_ _ _ _ _') will become updated to show the location of your correctly guessed letter.

For example, if the name was say `madonna`, you would see a display like this when the game starts: `_ _ _ _ _ _ _`.

As you guess the correct letters, those letters will become revealed in context like this: `m a d o _  _ a`.

Once you guess the character name correctly you will see their 8-bit avatar and their episode demise date. SPOILERS!!

### Process

I started this project wanting to make something really fun, in their example (see video below) they showed an 80's inspired version.

I found a sheet of amazing 8 bit game of thrones character icons (shout out to memecenter.com/marshmellowman) that I sliced into same size images using a photo editor, and a fun 8-bit mp3 of the GOT theme song from: https://www.newgrounds.com/audio/listen/476918

With a concept and idea down, the next step was creating the basic structure of this single page web-app, and establish the <div> areas that would eventually hold the images and text placeholders that would get replaced later via Javascript and user interaction with the document.getElementById() selector.

Each possible character in the game has their own object with their image url, name, and name letters etc.

It took a fair bit of trial and error to get it working the way I intended but all in all I'm fairly happy with how it came out.

Enjoy!

## Word Guess Game (Other Example Demo)

[See demo example](https://youtu.be/W-IJcC4tYFI).

##### Word Guess Game Bonuses

1. Play a sound or song when the user guesses their word correctly, like in our demo.
2. Write some stylish CSS rules to make a design that fits your game's theme.
3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
4. Save your whole game and its properties in an object.
5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
