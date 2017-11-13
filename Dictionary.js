
function Dictionary(){
	this.datastore = {};
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
}


function add(key, value){
	this.datastore[key] = value;
}


function find(key){
	return this.datastore[key];
}


function remove(key){
	delete this.datastore[key];
}


function showAll(){
	for (var key in this.datastore){
		console.log(key + ' -> ' + this.datastore[key]);
	}
}


var pbook = new Dictionary();

pbook.add('Trent', '455');
pbook.add('Mike', '123');
pbook.add('Cynthi', '348');
pbook.add('Joe', '566');


function getResult(key){
	var result = pbook.find(key);
	if (result) {
		document.getElementById('result').innerHTML = result;
	}
	else  document.getElementById('result').innerHTML = 'not found';
}


var configurations = [{
	elements: getElementsByIDs(['input']),
	eventsToAdd: ['input', 'change'],
	eventFunctions: [
		function(){
			getResult(this.value);
		},
		function(){
			if (document.getElementById('result').innerHTML !== 'not found'){
				this.style.backgroundColor = 'green';
			}
			else{
				this.style.backgroundColor = 'white';
			}
		}
	]
}];

(new EventConfigurator(configurations).configure());