/* Schrijf javascript hier */
const huis = {
  inhoud: "450m³",
  oppervlakte: "100m²",
  plaats: "Assen",
  soortWoning: "vrijstaand huis"
};

document.getElementById('inhoud').innerHTML = (huis.inhoud);
document.getElementById('oppervlakte').innerHTML = (huis.oppervlakte);
document.getElementById('plaats').innerHTML = (huis.plaats);
document.getElementById('soortWoning').innerHTML = (huis.soortWoning);
