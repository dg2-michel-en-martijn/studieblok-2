/* Schrijf javascript hier */
var namen = new Array();
namen[0] = "Zoe";
namen[1] = "Bram";
namen[2] = "Clarissa";
namen[3] = "Isa";
namen[4] = "Gerrie";

var naamtekst = "";
//Eigen naam toevegen
namen.push("Martijn");

for(i = 0; i < namen.length; i++) {
  //invullen van variabele naamtekst
  naamtekst += namen[i] + "<br>";
}
document.getElementById('naam').innerHTML = naamtekst;

var i = 0;
var tekst = "";

while (namen[i]) {
  // invullen van de variabele tekst
  tekst += namen[i] + "<br>";
  i++;
}
document.getElementById('while').innerHTML = tekst;

//Zet de array om in een string waardoor er automatisch een komma in staat.
document.getElementById('nTostring').innerHTML = namen.toString();

//lengte array
document.getElementById('arraylength').innerHTML = namen.length;

//Laat namen zien met # er tussen
document.getElementById('allname').innerHTML = namen.join("#");

//Alfabetisch gesorteerd
document.getElementById('alphabet').innerHTML = namen.sort();
