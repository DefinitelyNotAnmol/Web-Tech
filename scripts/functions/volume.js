// gallon - gallon
// quart - quart
// pint - pint
// cubicInch - cubic inch
// cubicFt - cubic feet
// cubicM - cubic meter
// ltr - litre
// ml - mililitre

// functions to convert mililitre into other units
function mlToLtr(ml) {
	return ml / 1000;
}

function mlToCubicM(ml) {
	return ml / 1e+6 ;
}

function mlToCubicFt(ml) {
	return ml / 28316.847;
}

function mlToCubicInch(ml) {
	return ml / 16.387;
}

function mlToPint(ml) {
	return ml / 568.261;
}

function mlToQuart(ml) {
	return ml / 1136.522;
}

function mlToGallon(ml) {
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

function ltrToCubicInch(ltr) {
	return ltr * 61.024;
}

function ltrToPint(ltr) {
	return ltr * 1.76 ;
}

function ltrToQuart(ltr) {
	return ltr / 1.137 ;
}

function ltrToGallon(ltr) {
	return ltr / 4.546;
}

//functions to convert cubic meter into other units
function cubicMToMl(cubicmtr) {
	return cubicmtr * 1e+6 ;
}

function cubicMToLtr(cubicmtr) {
	return cubicmtr * 1000;
}

function cubicMToCubicFt(cubicmtr) {
	return cubicmtr * 35.315 ;
}

function cubicMToCubicInch(cubicmtr) {
	return cubicmtr * 61023.744 ;
}

function cubicMToPint(cubicmtr) {
	return cubicmtr * 1759.754;
}

function cubicMToQuart(cubicmtr) {
	return cubicmtr * 879.877 ;
}

function cubicMToGallon(cubicmtr) {
	return cubicmtr * 219.969 ;
}

// functions to convert Cubic feet into other units
function cubicFtToMl(cubicft) {
	return cubicft * 28316.847 ;
}

function cubicFtToLtr(cubicft) {
	return cubicft * 28.317;
}

function cubicFtToCubicM(cubicft) {
	return cubicft * 35.315 ;
}

function cubicFtToCubicInch(cubicft) {
	return cubicft * 1728 ;
}

function cubicFtToPint(cubicft) {
	return cubicft * 49.831 ;
}

function cubicFtToQuart(cubicft) {
	return cubicft * 24.915;
}

function cubicFtToGallon(cubicft) {
	return cubicft * 6.229 ;
}

//functions to convert cubicinch to other units
function cubicInchToMl(cubicinch) {
	return cubicinch * 16.387 ;
}

function cubicInchToLtr(cubicinch) {
	return cubicinch / 61.024 ;
}

function cubicInchToCubicM(cubicinch) {
	return cubicinch / 61023.744 ;
}

function cubicInchToCubicFt(cubicinch) {
	return cubicinch / 1728 ;
}

function cubicInchToPint(cubicinch) {
	return cubicinch / 34.677 ;
}

function cubicInchToQuart(cubicinch) {
	return cubicinch / 69.335 ;
}

function cubicInchToGallon(cubicinch) {
	return cubicinch / 277.419 ;
}

//functions to convert pint to other units
function pintToMl(pint) {
	return pint * 568.261;
}

function pintToLtr(pint) {
	return pint / 1.76;
}

function pintToCubicM(pint) {
	return pint / 1759.754;
}

function pintToCubicFt(pint) {
	return pint / 49.831 ;
}

function pintToCubicInch(pint) {
	return pint * 34.677 ;
}

function pintToQuart(pint) {
	return pint / 2;
}

function pintToGallon(pint) {
	return pint / 8 ;
}

//functions to convert quart to other units
function quartToMl(quart) {
	return quart * 1136.522;
}

function quartToLtr(quart) {
	return quart * 1.137;
}

function quartToCubicM(quart) {
	return quart / 879.877;
}

function quartToCubicInch(quart) {
	return quart * 69.335 ;
}

function quartToCubicFt(quart) {
	return quart / 24.915 ;
}

function quartToPint(quart) {
	return quart * 2 ;
}

function quartToGallon(quart) {
	return quart / 4 ;
}

//functions to convert gallon to other units
function gallonToMl(gallon) {
	return gallon  * 4546.09 ;
}

function gallonToLtr(gallon) {
	return gallon  * 4.546 ;
}

function gallonToCubicM(gallon) {
	return gallon  / 219.969 ;
}

function gallonToCubicInch(gallon) {
	return gallon  * 277.419 ;
}

function gallonToCubicFt(gallon) {
	return gallon  / 6.229 ;
}

function gallonToPint(gallon) {
	return gallon  * 8 ;
}

function gallonToQuart(gallon) {
	return gallon  * 4 ;
}