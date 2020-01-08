document.getElementById("one").addEventListener("click", function(){insertNumber(1);});
document.getElementById("two").addEventListener("click", function(){insertNumber(2);});
document.getElementById("three").addEventListener("click", function(){insertNumber(3);});
document.getElementById("four").addEventListener("click", function(){insertNumber(4);});
document.getElementById("five").addEventListener("click", function(){insertNumber(5);});
document.getElementById("six").addEventListener("click", function(){insertNumber(6);});
document.getElementById("seven").addEventListener("click", function(){insertNumber(7);});
document.getElementById("eight").addEventListener("click", function(){insertNumber(8);});
document.getElementById("nine").addEventListener("click", function(){insertNumber(9);});
document.getElementById("zero").addEventListener("click", function(){insertNumber(0);});
document.getElementById("point").addEventListener("click", function(){insertNumber(".");});

function insertNumber(number){
	var string = document.getElementById("result").innerHTML;
	if((string.includes(".") && (number == ".")))
		return;
	if ((string.startsWith("0")) && (string.length == 1) && (number != '.'))
		return;
	return document.getElementById("result").insertAdjacentText("beforeend", number);
};

var myOperators = document.getElementsByClassName("operator");

for (var i = 0; i < myOperators.length; i++) {
	myOperators[i].addEventListener("click", disableInput);
	myOperators[i].addEventListener("click", function(){storeInput(this.id);});
}

function disableInput(){
	 document.getElementById("plus").className += " disabled";
	 document.getElementById("minus").className += " disabled";
	 document.getElementById("times").className += " disabled";
	 document.getElementById("division").className += " disabled";	 
};

var result = 0;
var whichOperation = " ";

function storeInput(operation){
	var stringResult = document.getElementById("result").innerHTML;
	result = parseFloat(stringResult);
	whichOperation = operation;

	document.getElementById("result").innerHTML = "";
	
	return; 
};
// Displaying results
document.getElementById("equals").addEventListener("click", calculate);
function calculate(){
	var firstValue = result;
	var secondValueString = document.getElementById("result").innerHTML;
	var secondValue = parseFloat(secondValueString);
	result = calculation(firstValue, secondValue, whichOperation);
	outputValue = result.toString();
	return document.getElementById("result").innerHTML = outputValue;
};
// Calculations based on selected operator
function calculation (first, second, operator) {
	operator = whichOperation;
	if (operator == "plus")
		return first + second;
	if (operator == "minus")
		return first - second;
	if (operator == "times")
		return first * second;
	if (operator == "division")
		return first / second;
	return NaN;
};

document.getElementById("reset").addEventListener("click", function()
{
	result = 0;
	whichOperation = " ";
	document.getElementById("plus").classList.remove("disabled");
	document.getElementById("minus").classList.remove("disabled");
	document.getElementById("times").classList.remove("disabled");
	document.getElementById("division").classList.remove("disabled");
	document.getElementById("result").innerHTML = "";
});