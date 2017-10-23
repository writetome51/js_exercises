
// JavaScript Document
var currentstring = '';

function sendLetter(theletter) {
    var outputcontdiv = document.getElementById("output");
    currentstring = currentstring.concat(theletter); // We need to concatenate...
    checkmyAnswer(currentstring);
    outputcontdiv.innerHTML = currentstring.toLowerCase();

}

function checkmyAnswer(instring) {
    var otheranswer = instring.slice(2,6);
    if(instring === "STRING"){
        alert("you win! String also contains the word " + otheranswer);
    }
}

