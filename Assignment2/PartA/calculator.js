// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];  /* Declare an array for operation symbols judgment */
var decimalAdded = false;  /* Declare a variable for decimal point input */

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
            btnVal = '';
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			// Replace all instances of x and ? with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			/* Checking the last character of the equation. Remove it conditions are met */
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');

			if(equation) {
				input.innerHTML = eval(equation);
			}
			decimalAdded = false;  /* Decimal point false */
		}
		
		else if(operators.indexOf(btnVal) > -1) {
			/* Get the last character */
			var lastChar = inputVal[inputVal.length - 1];
			
			/* Only add an operator if input is not empty and there is no any operator at the last */
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			/* Allow minus if the string is empty */
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			/* Replace the last operator */
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				/* Anything at the end of string will be replaced by new operator */
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		/* Solve the decimal point by using a flag 'decimalAdded' */
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it
		else {
			input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}