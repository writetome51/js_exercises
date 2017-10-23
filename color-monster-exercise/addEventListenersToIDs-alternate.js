
	function configureElementsWithEventsAndRelatedFunctions(eventConfigurations){
		for (var i = 0;  i < eventConfigurations.length;  ++i){
			addEventListenersTo(eventConfigurations[i]);
		}
	}
 

	// parameter 'configuration' is an object.
	// Attaches every event in configuration.eventsToAdd to every element in
 	// configuration.elements.
	// Every event will call eventFunction.
	// This assumes eventFunction will not need parameters
   	// because it will operate on the element's properties.
    	// eventFunction is able to access those properties because
    	// it is turned into a method attached to the element.
	function addEventListenersTo(configuration){
		
		configuration.elements.forEach(
     			function attachTo(element){
				element.addEventListeners = addEventListeners;
           			element.addEventListeners(
                			configuration.eventsToAdd,
                			configuration.eventFunction
           			);
      			}
		);

	}


	// Intended to be used as an object method:
	function addEventListeners(events, eventFunction){
		this.eventFunction = eventFunction;
		for (var event=0;  event < events.length;  ++event){
			this.addEventListener(events[event],  this.eventFunction);
		}
	}


	function getElementsByIDs(IDs){
		for (var id=0;  id < IDs.length;  ++id){
			IDs[id] = document.getElementById(IDs[id]);
		}
		return IDs;
	}



  	function callAsMethodOfTheObject(obj, functionToCall){
        	obj.functionToCall = functionToCall;
        	obj.functionToCall();
  	}
