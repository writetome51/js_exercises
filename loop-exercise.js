
runExercise();


function runExercise(){

    Array.prototype.randomizeOrder = function(){
        $theOrder = [];
        while(this.length > 0) {
            $max = this.length;    $i = Math.floor(Math.random() * $max); // $i holds random int.
            $theOrder.push(this[$i]); // Adds new item to end of $theOrder.
            //If has only 1 item, end the loop early:
            if (this.length === 1)  break;
            //Remove item $i from this:
            if ($i === 0){
                this.shift(); // Removes first item.
            }
            else if ($i+1 === this.length){
                this.pop(); // If $i is last item, $i is removed.
            }
            else {
                this.splice($i, 1); // remove $i
            }
        }

        var i=0;
        while ($theOrder.length > 0){
            this[i] = $theOrder[0];
            $theOrder.shift();
            ++i;
        }

        /*********
        for (var i = 0;  i < $theOrder.length;  ++i){
            this[i] = $theOrder[i];
        }
        // return $theOrder;
         ************/
    }; // end of Array.randomizeOrder()


    var names = [
        'steve',
        'josh',
        'zoe',
        'michael',
        'dave',
        'mike d.',
        'ad-rock',
        'alvin',
        'simon',
        'theodore',
        'gordon',
        'alberto gonzales',
        'chazz palminteri',
        'moe zamboni',
        'gwen stefani',
        'david lee roth',
        'frank zappa',
        'mick jagger'
    ];

    names.randomizeOrder();


     displayText(names, '<br>');


    function displayText(texts, separator){
        var finalText = texts.join(separator);
        document.write(finalText);
    }

}






/*********
function randomizeOrder(txts){
        $theOrder = [];
        while(txts.length > 0) {
            $max = txts.length;    $i = Math.floor(Math.random() * $max); // $i holds random int.
            $theOrder.push(txts[$i]); // Adds new item to end of $theOrder.
            //If txts currently has only 1 item, end the loop early:
            if (txts.length === 1)  break;
            //Remove item $i from txts.  (If $b is less than 0 then the first item must be removed):
            if ($i === 0){
                txts.shift(); // Removes first item from txts.
            }
            else if ($i+1 === txts.length){
                txts.pop(); // If i is last item, i must be removed.
            }
            else {
                txts.splice($i, 1);
            }
        }
        return $theOrder;
}


 var greetings = [
 'Hello!',
 'Salud!',
 'Como esta!',
 'Greetings and salutations.'
 ];

 var secondaryGreetings = [
 'How is your morning?',
 'Have you had a good day?',
 'How was your flight?',
 'What time do you need to leave?'
 ];


 var strngs = [];

 for (var i=0;  i < greetings.length;  ++i){
        for (var j=0;  j < secondaryGreetings.length;  ++j){
            strngs.push(greetings[i] + ' ' +
                secondaryGreetings[j]);
        }
     }
********/



