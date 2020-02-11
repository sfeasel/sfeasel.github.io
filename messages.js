var MessagingSim = function(chat) {
	var _this = this;
	var messageInterval;
	var index = 0;
	
	var messages = [
		{
		"name" : "Kyle",
		"text" : "hi i'm kyle",
		"imageUrl" : "images/male.png"
		},
		{
		"name" : "Mark",
		"text" : "hey kyle, i'm mark. i'm a 2nd year studying econ wbu?",
		"imageUrl" : "images/male.png"
		},
		{
		"name" : "Kyle",
		"text" : "nice, i'm a 2nd year studying bio so what do you wanna do after college?",
		"imageUrl" : "images/male.png"
		},
		{
		"name" : "Mark",
		"text" : "probly applying to some consulting firms, you?",
		"imageUrl" : "images/male.png"
		},
		{
		"name" : "Kyle",
		"text" : "my bf and i are both pre-med, so hopefully going to med school together",
		"imageUrl" : "images/male.png"
		},
		{
		"name" : "Mark",
		"text" : "med schools tough...you and your bf should just go be dancers or fashion designers lol",
		"imageUrl" : "images/male.png",
		},
		{
		  "last" : "yes"
		},
	
	];
	
	function init() {
		sendMessage();
		messageInterval = setInterval(sendMessage, 3300);
	}
	
	function sendMessage() {
		if (index < messages.length) {
			setTimeout(function(msg) {
				chat.displayMsg(msg);
			}, Math.random() * 1000, messages[index]);
			index += 1;
		} else {
			clearInterval(messageInterval);
		}
	}
	



	
	init();


};