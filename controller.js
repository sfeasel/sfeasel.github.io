document.body.onload = function() {
	var chatRoom = new Chat();
	var owner = "Mark";
	chatRoom.setOwner(owner);
	var chatSimulator = new MessagingSim(chatRoom);


}

