/**
 * @author: Kunal Kanere
 */
//Ready function
(function() {
   // your page initialization code here
   // the DOM will be available here
//	console.log("Ready");
	//getJsonData();
//	startChat();
	
})();
var marryWait = null;

function startChat(){
	console.log("starting chat......");
	//Remove welcome message
	var parent = document.getElementById("message-bubble");
	var child = document.getElementById("welcome");
	parent.removeChild(child);
	
	//Remove link
	var parent2 = document.getElementById("action-bar");
	var child2 = document.getElementById("action-link");
	parent2.removeChild(child2);
	
	clearTimeout(linkVar);
	
	document.getElementById("message-bubble").innerHTML+='<div id="mary1"><strong>Mary</strong> : "Hi Nicholas, this is Mary from Abank. Hw may I help you today?"</div>';
	
	document.getElementById("action-bar").innerHTML+='<div id="send-action"><input id="message" type="text"> &nbsp;&nbsp;<button type="button" id="send" onclick="sendMessage()">Send</button></div>';
}

function sendMessage(){
	//read message
	var textEle = document.getElementById("message");
	var msg = textEle.value;
	console.log("sent= "+msg);
	
	//clear text box
	textEle.value="";
	
	//update chat history
	document.getElementById("message-bubble").innerHTML+='<div id="nic1"><strong>Nicholas</strong> : '+msg+'</div>';
	
	//wait 3 secs
	marryWait = setTimeout(reply, 3000);
	
}

function reply(){
	
	clearTimeout(marryWait);
	
	var msg = 'To reset the password just click on the'+ 
		' My details menu. Once you have clicked the menu a new page will appear. Select the link "Change password". "'+
		'From this link it will take you to a screen where you can change you password"';
	//send reply
	document.getElementById("message-bubble").innerHTML+='<div id="mary2"><strong>Mary</strong> : '+msg+'</div>';
}