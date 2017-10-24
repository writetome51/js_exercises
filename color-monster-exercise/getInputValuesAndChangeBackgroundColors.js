(function getInputValuesAndChangeBackgroundColors() {

    mainRoutine();


    function mainRoutine() {

        showInitialColors();

        var eventConfigurations = [
            /* Add one configuration object for every eventFunction.
               A configuration object needs these properties:
                {
                    elements: getElementsByIDs(arrayOfIDs),
                    eventsToAdd: arrayOfEvents,
                    eventFunction: functionToAttachToEvents
                }
            */


            {
                elements: getElementsByIDs(
                    [
                        // Rule: the input's id must end with '-color' ,
                        // and the element it's intended to change must have an id that's
                        // identical, except not end with '-color'.
                        'left-eye-color',
                        'right-eye-color',
                        'mouth-color',
                        'monster-body-color'
                    ]
                ),

                eventsToAdd: [
                    // don't include 'on' in the name, and keep it all lowercase:
                    'input',
                    'change'
                ],

                eventFunction: changeBackgroundColorOfRelatedElement
            },

        ];


        var configurator = new EventConfigurator();

        configurator.configure(eventConfigurations);


    }


    function showInitialColors() {
        var inputsDiv = document.getElementById('inputs');
        var inputs = inputsDiv.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; ++i) {
            callAsMethodOfTheObject(inputs[i], changeBackgroundColorOfRelatedElement);
        }
    }


    //This function assumes it will eventually be attached as
    //a method to an object.  This is why the reference to this.id
    function changeBackgroundColorOfRelatedElement() {
        var color = colorValueFrom(this.id);
        var id = idOfElementRelatedTo(this.id);

        setBackgroundColorOf(id, color);
    }


    function colorValueFrom(inputId) {
        return String(document.getElementById(inputId).value);
    }


    function idOfElementRelatedTo(inputId) {
        return inputId.replace('-color', '');
        //Add this function later:
        // function removeDashColorFromEnd(){
        //      if (inputId has '-color' at its end)
        //          return inputId.slice(-1, -7)
        // }
    }


    function setBackgroundColorOf(id, color) {
        document.getElementById(id).style.backgroundColor = color;
    }


})();
