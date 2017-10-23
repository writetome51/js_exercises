    // This assumes eventFunction will not need parameters
    // because it will operate on the element object's properties.
    // eventFunction is able to access those properties because
    // it is turned into a method attached to the element.

    function addEventListenersToIDs(IDs, events, eventFunction){

        for (var id = 0;  id < IDs.length;  ++id){
            addEventListenersToID(IDs[id], events, eventFunction);
        }
    }


    function addEventListenersToID(id, events, eventFunction){

        var element = document.getElementById(id);

        for (var event=0;  event < events.length;  ++event){
            attachEvent(element, events[event], eventFunction);
        }
    }


    function attachEvent(element, event, eventFunction){
        element.eventFunction = eventFunction;
        element.addEventListener(event, element.eventFunction);
    }



    function callAsMethodOfTheObject(obj, functionToCall){
        obj.functionToCall = functionToCall;
        obj.functionToCall();
    }
