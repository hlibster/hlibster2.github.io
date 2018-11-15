var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
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
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = "Current css background: " + body.style.background + ";"
}


ul.onclick=function(event){
	var target=event.target;
  if(target.tagName == 'LI'){
     target.classList.toggle("done");
  } else if(target.tagName == 'BUTTON'){
  	target.parentNode.remove();
  }
	
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);




