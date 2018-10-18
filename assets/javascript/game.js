// Define all global variables first
var gussesRemaining = 12;

// Define JS Objects for each GOT character

var ned = {
    "name" : "Ned Stark",
    "id" : 1,
    "image" : "assets/images/ned.png",
    "nameLength" : 9,
    "death" : "S1E9",
    "letters" : [
        "n",
        "e",
        "d",
        "s",
        "t",
        "a",
        "r",
        "k"
    ]
   
};

var robert = {
    "name" : "Robert Baratheon",
    "id" : 2,
    "image" : "assets/images/robert.png",
    "nameLength" : 16,
    "death" : "S1E7",
    "letters" : [
        "o",
        "e",
        "b",
        "h",
        "t",
        "a",
        "r",
        "n"
    ]
   
};

var margaery = {
    "name" : "Margaery Tyrell",
    "id" : 3,
    "image" : "assets/images/margaery.png",
    "nameLength" : 15,
    "death" : "S6E10",
    "letters" : [
        "m",
        "a",
        "r",
        "g",
        "e",
        "y",
        "t",
        "l"
    ]
   
};

var pycelle = {
    "name" : "Grand Maester Pycelle",
    "id" : 4,
    "image" : "assets/images/pycelle.png",
    "nameLength" : 21,
    "death" : "S6E10",
    "letters" : [
        "g",
        "r",
        "a",
        "n",
        "d",
        "m",
        "e",
        "s",
        "t",
        "p",
        "y",
        "c",
        "l"
    ]
   
};

var tywin = {
    "name" : "Lord Tywin Lannister",
    "id" : 5,
    "image" : "assets/images/tywin.png",
    "nameLength" : 20,
    "death" : "S4E10",
    "letters" : [
        "l",
        "o",
        "r",
        "d",
        "t",
        "y",
        "w",
        "i",
        "n",
        "a",
        "e",
        "s"
    ]
   
};

var petyr = {
    "name" : "Petyr Baelish",
    "id" : 6,
    "image" : "assets/images/petyr.png",
    "nameLength" : 13,
    "death" : "S7E7",
    "letters" : [
        "p",
        "e",
        "t",
        "y",
        "r",
        "b",
        "a",
        "l",
        "i",
        "s",
        "h"
    ]
   
};

var ygritte = {
    "name" : "Ygritte",
    "id" : 7,
    "image" : "assets/images/ygritte.png",
    "nameLength" : 7,
    "death" : "S4E9",
    "letters" : [
        "y",
        "g",
        "r",
        "i",
        "t",
        "e"
    ]
   
};

var joffrey = {
    "name" : "Prince Joffrey",
    "id" : 8,
    "image" : "assets/images/joffery.png",
    "nameLength" : 14,
    "death" : "S4E2",
    "letters" : [
        "p",
        "r",
        "i",
        "n",
        "c",
        "e",
        "j",
        "o",
        "f",
        "y"
    ]
   
};

var hodor = {
    "name" : "Hodor",
    "id" : 9,
    "image" : "assets/images/hodor.png",
    "nameLength" : 5,
    "death" : "S6E5",
    "letters" : [
        "o",
        "d",
        "h",
        "r"
    ]
   
};

var robb = {
    "name" : "Robb Stark",
    "id" : 10,
    "image" : "assets/images/robb.png",
    "nameLength" : 10,
    "death" : "S3E9",
    "letters" : [
        "r",
        "o",
        "b",
        "s",
        "t",
        "a",
        "k"
    ]
   
};

// Capture user keystroke and set to variable named userGuesses (which will be an array of all values the user has entered)

    // Look for the error recieved when values are undefined, this is your IF condition for adding only NEW keystrokes to your array variable

    // IF a NEW keystroke is entered by the user (see above)
    // THEN IF userLetter patternCount()

    // Condition #1 - new letter does NOT exist in name value, then subtract -1 from the guessesRemaining variable

    // Condition #2 - letter DOES exist so insert into HTML
