(function getInputValuesAndChangeBackgroundColors() {

        showInitialColors();

        var eventConfigurations = [
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
                    'input'
                ],

                eventFunctions: [changeBackgroundColorOfRelatedElement]

            },


            {
                elements: getElementsByIDs(
                    [
                        'left-eye-color',
                        'right-eye-color',
                        'mouth-color',
                        'monster-body-color'
                    ]
                ),
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
