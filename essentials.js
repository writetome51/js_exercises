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

// Intended to use as method on array:
Array.prototype.removeInnerItem =  function(item){
    var index = this.indexOf(item);
    this.splice(index, 1);
    return this;
};

Array.prototype.removeAdjacentItems = function(items){
	var index = this.indexOf(items[0]);
	this.splice(index, items.length);
	return this;
};

Array.prototype.removeNonAdjacentItems = function(items){
    for (var i=0; i<items.length;  ++i){
        this.removeInnerItem(items[i]);
    }
    return this;
};