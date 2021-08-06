// MIT License
// Copyright (c) 2020 Luis Espino

//contadores a
var counter_vacum_a_sucio_b_sucio = 0; 			//estado1
var counter_vacum_a_sucio_b_limpio = 0; 		//estado2
var counter_vacum_a_limpio_b_sucio = 0;			//estado3
var counter_vacum_a_limpio_b_limpio = 0;		//estado4

//contadores b
var counter_vacum_b_sucio_a_sucio = 0;			//estado5
var counter_vacum_b_limpio_a_sucio = 0;			//estado6
var counter_vacum_b_sucio_a_limpio = 0;			//estado7
var counter_vacum_b_limpio_a_limpio = 0;		//estado8

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
			if (location == "A"){ //SE ENCUENTRA EN A
				if(states[1] = "CLEAN") { //A -> Limpio
					if(states[2]== "DIRTY"){ //B -> Sucio
						counter_vacum_a_limpio_b_sucio++;
						document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado 3 | Paso  " + counter_vacum_a_limpio_b_sucio.toString());		
					}
					else{// B -> Limpio 
						counter_vacum_a_limpio_b_limpio++;
						document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado 4 | Paso  " + counter_vacum_a_limpio_b_limpio.toString());
					}
					
				}
				else{// A -> Sucio 
					if(states[2]== "DIRTY"){ //B -> Sucio
						counter_vacum_a_sucio_b_sucio++;
						document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado 1 | Paso  " + counter_vacum_a_sucio_b_sucio.toString());		
					}
					else{// B -> Limpio 
						counter_vacum_a_sucio_b_limpio++;
						document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado 2 | Paso  " + counter_vacum_a_sucio_b_limpio.toString());
					}
				}
				
				
			}
			
			
			else if (location == "B"){ //SE ENCUENTRA EN B
				 states[2] = "CLEAN";
				 
				 document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado 2 | Paso  " + counter_vacum_b_limpio_a_limpio.toString());
			}
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";
		
		if(estadosA && estadosB){
			document.getElementById("log").innerHTML+="<br> Ya se entro a todos los estados 2 o mas veces!";
		}  

	setTimeout(function(){ test(states); }, 500);
	
}

function esuciarAlAzar(){
	var random =  myArray[Math.floor(Math.random()*myArray.length)];
	return random;
}

function estadosA(){
	if (counter_vacum_a_sucio_b_sucio >= 2 && counter_vacum_a_sucio_b_limpio >=2 &&  counter_vacum_a_limpio_b_sucio >=2 && counter_vacum_a_limpio_b_limpio >= 2) return true;
	return false;
}
function estadosB(){
	if (counter_vacum_b_sucio_a_sucio >= 2 && counter_vacum_b_limpio_a_sucio >=2 && counter_vacum_b_sucio_a_limpio >=2 && counter_vacum_b_limpio_a_limpio >= 2) return true;
	return false;
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
