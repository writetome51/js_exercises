function EventConfigurator(){

	this.configure = function(eventConfigurations){
		eventConfigurations.forEach(setupConfiguration);
    };


    // Attaches every event in configuration.eventsToAdd to every element in
    // configuration.elements.
    // Every event will call eventFunction.
    // eventFunction is able to access the element's properties because
    // it is turned into a method attached to the element.
    var setupConfiguration = function(configuration){

        configuration.elements.forEach(
            function attachTo(element){
                element.addEventListeners = addEventListeners;
                element.addEventListeners(
                    configuration.eventsToAdd,
                    configuration.eventFunction
                );
            }
        );

    };


    // Intended to be used as an element object method:
    var addEventListeners = function(events, eventFunction){
        this.eventFunction = eventFunction; // 'this' refers to element object.
        for (var event=0;  event < events.length;  ++event){
            this.addEventListener(events[event],  this.eventFunction);
        }
    };


}
