
function isMultipleOfThree(num){
    return (num % 3 === 0);
}


function isMultipleOfFive(num){
    return (num % 5 === 0);

}


function fizzbuzz(){
    var input = prompt('enter a number');
    input = Number(input);

    var output = '';

    if (isMultipleOfThree(input) && isMultipleOfFive(input)){
        output = 'fizzbuzz';
    }

   else{
        if (isMultipleOfThree(input))
            output = 'fizz';

        else if (isMultipleOfFive(input))
            output = 'buzz';

    }

    alert(output);
}