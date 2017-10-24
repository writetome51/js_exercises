// This is a library of essential general-use functions.

function getElementsByIDs(IDs){
    for (var id=0;  id < IDs.length;  ++id){
        IDs[id] = document.getElementById(IDs[id]);
    }
    return IDs; // element objects
}



function callAsMethodOfTheObject(obj, functionToCall){
    obj.functionToCall = functionToCall;
    obj.functionToCall();
}
