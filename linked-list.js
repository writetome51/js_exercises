


function Node(data){

	this.data = data;
	this.next = null;
}



function LinkedList(){

	this.head = null;
	this.size = 0;

	this.insert = function(data){
		var newNode = new Node(data);

		if (this.head == null){
			this.head = newNode;
			++this.size;
		}
		else{
			append(this.head, newNode);
		}

		function append(node, newNode){
			if (node.next == null){
				node.next = newNode;
				this.size++;
			}
			else{
				append(node.next, newNode);
			}
		}
	};


	this.contains = function(data){
		find(this.head);

		function find(node, data){
			if (node == null){
				return false;
			}
			else{
				if (node.data == data){
					return true;
				}
				else{
					find(node.next);
				}
			}
		}
	};


	this.remove = function(data){};


	this.getSize = function(){
		return this.size;
	}
}

/*************

var list = new LinkedList();

var obj = {value:''};

list.insert(obj);


function LinkedList(){
	this.self = {}; // the actual list.

	this.insert = function(value){

		// the link property points you to the next node.
		// A link value represents the property name of the next item in list.
		var node  = findHighestNode(this.self);
		this.self[node] = value;
		this.self[node].link = node + 1;
	};


	this.remove = function(value){
		for (var prop in this.self){
			if (prop === value){
				delete this.self.prop;
			}
		}
	};


	this.contains = function(value){
		var found = this.self[value];

		if (found) return true;
		else return false;
	};


	this.size = function(){
		return this.self.length;
	};


	function findHighestNode(obj){
		var max = 0;
		for (var prop in obj){
			if (prop.link > max){
				max = prop.link;
			}
		}
		return max;
	}
}


**********/
