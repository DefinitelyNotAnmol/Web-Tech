// cm - centimeter
// in - inch
// m - meter 
// mm - milimeter
// km - kilometer
// ft - feet
// yd - yard
// mi - mile
// nm - Nautical Mile

// functions to convert centimeter into something
function cmToIn(cm) {
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

function cmToFt(cm) {
	return cm / 30.48;
}

function cmToYd(cm) {
	return cm / 91.44;
}

function cmToMi(cm) {
	return cm / 160934.4;
}

function cmToNm(cm) {
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

function mmToIn(mm) {
	return mm / 25.4;
}

function mmToFt(mm) {
	return mm / 304.8;
}

function mmToYd(mm) {
	return mm / 914.4;
}

function mmToMi(mm) {
	return mm / 6.213711922e-7; //for an approximate answer
}

function mmToNm(mm) {
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

function mToIn(meter) {
	return meter * 39.37;
}

function mToFt(meter) {
	return meter * 3.281; //for an approximate answer
}

function mToYd(meter) {
	return meter * 1.094; //for an approximate answer
}

function mToMi(meter) {
	return meter / 1609.344;
}

function mToNm(meter) {
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

function kmToIn(km) {
	return km * 39370.070; //for an approximate answer
}

function kmToFt(km) {
	return km * 3280.84;
}

function kmToYd(km) {
	return km * 1093.613;
}

function kmToMi(km) {
	return km / 1.609;
}

function kmToNm(km) {
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

function inToFt(inch) {
	return inch / 12;
}

function inToYd(inch) {
	return inch / 36 ;
}

function inToMi(inch) {
	return inch / 63360;
}

function inToNm(inch) {
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
	return feet / 3.281;
}

function ftToKm(feet) {
	return feet / 3280.84;
}

function ftToIn(feet) {
	return feet * 12;
}

function ftToYd(feet) {
	return feet / 3 ;
}

function ftToMi(feet) {
	return feet / 5280;
}

function ftToNm(feet) {
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

function ydToIn(yards) {
	return yards * 36;
}

function ydToFt(yards) {
	return yards * 3 ;
}

function ydToMi(yards) {
	return yards / 1760;
}

function ydToNm(yards) {
	return yards / 2025.372; //for an approx. answer
}

//conversion of miles into something
function miToMm(miles) {
	return miles * 1.609e+6;
}

function miToCm(miles) {
	return miles * 160934.4;
}

function miToM(miles) {
	return miles * 1609.344;
}

function miToKm(miles) {
	return miles * 1.609;
}

function miToIn(miles) {
	return miles * 63360;
}

function miToFt(miles) {
	return miles * 5280;
}

function miToYd(miles) {
	return miles * 1760;
}

function miToNm(miles) {
	return miles / 1.151; //for an approx. answer
}

//conversion for nautical miles into something
function nmToMm(Nm) {
	return Nm * 1.852e+6;
}

function nmToCm(Nm) {
	return Nm * 185200;
}

function nmToM(Nm) {
	return Nm * 1852;
}

function nmToKm(Nm) {
	return Nm * 1.852;
}

function nmToIn(Nm) {
	return Nm * 72913.386;
}

function nmToFt(Nm) {
	return Nm * 6076.12;
}

function nmToYd(Nm) {
	return Nm * 2025.372;
}

function nmToMi(Nm) {
	return Nm * 1.151; //for an approx. answer
}
