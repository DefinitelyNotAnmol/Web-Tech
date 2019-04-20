// cm - centimeter
// in - inches
// m - meter
// mm - milimeter
// km - kilometer
// ft - feets
// yd - yards
// mi - miles (mi)
// nm - Nautical Mile

// functions to convert centimeter into something
function cmToInch(cm) {
	return cm * 0.3937;
}

function cmToM(cm) {
	return cm / 100;
}	

function cmToMm(cm) {
	return cm * 10;
}

function cmToKm(cm) {
	return cm / 100000;
}

function cmToFeet(cm) {
	return cm / 30.48;
}

function cmToYards(cm) {
	return cm / 91.44;
}

function cmToMiles(cm) {
	return cm / 160934.4;
}

function cmToNauticalMiles(cm) {
	return cm / 185200;
}

// functions to convert millimeter into something
function mmToCm(mm) {
	return mm / 10;
}

function mmToM(mm) {
	return mm / 1000;
}

function mmToKm(mm) {
	return mm / 1000000;
}

function mmToInch(mm) {
	return mm / 25.4;
}

function mmToFeet(mm) {
	return mm / 304.8;
}

function mmToYards(mm) {
	return mm / 914.4;
}

function mmToMiles(mm) {
	return mm / 6.213711922e-7; //for an approximate answer
}

function mmToNauticalMiles(mm) {
	return mm / 1.852e+6;
}

// functions to convert meter into something
function mToMm(meter) {
	return meter * 1000;
}

function mToCm(meter) {
	return meter * 100;
}

function mToKm(meter) {
	return meter / 1000;
}

function mToInch(meter) {
	return meter * 39.37;
}

function mTofeet(meter) {
	return meter * 3.281; //for an approximate answer
}

function mToYards(meter) {
	return meter * 1.094; //for an approximate answer
}

function mToMiles(meter) {
	return meter / 1609.344;
}

function mToNauticalMiles(meter) {
	return meter / 1852;
}

// functions to convert kilometer into something
function kmToMm(km) {
	return km * 1000000;
}

function kmToCm(km) {
	return km * 100000;
}

function kmToM(km) {
	return km * 1000;
}

function kmToInch(km) {
	return km * 39370.070; //for an approximate answer
}

function kmTofeet(km) {
	return km * 3280.84;
}

function kmToYards(km) {
	return km * 1093.613;
}

function kmToMiles(km) {
	return km / 1.609;
}

function kmToNauticalmiles(km) {
	return km / 1.852;
}

// functions to convert inch into something
function inToMm(inch) {
	return inch * 25.4;
}

function inToCm(inch) {
	return inch * 2.54;
}

function inToM(inch) {
	return inch / 39.37;
}

function inToKm(inch) {
	return inch / 39370.079	; //for an approximate answer
}

function inTofeet(inch) {
	return inch / 12;
}

function inToYards(inch) {
	return inch / 36 ;
}

function inToMiles(inch) {
	return inch / 63360	;
}

function inToNauticalmiles(inch) {
	return inch / 72913.386	; //for an approx. answer
}

//functions to convert feet into something
function ftToMm(feet) {
	return feet * 304.8;
}

function ftToCm(feet) {
	return feet * 30.48;
}

function ftToM(feet) {
	return feet / 3.281	;
}

function ftToKm(feet) {
	return feet / 3280.84;
}

function ftToInch(feet) {
	return feet * 12;
}

function ftToYards(feet) {
	return feet / 3 ;
}

function ftToMiles(feet) {
	return feet / 5280;
}

function ftToNauticalmiles(feet) {
	return feet / 6076.115; //for an approx. answer
}

//conversion of yards into smething
function ydToMm(yards) {
	return yards * 914.4;
}

function ydToCm(yards) {
	return yards * 91.44;
}

function ydToM(yards) {
	return yards / 1.094;
}

function ydToKm(yards) {
	return yards / 1093.613;
}

function ydToInch(yards) {
	return yards * 36;
}

function ydToFeet(yards) {
	return yards * 3 ;
}

function ydToMiles(yards) {
	return yards / 1760;
}

function ydToNauticalmiles(yards) {
	return yards / 2025.372	; //for an approx. answer
}

//conversion of miles into something
function miToMm(miles) {
	return miles * 1.609e+6;
}

function miToCm(miles) {
	return miles * 160934.4	;
}

function miToM(miles) {
	return miles * 1609.344	;
}

function miToKm(miles) {
	return miles * 1.609;
}

function miToInch(miles) {
	return miles * 63360;
}

function miToFeet(miles) {
	return miles * 5280	;
}

function miToYards(miles) {
	return miles * 1760;
}

function miToNauticalmiles(miles) {
	return miles /  1.151; //for an approx. answer
}

//conversion for nautical miles into something
function nmToMm(nauticalmiles) {
	return nauticalmiles * 1.852e+6;
}

function nmToCm(nauticalmiles) {
	return nauticalmiles * 185200;
}

function nmToM(nauticalmiles) {
	return nauticalmiles * 1852	;
}

function nmToKm(nauticalmiles) {
	return nauticalmiles * 1.852;
}

function nmToInch(nauticalmiles) {
	return nauticalmiles * 72913.386;
}

function nmToFeet(nauticalmiles) {
	return nauticalmiles * 6076.12	;
}

function nmToYards(nauticalmiles) {
	return nauticalmiles * 2025.372	;
}

function nmToMiles(nauticalmiles) {
	return nauticalmiles * 1.151; //for an approx. answer
}
