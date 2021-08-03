// MIT License
// Copyright (c) 2020 Luis Espino
var counter_a = 0;
var counter_b = 0;

var myArray = [
	"A",
	"B",
];

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

//Visitar los 8 estados
function test(states){
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
      	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
		  
		if (action_result == "CLEAN"){
			if (location == "A"){ 
				states[1] = "CLEAN";
				counter_a++;
				document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado 1 | Paso  " + counter_a.toString());
			}
			else if (location == "B"){ 
				 states[2] = "CLEAN";
				 counter_b++;
				 document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado 2 | Paso  " + counter_b.toString());
			}
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";		
	setTimeout(function(){ test(states); }, 2000);
	
}

function esuciarAlAzar(){
	var random =  myArray[Math.floor(Math.random()*myArray.length)];
	return random;
}

var states = ["A","DIRTY","DIRTY"];
test(states);


/*  
function test(states){
	var counter_a = 0;
	var counter_b = 0;
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
      	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";		
	setTimeout(function(){ test(states); }, 2000);

}

var states = ["A","DIRTY","DIRTY"];
test(states);
*/
