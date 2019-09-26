/* Schrijf javascript hier */
var str = "opleiding";
var lFl = "";
for (var i = 0; i < str.length; i++) {
  var res = str.charAt(i)
  lFl += res + "<br>";
}
document.getElementById("count").innerHTML = lFl;
