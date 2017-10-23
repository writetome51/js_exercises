var things = ['banana', 'egg', 'apple', 'diamond', 'carrot'];
var txt = document.getElementById('the-paragraph');
txt.innerText = things.sort();

setInterval(reverseOrder, 2000);
setInterval(alphabetize, 4000);


function reverseOrder(){
    txt.innerText = things.reverse();
}

function alphabetize(){
    txt.innerText = things.sort();
}