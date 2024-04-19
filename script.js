document.getElementById("btn").addEventListener("click", sphereCalc);

function sphereCalc() {
  var rSphere = +document.getElementById("rSphere").value;
  var spDCP = +document.getElementById("sphereDCP").value;
  var saSp = 4 * Math.PI * rSphere ** 2;
  saSp = saSp.toFixed(spDCP);
  var vSp = 4 * Math.PI * rSphere ** 3;
  vSp = vSp / 3;
  vSp = vSp.toFixed(spDCP);
  document.getElementById("saSphere").innerHTML = saSp;
  document.getElementById("vSphere").innerHTML = vSp;
  document.getElementById("rSphere").value = "";
  document.getElementById("sphereDCP").value = "";
  document.getElementById("saSphere").classList.add("active");
  document.getElementById("vSphere").classList.add("active");
}

document.getElementById("btn2").addEventListener("click", cylinderCalc);

function cylinderCalc() {
  var rCylinder = +document.getElementById("rCylinder").value;
  var hCylinder = +document.getElementById("hCylinder").value;
  var dcpCylinder = +document.getElementById("cylinderDCP").value;
  var sCylinder =
    2 * Math.PI * rCylinder ** 2 + 2 * Math.PI * rCylinder * hCylinder;
  sCylinder = sCylinder.toFixed(dcpCylinder);
  var voCylinder = Math.PI * rCylinder ** 2 * hCylinder;
  voCylinder = voCylinder.toFixed(dcpCylinder);
  document.getElementById("saCylinder").innerHTML = sCylinder;
  document.getElementById("vCylinder").innerHTML = voCylinder;
  document.getElementById("rCylinder").value = "";
  document.getElementById("hCylinder").value = "";
  document.getElementById("cylinderDCP").value = "";
  document.getElementById("saCylinder").classList.add("active");
  document.getElementById("vCylinder").classList.add("active");
}

document.getElementById("btn3").addEventListener("click", coneCalc);

function coneCalc() {
  var rCone = +document.getElementById("rCone").value;
  var hCone = +document.getElementById("hCone").value;
  var dcpCone = +document.getElementById("coneDCP").value;
  var slCone = +document.getElementById("slCone").value;
  var sCone = Math.PI * rCone ** 2 + Math.PI * rCone * slCone;
  sCone = sCone.toFixed(dcpCone);
  var voCone = (Math.PI * rCone ** 2 * hCone) / 3;
  voCone = voCone.toFixed(dcpCone);
  document.getElementById("saCone").innerHTML = sCone;
  document.getElementById("vCone").innerHTML = voCone;
  document.getElementById("rCone").value = "";
  document.getElementById("hCone").value = "";
  document.getElementById("coneDCP").value = "";
  document.getElementById("slCone").value = "";
  document.getElementById("saCone").classList.add("active");
  document.getElementById("vCone").classList.add("active");
}

document.getElementById("btn4").addEventListener("click", cubeCalc);

function cubeCalc() {
  var slCube = +document.getElementById("slCube").value;
  var cubeDCP = +document.getElementById("cubeDCP").value;
  var saCube = 6 * slCube ** 2;
  saCube = saCube.toFixed(cubeDCP);
  var vCube = slCube ** 3;
  vCube = vCube.toFixed(cubeDCP);
  document.getElementById("saCube").innerHTML = saCube;
  document.getElementById("vCube").innerHTML = vCube;
  document.getElementById("slCube").value = "";
  document.getElementById("cubeDCP").value = "";
  document.getElementById("saCube").classList.add("active");
  document.getElementById("vCube").classList.add("active");
}

document.getElementById("btn5").addEventListener("click", rpCalc);

function rpCalc() {
  var lPrism = +document.getElementById("lrPrism").value;
  var wPrism = +document.getElementById("wrPrism").value;
  var hPrism = +document.getElementById("hrPrism").value;
  var prismDCP = +document.getElementById("rpDCP").value;
  var sarPrism = 2(lPrism + wPrism) + 2(lPrism + hPrism) + 2(wPrism + hPrism);
  sarPrism = sarPrism.toFixed(prismDCP);
  var voPrism = lPrism * wPrism * hPrism;
  voPrism = voPrism.toFixed(prismDCP);
  document.getElementById("saRprism").innerHTML = sarPrism;
  document.getElementById("vRprism").innerHTML = voPrism;
  document.getElementById("lrPrism").value = "";
  document.getElementById("wrPrism").value = "";
  document.getElementById("hrPrism").value = "";
  document.getElementById("rpDCP").value = "";
  document.getElementById("saRprism").classList.add("active");
  document.getElementById("vRprism").classList.add("active");
}

document.getElementById("btn5").addEventListener("click", prismCalc);

function prismCalc() {
  var length = +document.getElementById("lrPrism").value;
  var width = +document.getElementById("wrPrism").value;
  var height = +document.getElementById("hrPrism").value;
  var dcp = +document.getElementById("rpDCP").value;
  var sPrism =
    2 * (length + width) + 2 * (length + height) + 2 * (width + height);
  sPrism = sPrism.toFixed(dcp);
  var vPrism = length * width * height;
  document.getElementById("saPrism").innerHTML = sPrism;
  document.getElementById("vPrisms").innerHTML = vPrism;
  document.getElementById("lrPrism").value = "";
  document.getElementById("wrPrism").value = "";
  document.getElementById("hrPrism").value = "";
  document.getElementById("rpDCP").value = "";
  document.getElementById("saPrism").classList.add("active");
  document.getElementById("vPrisms").classList.add("active");
}
