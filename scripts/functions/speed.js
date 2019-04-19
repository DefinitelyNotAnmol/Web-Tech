// functions to convert meter per second into something

function mstokmh(ms) {
	return ms * 3.6;
}

function mstomph(ms) {
	return ms * 2.237;
}

function mstofts(ms) {
	return ms * 3.281;
}

function mstokn(ms) {
	return ms * 1.944;
}

function mstoSsound(ms) {
	return ms / 343;
}

function mstoSlight(ms) {
	return ms /  2.998e+8;
}

// functions to convert kilometer per hour into something

function kmhtoMs(kmh) {
	return kmh / 3.6;
}

function kmhtoMph(kmh) {
	return kmh / 1.609;
}

function kmhtoFts(kmh) {
	return kmh / 1.097;
}

function kmhtoKn(kmh) {
	return kmh / 1.852;
}

function kmhtoSsound(kmh) {
	return kmh /  1234.8;
}

function kmhtoSlight(kmh) {
	return kmh /  1.079e+9;
}

// functions to convert miles per hour into something

function mphtoMs(mph) {
	return mph /  2.237;
}

function mphtoKmh(mph) {
	return mph * 1.609;
}

function mphtoFts(mph) {
	return mph * 1.467;
}

function mphtoKn(mph) {
	return mph / 1.151;
}

function mphtoSsound(mph) {
	return mph /  767.269;
}

function mphtoSlight(mph) {
	return mph / 6.706e+8;
}

// functions to convert foot per second into something

function ftstoMs(fts) {
	return fts /  3.281;
}

function ftstoKmh(fts) {
	return fts * 1.097;
}

function ftstoMph(fts) {
	return fts / 1.467;
}

function ftstoKn(fts) {
	return fts / 1.688;
}

function ftstoSsound(fts) {
	return fts /  1125.328;
}

function ftstoSlight(fts) {
	return fts / 9.836e+8;
}

// functions to convert knot into something

function kntoMs(kn) {
	return kn /  1.944;
}

function kntoKmh(kn) {
	return kn * 1.852;
}

function kntoMph(kn) {
	return kn * 1.151;
}

function kntoFts(kn) {
	return kn * 1.688;
}

function kntoSsound(kn) {
	return kn / 666.739;
}

function kntoSlight(kn) {
	return kn / 5.827e+8;
}

// functions to convert speed of sound into something

function ssoundtoMs(ssound) {
	return ssound * 343;
}

function ssoundtoKmh(ssound) {
	return ssound * 1234.8;
}

function ssoundtoMph(ssound) {
	return ssound * 767.269;
}

function ssoundtoFts(ssound) {
	return ssound * 1125.328;
}

function ssoundtoKn(ssound) {
	return ssound * 666.739;
}

function ssoundtoSlight(ssound) {
	return ssound / 874030.49;
}

// functions to convert speed of light into something

function slighttoMs(slight) {
	return slight * 2.998e+8;
}

function slighttoKmh(slight) {
	return slight * 1.079e+9;
}

function slighttoMph(slight) {
	return slight * 6.706e+8;
}

function slighttoFts(slight) {
	return slight * 9.836e+8;
}

function slighttoKn(slight) {
	return slight * 5.827e+8;
}

function slighttoSsound(slight) {
	return slight * 874030.49;
}