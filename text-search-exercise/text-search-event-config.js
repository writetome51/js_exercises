(function(){

    var eventConfigurations = [
        {
            elements: getElementsByIDs([
                'text-input',
                'case-sensitive-checkbox'
            ]),

            eventsToAdd: [
                // don't include 'on' in the name, and keep it all lowercase:
                'input',
                'change'
            ],

            eventFunctions: [showMatches]
        },

        {
            elements: getElementsByIDs([
                'text-to-search'
            ]),
            eventsToAdd:['click'],
            eventFunctions:[changeToTextArea]
        },

        {
            elements: getElementsByIDs([
                'text-to-search-editable'
            ]),
            eventsToAdd:['blur'],
            eventFunctions:[changeToParagraph]
        }

    ];

    (new EventConfigurator(eventConfigurations)).configure();

})();

