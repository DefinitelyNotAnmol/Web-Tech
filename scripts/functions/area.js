// ac - acre
// mi2 - mile sqaure
// yd2 - yard square
// ft2 - foot square
// in2 - inch square
// ha - hectare
// km2 - kilometer sqaure
// m2 - meter sqaure
// cm2 - centimeter square

// functions to convert centimeter square into something
function cm2toM2(cm) {
	return cm / 0.0001;
}

function cm2toHa(cm) {
	return cm / 1e+8;
}	

function cm2toKm2(cm) {
	return cm / 1e+10;
}

function cm2toIn2(cm) {
	return cm / 6.452;
}

function cm2toFt2(cm) {
	return cm /  929.03;
}

function cm2toYd2(cm) {
	return cm / 8361.274;
}

function cm2toMi2(cm) {
	return cm / 2.59e+10;
}

function cm2toAc(cm) {
	return cm /  4.047e+7;
}

// functions to convert meter square into something
function m2toCm2(m2) {
	return m2 * 10000;
}

function m2toHa(m2) {
	return m2 / 10000;
}	

function m2toKm2(m2) {
	return m2 / 1e+6;
}

function m2toIn2(m2) {
	return m2 * 1550.003;
}

function m2toFt2(m2) {
	return m2 * 10.764;
}

function m2toYd2(m2) {
	return m2 * 1.196;
}

function m2toMi2(m2) {
	return m2 / 2.59e+6	;
}

function m2toAc(m2) {
	return m2 /  4046.856;
}

// functions to convert kilometer square into something
function km2toCm2(km2) {
	return km2 * 1e+10;
}

function km2toHa(km2) {
	return km2 * 100;
}	

function km2tom2(km2) {
	return km2 *  1e+6;
}

function km2toIn2(km2) {
	return km2 * 1.55e+9;
}

function km2toFt2(km2) {
	return km2 * 1.076e+7;
}

function km2toYd2(km2) {
	return km2 * 1.196e+6;
}

function km2toMi2(km2) {
	return km2 / 2.59;
}

function km2toAc(km2) {
	return km2 * 247.105;
}

// functions to convert hectare into something
function hatoCm2(hac) {
	return hac * 1e+8;
}

function hatoKm2(hac) {
	return hac / 100;
}	

function hatoM2(hac) {
	return hac /  1000;
}

function hatoIn2(hac) {
	return hac * 1.55e+7;
}

function hatoFt2(hac) {
	return hac * 107639.104;
}

function hatoYd2(hac) {
	return hac * 11959.9;
}

function hatoMi2(hac) {
	return hac / 258.999;
}

function hatoAc(hac) {
	return hac * 2.471;
}

// functions to convert inch square into something
function in2toCm2(in2) {
	return in2 * 6.452;
}

function in2toKm2(in2) {
	return in2 /  1.55e+9;
}	

function in2toM2(in2) {
	return in2 /  1550.003;
}

function in2toHa(in2) {
	return in2 *  1.55e+7;
}

function in2toFt2(in2) {
	return in2 / 144;
}

function in2toYd2(in2) {
	return in2 /  1296;
}

function in2toMi2(in2) {
	return in2 / 4.014e+9;
}

function in2toAc(in2) {
	return in2 / 6.273e+6;
}

// functions to convert foot square into something
function ft2toCm2(ft2) {
	return ft2 * 929.03;
}

function ft2toKm2(ft2) {
	return ft2 /  1.076e+7;
}	

function ft2toM2(ft2) {
	return ft2 /  10.764;
}

function ft2toHa(ft2) {
	return ft2 / 107639.104;
}

function ft2toIn2(ft2) {
	return ft2 * 144;
}

function ft2toYd2(ft2) {
	return ft2 /  9;
}

function ft2toMi2(ft2) {
	return ft2 / 2.788e+7;
}

function ft2toAc(ft2) {
	return ft2 / 43560;
}

// functions to convert yard square into something
function yd2toCm2(yd2) {
	return yd2 * 8361.274;
}

function yd2toKm2(yd2) {
	return yd2 /  1.196e+6;
}	

function yd2toM2(yd2) {
	return yd2 /  1.196;
}

function yd2toHa(yd2) {
	return yd2 / 11959.9;
}

function yd2toIn2(yd2) {
	return yd2 * 1296;
}

function yd2toFt2(yd2) {
	return yd2 *  9;
}

function yd2toMi2(yd2) {
	return yd2 /  3.098e+6;
}

function yd2toAc(yd2) {
	return yd2 /  4840;
}

// functions to convert mile square into something
function mi2toCm2(mi2) {
	return mi2 * 2.59e+10;
}

function mi2toKm2(mi2) {
	return mi2 *   2.59;
}	

function mi2toM2(mi2) {
	return mi2 *  2.59e+6;
}

function mi2toHa(mi2) {
	return mi2 * 258.999;
}

function mi2toIn2(mi2) {
	return mi2 * 4.014e+9;
}

function mi2toFt2(mi2) {
	return mi2 *   2.788e+7;
}

function mi2toYd2(mi2) {
	return mi2 * 3.098e+6;
}

function mi2toAc(mi2) {
	return mi2 * 640;
}

// functions to convert acre into something
function actoCm2(ac) {
	return ac * 4.047e+7;
}

function actoKm2(ac) {
	return ac / 247.105;
}	

function actoM2(ac) {
	return ac * 4046.856;
}

function actoHa(ac) {
	return ac / 2.471;
}

function actoIn2(ac) {
	return ac * 6.273e+6;
}

function actoFt2(ac) {
	return ac * 43560;
}

function actoYd2(ac) {
	return ac * 4840;
}

function actoMi2(ac) {
	return ac / 640;
}