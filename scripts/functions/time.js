// months - months
// yr - year
// week - week
// day - day
// hr - hour
// ms - milisecond
// min - minute
// micro - microseconds
// s - seconds

// functions to convert seconds into every time unit
function sToMs(s) {
	return s * 1000;
}

function sToMin(s) {
	return s / 60;
}

function sToHr(s) {
	return s / 3600;
}

function sToDay(s) {
	return s / 86400;
}

function sToWeek(s) {
	return s / 604800;
}

function sToMonth(s) {
	return s /2.628e+6 ;
}

function sToYr(s) {
	return s / 3.154e+7;
}

function sToMicro(s) {
	return s * 1e+6;
}

// functions to convert microseconds into every time unit
function microToMs(micro) {
	return micro / 1000;
}

function microTos(micro) {
	return micro / 1e+6;
}
function microToMin(micro) {
	return micro / 6e+7;
}

function microToHr(micro) {
	return micro / 3.6e+9;
}

function microToDay(micro) {
	return micro / 8.64e+10;
}

function microToMonth(micro) {
	return micro / 2.628e+12;
}

function microToYr(micro) {
	return micro / 3.154e+13;
}

function microToWeek(micro) {
	return micro / 6.048e+11;
}

// functions to convert minute into every timeunit
function minToMs(min) {
	return min * 60000;
}

function minTos(min) {
	return min * 60;
}
function minToMicro(min) {
	return min * 6e+7;
}

function minToHr(min) {
	return min / 60;
}

function minToDay(min) {
	return min / 1440;
}

function minToMonth(min) {
	return min / 43800.048;
}

function minToYr(min) {
	return min / 525600 ;
}

function minToWeek(min) {
	return min / 10080;
}

// functions to convert milisecond to every time unit
function msToMicro(ms) {
	return ms * 1000;
}

function msTos(ms) {
	return ms / 1000;
}
function msToMin(ms) {
	return ms / 60000;
}

function msToHr(ms) {
	return ms / 3.6e+6;
}

function msToDay(ms) {
	return ms / 8.64e+7;
}

function msToMonth(ms) {
	return ms / 2.628e+9;
}

function msToYr(ms) {
	return ms / 3.154e+10;
}

function msToWeek(ms) {
	return ms / 6.048e+8;
}

//functions to convert hour to every time unit
function hrToMs(hr) {
	return hr * 3.6e+6;
}

function hrToMicro(hr) {
	return hr * 3.6e+9;
}

function hrTos(hr) {
	return hr * 3600;
}

function hrToMin(hr) {
	return hr * 60;
}

function hrToDay(hr) {
	return hr / 24;
}

function hrToWeek(hr) {
	return hr / 168;
}

function hrToMonth(hr) {
	return hr / 730.001;
}

function hrToYr(hr) {
	return hr / 8760;
}

// functions to convert day into other units
function dayToMs(day) {
	return day * 8.64e+7;
}

function dayToMicro(day) {
	return day * 8.64e+10;
}

function dayTos(day) {
	return day * 86400;
}

function dayToMin(day) {
	return day * 1440;
}

function dayToHr(day) {
	return day * 24;
}

function dayToWeek(day) {
	return day / 7;
}

function dayToMonth(day) {
	return day / 30.417;
}

function dayToYear(day) {
	return day / 365;
}

// functions to convert week into other units
function weekToMicro(week) {
	return week * 6.048e+11;
}

function weekToMs(week) {
	return week * 6.048e+8;
}

function weekTos(week) {
	return week * 604800;
}

function weekToMin(week) {
	return week * 10080;
}

function weekToHr(week) {
	return week * 168;
}

function weekToDay(week) {
	return week * 7;
}

function weekToMonth(week) {
	return week / 4.345;
}

function weekToYear(week) {
	return week / 52.143;
}

// functions to convert year into another units
function yrToMicro(yr) {
	return yr * 3.154e+13;
}

function yrToMs(yr) {
	return yr * 3.154e+10;
}

function yrTos(yr) {
	return yr * 3.154e+7;
}

function yrToMin(yr) {
	return yr * 525600;
}

function yrToHr(yr) {
	return yr * 8760;
}

function yrToDay(yr) {
	return yr * 365;
}

function yrToMonth(yr) {
	return yr * 12;
}

function yrToWeek(yr) {
	return yr * 52.143;
}

// functions to convert months into other units
function monthsToMicro(months) {
	return months * 2.628e+12;
}

function monthsToMs(months) {
	return months * 2.628e+9;
}

function monthsTos(months) {
	return months * 2.628e+6;
}

function monthsToMin(months) {
	return months * 43800.048;
}

function monthsToHr(months) {
	return months * 730.001;
}

function monthsToDay(months) {
	return months * 30.4017;
}

function monthsToWeek(months) {
	return months * 4.345;
}

function monthsToYear(months) {
	return months / 12
}