
function isMultipleOfThree(num){
    'use strict';
    return (num % 3 === 0);
}


function isMultipleOfFive(num){
    'use strict';
    return (num % 5 === 0);

}


function fizzbuzz(){
    'use strict';
    var input = window.prompt('enter a number');
    input = Number(input);

    var output = '';

    if (isMultipleOfThree(input) && isMultipleOfFive(input)){
        output = 'fizzbuzz';
    }

   else{
        if (isMultipleOfThree(input)){
			output = 'fizz';
        }

        else if (isMultipleOfFive(input)){
			output = 'buzz';
        }
    }

    window.alert(output);
}