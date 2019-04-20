// ac - acre
// mi2 - mile sqaure
// yd2 - yard square
// ft2 - foot square
// in2 - inch square
// ha - hectare
// km2 - kilometer sqaure
// m2 - meter sqaure
// cm2 - centimeter square

// functions To convert centimeter square inTo something
function cm2ToM2(cm) {
	return cm / 0.0001;
}

function cm2ToHa(cm) {
	return cm / 1e+8;
}	

function cm2ToKm2(cm) {
	return cm / 1e+10;
}

function cm2ToIn2(cm) {
	return cm / 6.452;
}

function cm2ToFt2(cm) {
	return cm /  929.03;
}

function cm2ToYd2(cm) {
	return cm / 8361.274;
}

function cm2ToMi2(cm) {
	return cm / 2.59e+10;
}

function cm2ToAc(cm) {
	return cm /  4.047e+7;
}

// functions To convert meter square inTo something
function m2ToCm2(m2) {
	return m2 * 10000;
}

function m2ToHa(m2) {
	return m2 / 10000;
}	

function m2ToKm2(m2) {
	return m2 / 1e+6;
}

function m2ToIn2(m2) {
	return m2 * 1550.003;
}

function m2ToFt2(m2) {
	return m2 * 10.764;
}

function m2ToYd2(m2) {
	return m2 * 1.196;
}

function m2ToMi2(m2) {
	return m2 / 2.59e+6	;
}

function m2ToAc(m2) {
	return m2 /  4046.856;
}

// functions To convert kilometer square inTo something
function km2ToCm2(km2) {
	return km2 * 1e+10;
}

function km2ToHa(km2) {
	return km2 * 100;
}	

function km2ToM2(km2) {
	return km2 *  1e+6;
}

function km2ToIn2(km2) {
	return km2 * 1.55e+9;
}

function km2ToFt2(km2) {
	return km2 * 1.076e+7;
}

function km2ToYd2(km2) {
	return km2 * 1.196e+6;
}

function km2ToMi2(km2) {
	return km2 / 2.59;
}

function km2ToAc(km2) {
	return km2 * 247.105;
}

// functions To convert hectare inTo something
function haToCm2(hac) {
	return hac * 1e+8;
}

function haToKm2(hac) {
	return hac / 100;
}	

function haToM2(hac) {
	return hac * 10000;
}

function haToIn2(hac) {
	return hac * 1.55e+7;
}

function haToFt2(hac) {
	return hac * 107639.104;
}

function haToYd2(hac) {
	return hac * 11959.9;
}

function haToMi2(hac) {
	return hac / 258.999;
}

function haToAc(hac) {
	return hac * 2.471;
}

// functions To convert inch square inTo something
function in2ToCm2(in2) {
	return in2 * 6.452;
}

function in2ToKm2(in2) {
	return in2 /  1.55e+9;
}	

function in2ToM2(in2) {
	return in2 /  1550.003;
}

function in2ToHa(in2) {
	return in2 *  1.55e+7;
}

function in2ToFt2(in2) {
	return in2 / 144;
}

function in2ToYd2(in2) {
	return in2 /  1296;
}

function in2ToMi2(in2) {
	return in2 / 4.014e+9;
}

function in2ToAc(in2) {
	return in2 / 6.273e+6;
}

// functions To convert foot square inTo something
function ft2ToCm2(ft2) {
	return ft2 * 929.03;
}

function ft2ToKm2(ft2) {
	return ft2 /  1.076e+7;
}	

function ft2ToM2(ft2) {
	return ft2 /  10.764;
}

function ft2ToHa(ft2) {
	return ft2 / 107639.104;
}

function ft2ToIn2(ft2) {
	return ft2 * 144;
}

function ft2ToYd2(ft2) {
	return ft2 /  9;
}

function ft2ToMi2(ft2) {
	return ft2 / 2.788e+7;
}

function ft2ToAc(ft2) {
	return ft2 / 43560;
}

// functions To convert yard square inTo something
function yd2ToCm2(yd2) {
	return yd2 * 8361.274;
}

function yd2ToKm2(yd2) {
	return yd2 /  1.196e+6;
}	

function yd2ToM2(yd2) {
	return yd2 /  1.196;
}

function yd2ToHa(yd2) {
	return yd2 / 11959.9;
}

function yd2ToIn2(yd2) {
	return yd2 * 1296;
}

function yd2ToFt2(yd2) {
	return yd2 *  9;
}

function yd2ToMi2(yd2) {
	return yd2 /  3.098e+6;
}

function yd2ToAc(yd2) {
	return yd2 /  4840;
}

// functions To convert mile square inTo something
function mi2ToCm2(mi2) {
	return mi2 * 2.59e+10;
}

function mi2ToKm2(mi2) {
	return mi2 *   2.59;
}	

function mi2ToM2(mi2) {
	return mi2 *  2.59e+6;
}

function mi2ToHa(mi2) {
	return mi2 * 258.999;
}

function mi2ToIn2(mi2) {
	return mi2 * 4.014e+9;
}

function mi2ToFt2(mi2) {
	return mi2 *   2.788e+7;
}

function mi2ToYd2(mi2) {
	return mi2 * 3.098e+6;
}

function mi2ToAc(mi2) {
	return mi2 * 640;
}

// functions To convert acre inTo something
function acToCm2(ac) {
	return ac * 4.047e+7;
}

function acToKm2(ac) {
	return ac / 247.105;
}	

function acToM2(ac) {
	return ac * 4046.856;
}

function acToHa(ac) {
	return ac / 2.471;
}

function acToIn2(ac) {
	return ac * 6.273e+6;
}

function acToFt2(ac) {
	return ac * 43560;
}

function acToYd2(ac) {
	return ac * 4840;
}

function acToMi2(ac) {
	return ac / 640;
}