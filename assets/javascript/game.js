    // ****************************************
    // Define all global variables first
    var guessesRemaining = 12;

    var alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"
    ]

    // ****************************************
    // Define JS Objects for each GOT character with a unique ID so computer can select accordingly

    var ned = {
        "name" : "Ned Stark",
        "id" : 1,
        "image" : "assets/images/ned.png",
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

    // ****************************************
    // Have computer RANDOMLY select object by ID
    var objId = Math.floor(Math.random() * 10) +1;
    
    // Use switch statement to determine object to use
        switch (objId) {
            case 1:
                objSelected = ned;
                break;
            
            case 2:
                objSelected = robert;
                break;
            
            case 3:
                objSelected = margaery;
                break;

            case 4:
                objSelected = pycelle;
                break;

            case 5:
                objSelected = tywin;
                break;

            case 6:
                objSelected = petyr;
                break;

            case 7:
                objSelected = ygritte;
                break;

            case 8:
                objSelected = joffrey;
                break;

            case 9:
                objSelected = hodor;
                break;

            case 10:
                objSelected = robb;
                break;

            default:
                break;
        };

        console.log(objSelected);

    // Define playerGuess as an empty array
    var userGuesses = [];
    
    // Custom Functions
    // isLetter - used to validate that user input was a LETTER and not a number, or shift key etc
    function isLetter(str) {
        // return str.toLowerCase() != str.toUpperCase();
        return alphabet.indexOf(str);
      };

    // Now extract the selected object values for the current round
    var nameLength = objSelected.name.length;
    var cName = objSelected.name;
    var cDeath = objSelected.death;
    var cImage = objSelected.image;
    var cLetters = objSelected.letters;

    // ****************************************
    // Capture user keystroke and set to variable named userGuesses (which will be an array of all values the user has entered)
    document.onkeyup = function(e) {

        // get letter user typed and set as temporary varialbe currentGuess, also convert to lower case (just in case)
        var currentGuess = e.key.toLowerCase();
        console.log(currentGuess);
        
    
    // IF is NOT a letter, ie if isLetter == -1 for NO INDEX
        if (isLetter(currentGuess) == -1) {
            
            // Do nothing
            console.log(currentGuess + " is not a letter"); 

    // ELSE if currentGuess does NOT exist in the userGuesses array
        // if result is -1 then the value is NOT in the chosen array
        } else if (userGuesses.indexOf(currentGuess) === -1) {

            console.log("ELSE " + userGuesses.indexOf(currentGuess) );
            //Then PUSH the currentGuess to the userGuesses array and subtract 1 from guessesRemaining variable
            userGuesses.push(currentGuess);
            var guessesRemaining = guessesRemaining -1;
            console.log(guessesRemaining);
            console.log(userGuesses);

        }

        // Look for the error recieved when values are undefined, this is your IF condition for adding only NEW keystrokes to your array variable

        // IF a NEW keystroke is entered by the user (see above)
        // THEN IF userLetter patternCount()

        // Condition #1 - new letter does NOT exist in name value, then subtract -1 from the guessesRemaining variable

        // Condition #2 - letter DOES exist so insert into HTML

    // END on KEYUP section
    };