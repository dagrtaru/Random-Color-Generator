var low = document.getElementById("lo");
var high = document.getElementById("hi");

var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);		//converts the given number to base 16 eqivalent
  if (hex.length < 2) {						//if size is less than 2 we add a 0 in front 
       hex = "0" + hex;
  }
  return hex;
};

var fullColorHex = function(r,g,b) { 
  //converting individual colours to hex
  var red = rgbToHex(r);					
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};

function generate(){
	//var res = low.value + Math.floor(Math.random() * (high.value + 1 - low.value));
	var res = Math.random();					//we generate a random number
	var str = res.toString();					//convert the number to string
	//Here all the individual three consecutive 2-character strings are extracted
	var r = parseInt(str.substring(2, 4));
	var g = parseInt(str.substring(4, 6));
	var b = parseInt(str.substring(6, 8));
	document.getElementById("canvas").style.backgroundColor = fullColorHex(r,g,b);
}

generate();