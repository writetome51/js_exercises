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


Array.prototype.removeItem =  function(item){
	if (this.itemExists(item)){
		var index = this.indexOf(item);
		this.splice(index, 1);
	}
    return this;
};


Array.prototype.removeItems = function(items){
	for (var i=0; i<items.length;  ++i){
		this.removeItem(items[i]);
	}
	return this;
};


Array.prototype.removeAdjacentItems = function(items){
	var index = this.indexOf(items[0]);
	this.splice(index, items.length);
	return this;
};


Array.prototype.itemExists = function(item){
	return (this.indexOf(item) > -1);
};

// remember to remove those prototype additions at program's end.