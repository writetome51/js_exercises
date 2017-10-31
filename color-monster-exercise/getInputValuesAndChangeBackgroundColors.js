(function getInputValuesAndChangeBackgroundColors() {

        showInitialColors();

        var colorInputs = getElementsByIDs(
            [
                // Rule: the input's id must end with '-color' ,
                // and the element it's intended to change must have an id that's
                // identical, except not end with '-color'.
                'left-eye-color',
                'right-eye-color',
                'mouth-color',
                'monster-body-color'
            ]
        );

        var eventConfigurations = [
            {
                elements: colorInputs,

                eventsToAdd: [
                    // don't include 'on' in the name, and keep it all lowercase:
                    'input'
                ],

                eventFunctions: [changeBackgroundColorOfRelatedElement]

            },


            {
                elements: colorInputs,
                eventsToAdd:['change'],
                eventFunctions:[
                    function(){
                        alert('the color you entered is ' + this.value);
                    }
                ]
            }

        ];


        (new EventConfigurator(eventConfigurations)).configure();


})();
