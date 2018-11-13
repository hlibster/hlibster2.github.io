var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
  var btn = document.createElement("button");
  li.appendChild(btn);
 btn.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addConsoleFeedback() {
	console.log("working");
}

ul.onclick=function(event){
	var target=event.target;
  if(target.tagName == 'LI'){
     target.classList.toggle("done");
  }
	
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
