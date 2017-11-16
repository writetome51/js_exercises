var myurl = '';

var url = 'https://cdn.dribbble.com/users/1600045/screenshots/3950846/kisslogo.jpg';


// an Example of using a factory:

$(function(){

	var Myfactory = {};
	Myfactory.dom = {};

	Myfactory.dom.Text = function(url){
		this.url = url;
		this.insert = function(){
			$('.mydiv').append('<div>' + url + '</div>');
		};

	};

	Myfactory.dom.Link = function(url){
		this.url = url;
		this.insert = function(){
			$('.mydiv').append('<a href="' + this.url + '">Link Here</a>');
		};
	};

	Myfactory.dom.Image = function(url){
		this.url = url;
		this.insert = function(){
			$('.mydiv').append('<img src="' + this.url + '"/>');
		};
	};


	(new Myfactory.dom.Text(url)).insert();

	(new Myfactory.dom.Image(url)).insert();

	(new Myfactory.dom.Link(url)).insert();
	
});


