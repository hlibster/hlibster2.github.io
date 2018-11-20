var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let generate = document.getElementById("generate");

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

ul.onclick=function(event){
	var target=event.target;
  if(target.tagName == 'LI'){
     target.classList.toggle("done");
  } else if(target.tagName == 'BUTTON'){
  	target.parentNode.remove();
  }
	
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var length = 6;
  var chars = '0123456789ABCDEF';
  var hex = '#';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}

function setRandomBackground() {
	let a = getRandomColor();
	let b = getRandomColor();
	color1.value = a;
	color2.value = b;
	body.style.background = 
	"linear-gradient(to right, " 
	+ a 
	+ ", " 
	+ b 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    else if (/android/i.test(userAgent)) {
        return "Android";
    }

    
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    else if (/Windows XP|Windows NT 6.0|Windows NT 6.1|Windows NT 6.2|WOW64|Windows 10.0|Windows NT 10.0/.test(userAgent)) {
        return "Windows";
    }

	else if (/Linux|X11/.test(userAgent)) {
        return "Linux";
    }

    else if (/Mac_PowerPC|Macintosh/.test(userAgent)) {
        return "MacOS";
    }

    return "unknown";
}

function myFunction() { 
     if(navigator.userAgent.indexOf("OPR") != -1 ) 
    {
        return('Opera');
    }
    else if(navigator.userAgent.indexOf("Edge") != -1 ) 
    {
         return('Edge');
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        return('Chrome');
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        return('Safari');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
         return('Firefox');
    }
        else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
      return('IE'); 
    }  
    else 
    {
       return('unknown');
    }
    }


function getScreenSize() {
  let ratio = window.devicePixelRatio || 1;
  let width = screen.width*ratio; 
  let height = screen.height*ratio; 
  let screenSize = (width + "*" + height);
  return screenSize;
}
function getAvaliableScreenSize() {
  let ratio = window.devicePixelRatio || 1;
  let width = screen.availWidth*ratio;  
  let height = screen.availHeight*ratio;  
  let screenSize = (width + "*" + height);
  return screenSize;
}

function screenOrientation() {
  if (screen.width > screen.height) {
    let orientation = "Horizontal";
    return orientation;
  } else if (screen.width < screen.height) {
    let orientation = "Vertical";
    return orientation;
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

body.onload = setRandomBackground();

generate.addEventListener("click", setRandomBackground);

document.write("Your OS is: " + getOperatingSystem() 
  + "<br/>" + 
  "Your browser is: " + myFunction() 
  + "<br/>" +
  "Device screen resolution: " + getScreenSize()
  + "<br/>" +  
  getAvaliableScreenSize()
  + "<br/>" +
  "Screen orientation: " + screenOrientation() );
    
console.log(window.navigator);
// document.write("Your browser is: " + myFunction());






