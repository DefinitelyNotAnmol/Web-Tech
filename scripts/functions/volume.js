// ml - mililitre
// ltr - litre
// cubicIn - cubic inch
// cubicFt - cubic feet
// cubicM - cubic meter
// qt - quart
// pt - pint
// gal - gallon

// functions to convert mililitre into other units
function mlToLtr(ml) {
	return ml / 1000;
}

function mlToCubicM(ml) {
	return ml / 1e+6;
}

function mlToCubicFt(ml) {
	return ml / 28316.847;
}

function mlToCubicIn(ml) {
	return ml / 16.387;
}

function mlToPt(ml) {
	return ml / 568.261;
}

function mlToQt(ml) {
	return ml / 1136.522;
}

function mlToGal(ml) {
	return ml / 4546.09;
}

//functions to convert litre into other units
function ltrToMl(ltr) {
	return ltr * 1000;
}

function ltrToCubicM(ltr) {
	return ltr * 1000;
}

function ltrToCubicFt(ltr) {
	return ltr / 28.317;
}

function ltrToCubicIn(ltr) {
	return ltr * 61.024;
}

function ltrToPt(ltr) {
	return ltr * 1.76;
}

function ltrToQt(ltr) {
	return ltr / 1.137;
}

function ltrToGal(ltr) {
	return ltr / 4.546;
}

//functions to convert cubic meter into other units
function cubicMToMl(cubicmtr) {
	return cubicmtr * 1e+6;
}

function cubicMToLtr(cubicmtr) {
	return cubicmtr * 1000;
}

function cubicMToCubicFt(cubicmtr) {
	return cubicmtr * 35.315;
}

function cubicMToCubicIn(cubicmtr) {
	return cubicmtr * 61023.744;
}

function cubicMToPt(cubicmtr) {
	return cubicmtr * 1759.754;
}

function cubicMToQt(cubicmtr) {
	return cubicmtr * 879.877;
}

function cubicMToGal(cubicmtr) {
	return cubicmtr * 219.969;
}

// functions to convert Cubic feet into other units
function cubicFtToMl(cubicft) {
	return cubicft * 28316.847;
}

function cubicFtToLtr(cubicft) {
	return cubicft * 28.317;
}

function cubicFtToCubicM(cubicft) {
	return cubicft * 35.315;
}

function cubicFtToCubicIn(cubicft) {
	return cubicft * 1728;
}

function cubicFtToPt(cubicft) {
	return cubicft * 49.831;
}

function cubicFtToQt(cubicft) {
	return cubicft * 24.915;
}

function cubicFtToGal(cubicft) {
	return cubicft * 6.229;
}

//functions to convert cubicinch to other units
function cubicInToMl(cubicinch) {
	return cubicinch * 16.387;
}

function cubicInToLtr(cubicinch) {
	return cubicinch / 61.024;
}

function cubicInToCubicM(cubicinch) {
	return cubicinch / 61023.744;
}

function cubicInToCubicFt(cubicinch) {
	return cubicinch / 1728;
}

function cubicInToPt(cubicinch) {
	return cubicinch / 34.677;
}

function cubicInToQt(cubicinch) {
	return cubicinch / 69.335;
}

function cubicInToGal(cubicinch) {
	return cubicinch / 277.419;
}

//functions to convert pint to other units
function ptToMl(pint) {
	return pint * 568.261;
}

function ptToLtr(pint) {
	return pint / 1.76;
}

function ptToCubicM(pint) {
	return pint / 1759.754;
}

function ptToCubicFt(pint) {
	return pint / 49.831;
}

function ptToCubicIn(pint) {
	return pint * 34.677;
}

function ptToQt(pint) {
	return pint / 2;
}

function ptToGal(pint) {
	return pint / 8;
}

//functions to convert quart to other units
function qtToMl(quart) {
	return quart * 1136.522;
}

function qtToLtr(quart) {
	return quart * 1.137;
}

function qtToCubicM(quart) {
	return quart / 879.877;
}

function qtToCubicIn(quart) {
	return quart * 69.335;
}

function qtToCubicFt(quart) {
	return quart / 24.915;
}

function qtToPt(quart) {
	return quart * 2;
}

function qtToGal(quart) {
	return quart / 4;
}

//functions to convert gallon to other units
function galToMl(gallon) {
	return gallon  * 4546.09;
}

function galToLtr(gallon) {
	return gallon  * 4.546;
}

function galToCubicM(gallon) {
	return gallon  / 219.969;
}

function galToCubicIn(gallon) {
	return gallon  * 277.419;
}

function galToCubicFt(gallon) {
	return gallon  / 6.229;
}

function galToPt(gallon) {
	return gallon  * 8;
}

function galToQt(gallon) {
	return gallon  * 4;
}