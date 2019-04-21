// ms - meter per second
// fts - foot per second
// kmph - Kilometer per hour
// mph - miles per hour
// kn - Knot
// a - Speed of Sound
// c - Speed of Light

// functions to convert meter per second into something
function msToKmph(ms) {
	return ms * 3.6;
}

function msToMph(ms) {
	return ms * 2.237;
}

function msToFts(ms) {
	return ms * 3.281;
}

function msToKn(ms) {
	return ms * 1.944;
}

function msToA(ms) {
	return ms / 343;
}

function msToC(ms) {
	return ms / 2.998e+8;
}

// functions to convert kilometer per hour into something
function kmphToMs(kmph) {
	return kmph / 3.6;
}

function kmphToMph(kmph) {
	return kmph / 1.609;
}

function kmphToFts(kmph) {
	return kmph / 1.097;
}

function kmphToKn(kmph) {
	return kmph / 1.852;
}

function kmphToA(kmph) {
	return kmph / 1234.8;
}

function kmphToC(kmph) {
	return kmph / 1.079e+9;
}

// functions to convert miles per hour into something
function mphToMs(mph) {
	return mph / 2.237;
}

function mphToKmph(mph) {
	return mph * 1.609;
}

function mphToFts(mph) {
	return mph * 1.467;
}

function mphToKn(mph) {
	return mph / 1.151;
}

function mphToA(mph) {
	return mph / 767.269;
}

function mphToC(mph) {
	return mph / 6.706e+8;
}

// functions to convert foot per second into something
function ftsToMs(fts) {
	return fts / 3.281;
}

function ftsToKmph(fts) {
	return fts * 1.097;
}

function ftsToMph(fts) {
	return fts / 1.467;
}

function ftsToKn(fts) {
	return fts / 1.688;
}

function ftsToA(fts) {
	return fts / 1125.328;
}

function ftsToC(fts) {
	return fts / 9.836e+8;
}

// functions to convert knot into something
function knToMs(kn) {
	return kn / 1.944;
}

function knToKmph(kn) {
	return kn * 1.852;
}

function knToMph(kn) {
	return kn * 1.151;
}

function knToFts(kn) {
	return kn * 1.688;
}

function knToA(kn) {
	return kn / 666.739;
}

function knToC(kn) {
	return kn / 5.827e+8;
}

// functions to convert speed of sound into something
function aToMs(ssound) {
	return ssound * 343;
}

function aToKmph(ssound) {
	return ssound * 1234.8;
}

function aToMph(ssound) {
	return ssound * 767.269;
}

function aToFts(ssound) {
	return ssound * 1125.328;
}

function aToKn(ssound) {
	return ssound * 666.739;
}

function aToC(ssound) {
	return ssound / 874030.49;
}

// functions to convert speed of light into something
function cToMs(slight) {
	return slight * 2.998e+8;
}

function cToKmph(slight) {
	return slight * 1.079e+9;
}

function cToMph(slight) {
	return slight * 6.706e+8;
}

function cToFts(slight) {
	return slight * 9.836e+8;
}

function cToKn(slight) {
	return slight * 5.827e+8;
}

function cToA(slight) {
	return slight * 874030.49;
}