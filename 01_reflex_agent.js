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
	if(!(estadosA() && estadosB())){
      	var location = states[0];		
		  var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
      	//document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
		  if (location == "A"){ //SE ENCUENTRA EN A
			if(states[1] == "CLEAN") { //A -> Limpio
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
			 if(states[2] == "CLEAN"){ //B-> Limpio
				if(states[1]=="DIRTY"){//A-> Sucio
					counter_vacum_b_limpio_a_sucio++;
					document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado 6 | Paso  " + counter_vacum_b_limpio_a_sucio.toString());		
				}
				else{//	A-> Limpio
					counter_vacum_b_limpio_a_limpio++;
					document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado 8 | Paso  " + counter_vacum_b_limpio_a_limpio.toString());
				}
			 }
			 else{ //	B -> Sucio
				if(states[1]=="DIRTY"){//A-> Sucio
					counter_vacum_b_sucio_a_sucio++;
					document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado 5 | Paso  " + counter_vacum_b_sucio_a_sucio.toString());		
				}
				else{//	A-> Limpio
					counter_vacum_b_sucio_a_limpio++;
					document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado 7 | Paso  " + counter_vacum_b_sucio_a_limpio.toString());
				}
			 }
			} 
		if (action_result == "CLEAN"){
			//document.getElementById("log").innerHTML+="<br>eligio: " + esuciarAlAzar();
			if (location == "A"){ //SE ENCUENTRA EN A
				states[1] = "CLEAN";
			}
			else if (location == "B"){ //SE ENCUENTRA EN B
				states[2] = "CLEAN";
			}
		  }
		 else if (action_result == "RIGHT") states[0] = "B";
      	 else if (action_result == "LEFT") states[0] = "A";
	setTimeout(function(){ test(states); }, 10);
	esuciarAlAzar();
		  }
		  else {
			document.getElementById("log").innerHTML+="<br> Ya se entro a todos los estados 2 o mas veces!";
			alert("Ya se entro a todos los estados 2 o mas veces!");
			throw new Error('This is not an error. This is just to abort javascript');
		}
	
}

function esuciarAlAzar(){
	//var random =  Math.floor(Math.random() * myArray.length);
	var random =  Math.floor(Math.random() * 10);
	//Ensuciar A 8-10
	//Ensuciar B 5-7
	//Ensuciar AMBOS 3-4
	//NADA 1-2
	var ensucio = "";
	if(random>=0 & random <=2){
		ensucio = "NADA";
	}
	else if(random>2 & random <=4){
		states[1] ="DIRTY";
		states[2] = "DIRTY";
		ensucio = "AMBOS";
	}
	else if(random>5 & random <=7){
		states[2] = "DIRTY";
		ensucio = "B";
	}
	else {
		states[1] = "DIRTY";
		ensucio = "A";
	}

	document.getElementById("log").innerHTML+="<br>Ensuciando: "+ensucio;
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
