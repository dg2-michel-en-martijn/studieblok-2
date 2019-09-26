/* Schrijf javascript hier */
var zin = "applicatie ontwikkelaar";

document.getElementById('len').innerHTML = "String lengte: " + zin.length;
document.getElementById('index').innerHTML = "Locatie van 'ontwikkelaar': " + zin.indexOf("ontwikkelaar");
document.getElementById('checkfor').innerHTML = zin.search("wikkelaar");
document.getElementById('slice').innerHTML = zin.slice(14,17)
function Functie() {
  var str = document.getElementById('progr').innerHTML;
  var replace = str.replace("Ontwikkelaar", "Programmeur");
  document.getElementById('progr').innerHTML = replace;
}
document.getElementById('app').innerHTML = zin.toUpperCase();
