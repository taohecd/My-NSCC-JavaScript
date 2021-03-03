(function(testFunction){
/*
* PHONEWORDS
* Write a function that will take a phone word (vanity number) and return the correct telephone number.
* The number pad looks like the following:
* https://en.wikipedia.org/wiki/Telephone_keypad#/media/File:Telephone-keypad2.svg
*
* RULES
* Given a phoneword:
* 1. Remove any non-numeric characters (), -, etc.
* 2. Keep any digits
* 3. Resolve a number according to the keypad image
* 4. All your code must be contained in the section function below
*
*
* Final Grade	Requirement
* 10/10	Tech check is correct (passes all tests) and is completed within the allotted in-class time.
* 8/10	Tech check is correct (passes all tests) and is completed within a 12-hour grace period beginning immediately following the end of in-class time.
* 6/10	Tech check is correct (passes all tests) and is completed and submitted after the 12-hour grace period has elapsed.
* 0/10	Tech check is not submitted or does not pass all tests.
*/

// CHANGE ONLY CODE IN THIS SECTION

    function convertPhoneWord(phoneword) {
        if(!phoneword || phoneword == null || typeof(phoneword) !=='string'){
            return"";
        }
        
        var inputlength = input.length;
        input = input.toLowerCase();
        var phonenumber = "";
        for (i = 0; i < inputlength; i++) {
        var character = input.charAt(i);
        
        
        switch(character) {
        
        case '0': phonenumber+="0";break;
        case '1': phonenumber+="1";break;
        case '2': phonenumber+="2";break;
        case '3': phonenumber+="3";break;
        case '4': phonenumber+="4";break;
        case '5': phonenumber+="5";break;
        case '6': phonenumber+="6";break;
        case '7': phonenumber+="7";break;
        case '8': phonenumber+="8";break;
        case '9': phonenumber+="9";break;

        case ' ': phonenumber+=" ";break;

        case 'a': case 'b': case 'c': phonenumber+="2";break;
        case 'd': case 'e': case 'f': phonenumber+="3";break;
        case 'g': case 'h': case 'i': phonenumber+="4";break;
        case 'j': case 'k': case 'l': phonenumber+="5";break;
        case 'm': case 'n': case 'o': phonenumber+="6";break;
        case 'p': case 'q': case 'r': case 's': phonenumber+="7";break;
        case 't': case 'u': case 'v': phonenumber+="8";break;
        case 'w': case 'x': case 'y': case 'z': phonenumber+="9";break;
        
        default: phonenumber+=character;
        
           }
        }
        
        return phonenumber;  

    }

// DO NOT CHANGE ANY CODE AFTER THIS LINE.

    //Run tests on the function
    testFunction(convertPhoneWord); //DO NOT MODIFY

    
})(testFunction);