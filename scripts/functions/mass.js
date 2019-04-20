// mcg - microgram
// mg - miligram
// g - gram
// kg - kilogram
// q - quintal
// t - tonne
// oz - ounce
// lb - pounds

// functions to convert tonne into other units
function tToKg(t) {
	return t * 1000;
}

function tToG(t) {
	return t * 1e+6;
}	

function tToMg(t) {
	return t * 1e+9;
}

function tToMicrog(t) {
	return t * 1e+12;
}

function tToQ(t) {
	return t * 10;
}

function tToLb(t) {
	return t * 2204.623;
}

function tToOz(t) {
	return t * 35273.962;
}

// functions to convert kilogram into other units
function kgToT(kg) {
	return kg / 1000;
}

function kgToG(kg) {
	return kg * 1000;
}

function kgToMg(kg) {
	return kg * 1e+6;
}

function kgToMicrog(kg) {
	return kg * 1e+9;
}

function kgToQ(kg) {
	return kg / 100;
}

function kgToLb(kg) {
	return kg * 2.205;
}

function kgToOz(kg) {
	return kg * 35.274;
}

// functions to convert gram into other units
function gToT(g) {
	return g / 1e+6 ;
}

function gToKg(g) {
	return g /1000 ;
}

function gToMg(g) {
	return g * 1000 ;
}

function gToMicrog(g) {
	return g * 1e+6 ;
}

function gToQ(g) {
	return g / 100000 ;
}

function gToLb(g) {
	return g / 453.592 ;
}

function gToOz(g) {
	return g / 28.35 ;
}

// functions to convert miligram into other units
function mgToT(mg) {
	return mg / 1e+9;
}

function mgToKg(mg) {
	return mg / 1e+6;
}

function mgToG(mg) {
	return mg / 1000;
}

function mgToMicrog(mg) {
	return mg * 1000;
}

function mgToQ(mg) {
	return mg / 1e+8;
}

function mgToLb(mg) {
	return mg / 453592.37;
}

function mgToOz(mg) {
	return mg / 28349.523;
}

// functions to convert microgram into other units
function mcgToT(microg) {
	return microg / 1e+12;
}

function mcgToKg(microg) {
	return microg / 1e+9;
}

function mcgToG(microg) {
	return microg / 1e+6;
}

function mcgToMg(microg) {
	return microg / 1000;
}

function mcgToQ(microg) {
	return microg / 1e+11;
}

function mcgToLb(microg) {
	return microg / 4.536e+8;
}

function mcgToOz(microg) {
	return microg / 2.835e+7 ;
}

// functions to convert quintal to other units
function qToT(quintal) {
	return quintal / 10;
}

function qToKg(quintal) {
	return quintal * 100;
}

function qToG(quintal) {
	return quintal * 100000;
}

function qToMg(quintal) {
	return quintal * 1e+8;
}

function qToMicrog(quintal) {
	return quintal * 1e+11;
}

function qToLb(quintal) {
	return quintal * 220.462;
}

function qToOz(quintal) {
	return quintal * 3527.396;
}

//functions to convert Pounds to other units
function lbToT(pounds) {
	return pounds / 2204.623;
}

function lbToKg(pounds) {
	return pounds * 2.205;
}

function lbToG(pounds) {
	return pounds * 453.592;
}

function lbToMg(pounds) {
	return pounds * 453592.37;
}

function lbToMicrog(pounds) {
	return pounds * 4.536e+8;
}

function lbToQ(pounds) {
	return pounds / 220.462;
}

function lbToOz(pounds) {
	return pounds * 16;
}

//functions to convert ounce to other units
function ozToT(ounce) {
	return ounce / 35273.962;
}

function ozToKg(ounce) {
	return ounce / 35.274;
}

function ozToG(ounce) {
	return ounce * 28.35;
}

function ozToMg(ounce) {
	return ounce * 28349.523;
}

function ozToMicrog(ounce) {
	return ounce * 2.835e+7;
}

function ozToQ(ounce) {
	return ounce / 3527.396;
}

function ozToLb(ounce) { 
	return ounce / 16;
}