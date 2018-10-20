    // ****************************************
    // Define all global variables first
    var guessesRemaining = 12;
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

    var wins = 0;
    document.getElementById("wins").innerHTML = wins;

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
        "win" : " n e d _ s t a r k",
        "letters" : [
            "n",
            "e",
            "d",
            " ",
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
        "win" : " r o b e r t _ b a r a t h e o n",
        "letters" : [
            "r",
            "o",
            "b",
            "e",
            "r",
            "t",
            " ",
            "b",
            "a",
            "r",
            "a",
            "t",
            "h",
            "e",
            "o",
            "n",
            " "
        ]
    
    };

    var margaery = {
        "name" : "Margaery Tyrell",
        "id" : 3,
        "image" : "assets/images/margaery.png",
        "death" : "S6E10",
        "win" : " m a r g a e r y _ t y r e l l",
        "letters" : [
            "m",
            "a",
            "r",
            "g",
            "a",
            "e",
            "r",
            "y",
            " ",
            "t",
            "y",
            "r",
            "e",
            "l",
            "l",
            " "
        ]
    
    };

    var pycelle = {
        "name" : "Grand Maester Pycelle",
        "id" : 4,
        "image" : "assets/images/pycelle.png",
        "death" : "S6E10",
        "win" : " g r a n d _ m a e s t e r _ p y c e l l e",
        "letters" : [
            "g",
            "r",
            "a",
            "n",
            "d",
            " ",
            "m",
            "a",
            "e",
            "s",
            "t",
            "e",
            "r",
            " ",
            "p",
            "y",
            "c",
            "e",
            "l",
            "l",
            "e",
            " "
        ]
    
    };

    var tywin = {
        "name" : "Lord Tywin Lannister",
        "id" : 5,
        "image" : "assets/images/tywin.png",
        "death" : "S4E10",
        "win" : " l o r d _ t y w i n _ l a n n i s t e r",
        "letters" : [
            "l",
            "o",
            "r",
            "d",
            " ",
            "t",
            "y",
            "w",
            "i",
            "n",
            " ",
            "l",
            "a",
            "n",
            "n",
            "i",
            "s",
            "t",
            "e",
            "r"
        ]
    
    };

    var petyr = {
        "name" : "Petyr Baelish",
        "id" : 6,
        "image" : "assets/images/petyr.png",
        "death" : "S7E7",
        "win" : " p e t y r _ b a e l i s h",
        "letters" : [
            "p",
            "e",
            "t",
            "y",
            "r",
            " ",
            "b",
            "a",
            "e",
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
        "win" : " y g r i t t e",
        "letters" : [
            "y",
            "g",
            "r",
            "i",
            "t",
            "t",
            "e"
        ]
    
    };

    var joffrey = {
        "name" : "Prince Joffrey",
        "id" : 8,
        "image" : "assets/images/joffery.png",
        "death" : "S4E2",
        "win" : " p r i n c e _ j o f f r e y",
        "letters" : [
            "p",
            "r",
            "i",
            "n",
            "c",
            "e",
            " ",
            "j",
            "o",
            "f",
            "f",
            "r",
            "e",
            "y"
        ]
    
    };

    var hodor = {
        "name" : "Hodor",
        "id" : 9,
        "image" : "assets/images/hodor.png",
        "death" : "S6E5",
        "win" : " h o d o r",
        "letters" : [
            "h",
            "o",
            "d",
            "o",
            "r"
        ]
    
    };

    var robb = {
        "name" : "Robb Stark",
        "id" : 10,
        "image" : "assets/images/robb.png",
        "death" : "S3E9",
        "win" : " r o b b _ s t a r k",
        "letters" : [
            "r",
            "o",
            "b",
            "b",
            " ",
            "s",
            "t",
            "a",
            "r",
            "k"
        ]
    
    };

    // ****************************************
    // Have computer RANDOMLY select from 1 to 10
    var objId = Math.floor(Math.random() * 10) +1;
    // var objId = 5

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

    function replaceUndefined(str) {
        return str.replace("undefined", "");
    };

    // Needed an easy way to get current visibleLetters outside of local scope
    function myGuess() {
        return document.getElementById("visibleLetters").innerHTML;
    };

    // Want to insert winning image url
    function winImage(url) {
        var x = document.getElementById("cImage").innerHTML;
        return x.replace("assets/images/Question.png", url); 
    };

    // Now extract the selected object values for the current round
    var nameLength = objSelected.name.length;
    var cName = objSelected.name;
    var cDeath = objSelected.death;
    var cImage = objSelected.image;
    var cLetters = objSelected.letters;
    var toWin = objSelected.win;

    // Now run loop to determine visible characters for each name letter (or show underscore)
    for (var i = 0; i < nameLength; i++) {
        var x = cLetters[i];
            // We need a way to determine if the array userGuesses is undefined, otherwise first iteration will be UNDEFINED
            // if (visibleLetters === "undefined") {
            //     var visibleLetters = "_a";
            // } else {
                // First iteration simply needs an underscore
                var visibleLetters = visibleLetters + " _";
                // var visibleLEtters = visibleLetters.replace("undefined", "");
            // }
        // }
    };
        // Now set this value to the HTML
        document.getElementById("visibleLetters").innerHTML = visibleLetters.replace("undefined", "");


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
            guessesRemaining -1;

            // Update userGuesses within the HTML
            document.getElementById("userGuesses").innerHTML = userGuesses;
            document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
        }

        // Now run loop to determine visible characters for each name letter (or show underscore)
        for (var i = 0; i < nameLength; i++) {
            var x = cLetters[i];
            // IF letter has been guessed
            if (userGuesses.indexOf(x) != -1) {
                // THEN insert letter
                    var visibleLetters = visibleLetters + " " + x;
                   

            } else {
            // ELSE insert underscore
                // We need a way to determine if the array userGuesses is undefined, otherwise first iteration will be UNDEFINED
                // if (visibleLetters === "undefined") {
                //     var visibleLetters = "_a";
                // } else {
                    // First iteration simply needs an underscore
                    var visibleLetters = visibleLetters + " _";
                // }
            }
        };
        // Added this to remove leading "undefined" text from string
        var visibleLetters = replaceUndefined(visibleLetters);
        console.log(visibleLetters);
        // Now set this value to the HTML
        document.getElementById("visibleLetters").innerHTML = visibleLetters;

         // Check to see if user won by seeing if both strings are the same (ie =0)
        //  var y = toWin.localeCompare(visibleLetters.replace("undefined", ""));
        var y = myGuess();

         if (y === toWin) {
             // If TRUE then show hidden items
             console.log("user wins!");
             document.getElementById("cName").innerHTML = cName;
             document.getElementById("cImage").innerHTML = winImage(cImage);
             document.getElementById("cDeath").innerHTML = "RIP: " + cDeath;

            //  Now increase the current score
            var cScore = document.getElementById("wins").innerHTML;
            if (cScore = "0") {
                document.getElementById("wins").innerHTML = 1;
            } else {
                document.getElementById("wins").innerHTML = cScore +1;
            };

            // Select new object
         };
        // Condition #1 - new letter does NOT exist in name value, then subtract -1 from the guessesRemaining variable


    // END on KEYUP section
    };