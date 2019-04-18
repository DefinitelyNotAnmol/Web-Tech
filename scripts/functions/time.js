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

function MicroToMs(micro) {
	return micro / 1000;
}

function MicroTos(micro) {
	return micro / 1e+6;
}
function MicroToMin(micro) {
	return micro / 6e+7;
}

function MicroToHr(micro) {
	return micro / 3.6e+9;
}

function MicroToDay(micro) {
	return micro / 8.64e+10;
}

function MicroToMonth(micro) {
	return micro / 2.628e+12;
}

function MicroToYr(micro) {
	return micro / 3.154e+13;
}

function MicroToWeek(micro) {
	return micro / 6.048e+11;
}

// functions to convert min into every timeunit

function MinToMs(min) {
	return min * 60000;
}

function MinTos(min) {
	return min * 60;
}
function MinToMicro(min) {
	return min * 6e+7;
}

function MinToHr(min) {
	return min / 60;
}

function MinToDay(min) {
	return min / 1440;
}

function MinToMonth(min) {
	return min / 43800.048;
}

function MinToYr(min) {
	return min / 525600 ;
}

function MinToWeek(min) {
	return min / 10080;
}

// functions to convert milisecond to every time unit

function MsToMicro(ms) {
	return ms * 1000;
}

function MsTos(ms) {
	return ms / 1000;
}
function MsToMin(ms) {
	return ms / 60000;
}

function MsToHr(ms) {
	return ms / 3.6e+6;
}

function MsToDay(ms) {
	return ms / 8.64e+7;
}

function MsToMonth(ms) {
	return ms / 2.628e+9;
}

function MsToYr(ms) {
	return ms / 3.154e+10;
}

function MsToWeek(ms) {
	return ms / 6.048e+8;
}

//functions to convert hour to every time unit

function HrToMs(hr) {
	return hr * 3.6e+6;
}

function HrToMicro(hr) {
	return hr * 3.6e+9;
}

function HrTos(hr) {
	return hr * 3600;
}

function HrToMin(hr) {
	return hr * 60;
}

function HrToDay(hr) {
	return hr / 24;
}

function HrToWeek(hr) {
	return hr / 168;
}

function HrToMonth(hr) {
	return hr / 730.001;
}

function HrToYr(hr) {
	return hr / 8760;
}

// functions to convert day into other units

function DayToMs(day) {
	return day * 8.64e+7;
}

function DayToMicro(day) {
	return day * 8.64e+10;
}

function DayTos(day) {
	return day * 86400;
}

function DayToMin(day) {
	return day * 1440;
}

function DayToHr(day) {
	return day * 24;
}

function DayToWeek(day) {
	return day / 7;
}

function DayToMonth(day) {
	return day / 30.417;
}

function DayToYear(day) {
	return day / 365;
}

// functions to convert week into other units

function WeekToMicro(week) {
	return week * 6.048e+11;
}

function WeekToMs(week) {
	return week * 6.048e+8;
}

function WeekTos(week) {
	return week * 604800;
}

function WeekToMin(week) {
	return week * 10080;
}

function WeekToHr(week) {
	return week * 168;
}

function WeekToDay(week) {
	return week * 7;
}

function WeekToMonth(week) {
	return week / 4.345;
}

function WeekToYear(week) {
	return week / 52.143;
}

// functions to convert year itno another units

function YrToMicro(yr) {
	return yr * 3.154e+13;
}

function YrToMs(yr) {
	return yr * 3.154e+10;
}

function YrTos(yr) {
	return yr * 3.154e+7;
}

function YrToMin(yr) {
	return yr * 525600;
}

function YrToHr(yr) {
	return yr * 8760;
}

function YrToDay(yr) {
	return yr * 365;
}

function YrToMonth(yr) {
	return yr * 12;
}

function YrToWeek(yr) {
	return yr * 52.143;
}

// functions to convert months into other units

function MonthsToMicro(months) {
	return months * 2.628e+12;
}

function MonthsToMs(months) {
	return months * 2.628e+9;
}

function MonthsTos(months) {
	return months * 2.628e+6;
}

function MonthsToMin(months) {
	return months * 43800.048;
}

function MonthsToHr(months) {
	return months * 730.001;
}

function MonthsToDay(months) {
	return months * 30.4017;
}

function MonthsToWeek(months) {
	return months * 4.345;
}

function MonthsToYear(months) {
	return months / 12
}

