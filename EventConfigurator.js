function EventConfigurator(configurations){

    this.configurations = configurations;

	// configurations is an array of configuration objects.  See explanation below.
	this.configure = function(){
		this.configurations.forEach(setupConfiguration);
	};
	
	
  /***** 	EXPLANATION of configuration objects.
               A configuration object needs these properties:
                {
                    elements: getElementsByIDs(arrayOfIDs),
                    eventsToAdd: arrayOfEvents,
                    eventFunctions: arrayOfFunctionsToAttachToEvents
		
		   // Every function in eventFunctions will be attached to each event.
		   // If the eventFunction needs to have the Event object passed in as a parameter,
		   // have the event function be an anonymous function that accepts the event, 
		   // and then passes it to the intended function, like so:
		   //    function(event){
		   //         intendedEventFunction(event);
		   //    }
                }
*****/


    // Attaches every event in configuration.eventsToAdd to every element in
    // configuration.elements.
    // Every event will call all configuration.eventFunctions, in the order they're listed.
    // Each eventFunction is able to access the element's properties because
    // it is turned into a method attached to the element.
    var setupConfiguration = function(configuration){

        configuration.elements.forEach(
            function attachTo(element){
                element.addEventListeners = addEventListeners;
                element.addEventListeners(
                    configuration.eventsToAdd,
                    configuration.eventFunctions
                );
            }
        );

    };


    // Intended to be used as an element object method:
    var addEventListeners = function(events, eventFunctions){
        for (var event=0;  event < events.length;  ++event){
		    this.addEventFunctionsToEachEventListener =  addEventFunctionsToEachEventListener;
            this.addEventFunctionsToEachEventListener(events[event], eventFunctions);
        }
    };


	var addEventFunctionsToEachEventListener = function(event, eventFunctions){
		for (var i=0;  i < eventFunctions.length;  ++i){
			this.eventFunction = eventFunctions[i]; // 'this' refers to element object.
			this.addEventListener(event,  this.eventFunction);
		}
	};


}
