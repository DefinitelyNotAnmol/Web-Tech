function calculate() {
    let json_text = {
        "micro_s" : {
            "para" : "The Time T in Second(s) is equal to the Time T in Microsecond(micro) divided by 1e+6",
            "formula" : "L(s) = L(micro) / 1e+6"
        },
    
        "micro_yr" : {
            "para" : "The Time T in Year(yr) is equal to the Time T in Microsecond(micro) divided by 3.154e+13",
            "formula" : "L(yr) = L(micro) / 3.154e+13"
        },
    
        "micro_hr" : {
            "para" : "The Time T in Hour(hr) is equal to the Time T in Microsecond(micro) divided by 3.6e+9",
            "formula" : "L(hr) = L(micro) / 3.6e+9"
        },
    
        "micro_ms" : {
            "para" : "The Time T in Milisecond(ms) is equal to the Time T in Microsecond(micro) divide by 1000",
            "formula" : "L(ms) = L(micro) / 1000"
        },
    
        "micro_day" : {
            "para" : "The Time T in Day(day) is equal to the Time T in Microsecond(micro) divided by 8.64e+10",
            "formula" : "L(day) = L(micro) / 8.64e+10"
        },
    
        "micro_week" : {
            "para" : "The Time T in Week(week) is equal to the Time T in Microsecond(micro) divided by 6.048e+11",
            "formula" : "L(week) = L(micro) / 6.048e+11"
        },
    
        "micro_month" : {
            "para" : "The Time T in Month(month) is equal to the Time T in Microsecond(micro) divided by 2.628e+12",
            "formula" : "L(month) = L(micro) / 2.628e+12"
        },
    
        "micro_min" : {
            "para" : "The Time T in Minute(min) is equal to the Time T in Microsecond(micro) divide by 6e+7",
            "formula" : "L(min) = L(micro) / 6e+7"
        },
    
    
    
        "s_micro" : {
            "para" : "The Time T in Microsecond(micro) is equal to the Time T in Second(s) times 1e+6",
            "formula" : "L(micro) = L(s) * 1e+6"
        },
    
        "s_yr" : {
            "para" : "The Time T in Year(yr) is equal to the Time T in Second(s) divided by 3.154e+7",
            "formula" : "L(yr) = L(s) / 3.154e+7"
        },
    
        "s_hr" : {
            "para" : "The Time T in Hour(hr) is equal to the Time T in Second(s) divided by 3600",
            "formula" : "L(hr) = L(s) / 3600"
        },
    
        "s_ms" : {
            "para" : "The Time T in Milisecond(ms) is equal to the Time T in Second(s) times 1000",
            "formula" : "L(ms) = L(s) * 1000"
        },
    
        "s_day" : {
            "para" : "The Time T in Day(day) is equal to the Time T in Second(s) divide by 86400",
            "formula" : "L(day) = L(s) / 86400"
        },
    
        "s_week" : {
            "para" : "The Time T in Week(week) is equal to the Time T in Second(s) divide by 604800",
            "formula" : "L(week) = L(s) / 604800"
        },
    
        "s_month" : {
            "para" : "The Time T in Month(month) is equal to the Time T in Second(s) divided by 2.628e+6",
            "formula" : "L(month) = L(s) / 2.628e+6"
        },
    
        "s_min" : {
            "para" : "The Time T in Minute(min) is equal to the Time T in Second(s) divide by 60",
            "formula" : "L(min) = L(s) / 60"
        },
    
    
    
        "hr_micro" : {
            "para" : "The Time T in Microsecond(micro) is equal to the Time T in Hour(hr) times 3.6e+9",
            "formula" : "L(micro) = L(hr) * 3.6e+9"
        },
    
        "hr_yr" : {
            "para" : "The Time T in Year(yr) is equal to the Time T in Hour(hr) times 8760",
            "formula" : "L(yr) = L(hr) * 8760"
        },
    
        "hr_s" : {
            "para" : "The Time T in Second(s) is equal to the Time T in Hour(hr) times 3600",
            "formula" : "L(s) = L(hr) * 3600"
        },
    
        "hr_ms" : {
            "para" : "The Time T in Milisecond(ms) is equal to the Time T in Hour(hr) times 3.6e+6",
            "formula" : "L(ms) = L(hr) * 3.6e+6"
        },
    
        "hr_day" : {
            "para" : "The Time T in Day(day) is equal to the Time T in Hour(hr) divide by 24",
            "formula" : "L(day) = L(hr) / 24"
        },
    
        "hr_week" : {
            "para" : "The Time T in Week(week) is equal to the Time T in Hour(hr) divide by 168",
            "formula" : "L(week) = L(hr) / 168"
        },
    
        "hr_month" : {
            "para" : "The Time T in Month(month) is equal to the Time T in Hour(hr) divided by 730.001",
            "formula" : "L(month) = L(hr) / 730.001"
        },
    
        "hr_min" : {
            "para" : "The Time T in Minute(min) is equal to the Time T in Hour(hr) times 60",
            "formula" : "L(min) = L(hr) * 60"
        },
    
    
    
        "yr_micro" : {
            "para" : "The Time T in Microsecond(micro) is equal to the Time T in Year(yr) times 3.154e+13",
            "formula" : "L(micro) = L(yr) * 3.154e+13"
        },
    
        "yr_s" : {
            "para" : "The Time T in Second(s) is equal to the Time T in Year(yr) times 3.154e+7",
            "formula" : "L(s) = L(yr) * 3.154e+7"
        },
    
        "yr_hr" : {
            "para" : "The Time T in Hour(hr) is equal to the Time T in Year(yr) times 8760",
            "formula" : "L(hr) = L(yr) * 8760"
        },
    
        "yr_ms" : {
            "para" : "The Time T in Milisecond(ms) is equal to the Time T in Year(yr) times 3.154e+10",
            "formula" : "L(ms) = L(yr) * 3.154e+10"
        },
    
        "yr_day" : {
            "para" : "The Time T in Day(day) is equal to the Time T in Year(yr) times 365",
            "formula" : "L(day) = L(yr) * 365"
        },
    
        "yr_week" : {
            "para" : "The Time T in Week(week) is equal to the Time T in Year(yr) times 52.143",
            "formula" : "L(week) = L(yr) * 52.143"
        },
    
        "yr_month" : {
            "para" : "The Time T in Month(month) is equal to the Time T in Year(yr) times 12",
            "formula" : "L(month) = L(yr) * 12"
        },
    
        "yr_min" : {
            "para" : "The Time T in Minute(min) is equal to the Time T in Year(yr) times 525600",
            "formula" : "L(min) = L(yr) * 525600"
        },
    
    
    
        "ms_micro" : {
            "para" : "The Time T in Microsecond(micro) is equal to the Time T in Milisecond(ms) times 1000",
            "formula" : "L(micro) = L(ms) * 1000"
        },
    
        "ms_hr" : {
            "para" : "The Time T in Hour(hr) is equal to the Time T in Milisecond(ms) divide by 3.6e+6",
            "formula" : "L(hr) = L(ms) / 3.6e+6"
        },
    
        "ms_s" : {
            "para" : "The Time T in Second(s) is equal to the Time T in Milisecond(ms) divide by 1000",
            "formula" : "L(s) = L(ms) / 1000"
        },
    
        "ms_yr" : {
            "para" : "The Time T in Year(yr) is equal to the Time T in Milisecond(ms) divide by 3.154e+10",
            "formula" : "L(yr) = L(ms) / 3.154e+10"
        },
    
        "ms_day" : {
            "para" : "The Time T in Day(day) is equal to the Time T in Milisecond(ms) divide by 8.64e+7",
            "formula" : "L(day) = L(ms) / 8.64e+7"
        },
    
        "ms_week" : {
            "para" : "The Time T in Week(week) is equal to the Time T in Milisecond(ms) divide by 6.048e+8",
            "formula" : "L(week) = L(ms) / 6.048e+8"
        },
    
        "ms_month" : {
            "para" : "The Time T in Month(month) is equal to the Time T in Milisecond(ms) divide by 2.628e+9",
            "formula" : "L(month) = L(ms) / 2.628e+9"
        },
    
        "ms_min" : {
            "para" : "The Time T in Minute(min) is equal to the Time T in Milisecond(ms) divide by 60000",
            "formula" : "L(min) = L(ms) / 60000"
        },
    
    
    
        "day_micro" : {
            "para" : "The Time T in Microsecond(micro) is equal to the Time T in Day(day) times 8.64e+10",
            "formula" : "L(micro) = L(day) * 8.64e+10"
        },
    
        "day_hr" : {
            "para" : "The Time T in Hour(hr) is equal to the Time T in Day(day) times 24",
            "formula" : "L(hr) = L(day) * 24"
        },
    
        "day_s" : {
            "para" : "The Time T in Second(s) is equal to the Time T in Day(day) times 86400",
            "formula" : "L(s) = L(day) * 86400"
        },
    
        "day_yr" : {
            "para" : "The Time T in Year(yr) is equal to the Time T in Day(day) divide by 365",
            "formula" : "L(yr) = L(day) / 365"
        },
    
        "day_ms" : {
            "para" : "The Time T in Milisecond(ms) is equal to the Time T in Day(day) times 8.64e+7",
            "formula" : "L(ms) = L(day) * 8.64e+7"
        },
    
        "day_week" : {
            "para" : "The Time T in Week(week) is equal to the Time T in Day(day) divide by 7",
            "formula" : "L(week) = L(day) / 7"
        },
    
        "day_month" : {
            "para" : "The Time T in Month(month) is equal to the Time T in Day(day) divide by 30.417",
            "formula" : "L(month) = L(day) / 30.417"
        },
    
        "day_min" : {
            "para" : "The Time T in Minute(min) is equal to the Time T in Day(day) times 1440",
            "formula" : "L(min) = L(day) * 1440"
        },
    
    
    
        "week_micro" : {
            "para" : "The Time T in Microsecond(micro) is equal to the Time T in Week(week) times 6.048e+11",
            "formula" : "L(micro) = L(week) * 6.048e+11"
        },
    
        "week_hr" : {
            "para" : "The Time T in Hour(hr) is equal to the Time T in Week(week) times 168",
            "formula" : "L(hr) = L(week) * 168"
        },
    
        "week_s" : {
            "para" : "The Time T in Second(s) is equal to the Time T in Week(week) times 604800",
            "formula" : "L(s) = L(week) * 604800"
        },
    
        "week_yr" : {
            "para" : "The Time T in Year(yr) is equal to the Time T in Week(week) divide by 52.143",
            "formula" : "L(yr) = L(week) / 52.143"
        },
    
        "week_ms" : {
            "para" : "The Time T in Milisecond(ms) is equal to the Time T in Week(week) times 6.048e+8",
            "formula" : "L(ms) = L(week) * 6.048e+8"
        },
    
        "week_day" : {
            "para" : "The Time T in Day(day) is equal to the Time T in Week(week) times 7",
            "formula" : "L(day) = L(week) * 7"
        },
    
        "week_month" : {
            "para" : "The Time T in Month(month) is equal to the Time T in Week(week) divide by 4.345",
            "formula" : "L(month) = L(week) / 4.345"
        },
    
        "week_min" : {
            "para" : "The Time T in Minute(min) is equal to the Time T in Week(week) times 10080",
            "formula" : "L(min) = L(week) * 10080"
        },
    
    
    
        "month_micro" : {
            "para" : "The Time T in Microsecond(micro) is equal to the Time T in Month(month) times 2.628e+12",
            "formula" : "L(micro) = L(month) * 2.628e+12"
        },
    
        "month_hr" : {
            "para" : "The Time T in Hour(hr) is equal to the Time T in Month(month) times 730.001",
            "formula" : "L(hr) = L(month) * 730.001"
        },
    
        "month_s" : {
            "para" : "The Time T in Second(s) is equal to the Time T in Month(month) times 2.628e+6",
            "formula" : "L(s) = L(month) * 2.628e+6"
        },
    
        "month_yr" : {
            "para" : "The Time T in Year(yr) is equal to the Time T in Month(month) divide by 12",
            "formula" : "L(yr) = L(month) / 12"
        },
    
        "month_ms" : {
            "para" : "The Time T in Milisecond(ms) is equal to the Time T in Month(month) times 2.628e+9",
            "formula" : "L(ms) = L(month) * 2.628e+9"
        },
    
        "month_day" : {
            "para" : "The Time T in Day(day) is equal to the Time T in Month(month) times 30.4017",
            "formula" : "L(day) = L(month) * 30.4017"
        },
    
        "month_week" : {
            "para" : "The Time T in Week(week) is equal to the Time T in Month(month) times 4.345",
            "formula" : "L(week) = L(month) * 4.345"
        },
    
        "month_min" : {
            "para" : "The Time T in Minute(min) is equal to the Time T in Month(month) times 43800.048",
            "formula" : "L(min) = L(month) * 43800.048"
        },
    
    
    
        "min_micro" : {
            "para" : "The Time T in Microsecond(micro) is equal to the Time T in Minute(min) times 6e+7",
            "formula" : "L(micro) = L(min) * 6e+7"
        },
    
        "min_hr" : {
            "para" : "The Time T in Hour(hr) is equal to the Time T in Minute(min) divide by 60",
            "formula" : "L(hr) = L(min) / 60"
        },
    
        "min_s" : {
            "para" : "The Time T in Second(s) is equal to the Time T in Minute(min) times 60",
            "formula" : "L(s) = L(min) * 60"
        },
    
        "min_yr" : {
            "para" : "The Time T in Year(yr) is equal to the Time T in Minute(min) divide by 525600",
            "formula" : "L(yr) = L(min) / 525600"
        },
    
        "min_ms" : {
            "para" : "The Time T in Milisecond(ms) is equal to the Time T in Minute(min) times 60000",
            "formula" : "L(ms) = L(min) * 60000"
        },
    
        "min_day" : {
            "para" : "The Time T in Day(day) is equal to the Time T in Minute(min) divide by 1440",
            "formula" : "L(day) = L(min) / 1440"
        },
    
        "min_week" : {
            "para" : "The Time T in Week(week) is equal to the Time T in Minute(min) divide by 10080",
            "formula" : "L(week) = L(min) / 10080"
        },
    
        "min_month" : {
            "para" : "The Time T in Month(month) is equal to the Time T in Minute(min) divide by 43800.048",
            "formula" : "L(month) = L(min) / 43800.048"
        }
    };

    let s = JSON.stringify(json_text);
    let content = JSON.parse(s);

    var x = document.getElementById("menu1").value;
    var y = document.getElementById("menu2").value;
    
    if (x == "" || y == "") {
        document.getElementById("input").value = "Please select both the units";
        document.getElementById("data_heading").innerHTML = "";
        document.getElementById("formula_heading").innerHTML = "";
        document.getElementById("para").innerHTML = "";
        document.getElementById("formula").innerHTML = "";
        document.getElementById("result").innerHTML = "";
        return;
    }

    if (x === y) {
        document.getElementById("input").value = "SI Units must be different";
        document.getElementById("data_heading").innerHTML = "";
        document.getElementById("formula_heading").innerHTML = "";
        document.getElementById("para").innerHTML = "";
        document.getElementById("formula").innerHTML = "";
        document.getElementById("result").innerHTML = "";
        return;
    }

    document.getElementById("data_heading").innerHTML = "Result";
    document.getElementById("formula_heading").innerHTML = "Formula";

    let input = parseFloat(document.getElementById("input").value);
    document.getElementById("para").innerHTML = content[x+'_'+y]["para"] + "<br>";
    document.getElementById("formula").innerHTML =  content[x+'_'+y]["formula"];

    if (x == "min") {
        if (y == "month") {
            document.getElementById("result").innerHTML = input + " min = " + minToMonth(input) + " month";
        }
    
        else if (y == "week") {  
            document.getElementById("result").innerHTML = input + " min = " + minToWeek(input) + " week";
        }
    
        else if (y == "day") {
            document.getElementById("result").innerHTML = input + " min = " + minToDay(input) + " day";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " min = " + minToMs(input) + " ms";
        }
    
        else if (y == "yr") {
            document.getElementById("result").innerHTML = input + " min = " + minToYr(input) + " yr";
        }
    
        else if (y == "hr") {
            document.getElementById("result").innerHTML = input + " min = " + minToHr(input) + " hr";
        }
    
        else if (y == "s") {
            document.getElementById("result").innerHTML = input + " min = " + minToS(input) + " s";
        }
    
        else if (y == "micro") {
            document.getElementById("result").innerHTML = input + " min = " + minToMicro(input) + " micro";
        }   
    }

    else if (x == "month") {
        if (y == "min") {
            document.getElementById("result").innerHTML = input + " month = " + monthToMin(input) + " min";
        }
    
        else if (y == "week") {  
            document.getElementById("result").innerHTML = input + " month = " + monthToWeek(input) + " week";
        }
    
        else if (y == "day") {
            document.getElementById("result").innerHTML = input + " month = " + monthToDay(input) + " day";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " month = " + monthToMs(input) + " ms";
        }
    
        else if (y == "yr") {
            document.getElementById("result").innerHTML = input + " month = " + monthToYr(input) + " yr";
        }
    
        else if (y == "hr") {
            document.getElementById("result").innerHTML = input + " month = " + monthToHr(input) + " hr";
        }
    
        else if (y == "s") {
            document.getElementById("result").innerHTML = input + " month = " + monthToS(input) + " s";
        }
    
        else if (y == "micro") {
            document.getElementById("result").innerHTML = input + " month = " + monthToMicro(input) + " micro";
        }  
    }

    else if (x == "week") {
        if (y == "month") {
            document.getElementById("result").innerHTML = input + " week = " + weekToMonth(input) + " month";
        }
    
        else if (y == "min") {  
            document.getElementById("result").innerHTML = input + " week = " + weekToMin(input) + " min";
        }
    
        else if (y == "day") {
            document.getElementById("result").innerHTML = input + " week = " + weekToDay(input) + " day";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " week = " + weekToMs(input) + " ms";
        }
    
        else if (y == "yr") {
            document.getElementById("result").innerHTML = input + " week = " + weekToYr(input) + " yr";
        }
    
        else if (y == "hr") {
            document.getElementById("result").innerHTML = input + " week = " + weekToHr(input) + " hr";
        }
    
        else if (y == "s") {
            document.getElementById("result").innerHTML = input + " week = " + weekToS(input) + " s";
        }
    
        else if (y == "micro") {
            document.getElementById("result").innerHTML = input + " week = " + weekToMicro(input) + " micro";
        }  
    }

    else if (x == "day") {
        if (y == "month") {
            document.getElementById("result").innerHTML = input + " day = " + dayToMonth(input) + " month";
        }
    
        else if (y == "week") {  
            document.getElementById("result").innerHTML = input + " day = " + dayToWeek(input) + " week";
        }
    
        else if (y == "min") {
            document.getElementById("result").innerHTML = input + " day = " + dayToMin(input) + " min";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " day = " + dayToMs(input) + " ms";
        }
    
        else if (y == "yr") {
            document.getElementById("result").innerHTML = input + " day = " + dayToYr(input) + " yr";
        }
    
        else if (y == "hr") {
            document.getElementById("result").innerHTML = input + " day = " + dayToHr(input) + " hr";
        }
    
        else if (y == "s") {
            document.getElementById("result").innerHTML = input + " day = " + dayToS(input) + " s";
        }
    
        else if (y == "micro") {
            document.getElementById("result").innerHTML = input + " day = " + dayToMicro(input) + " micro";
        }  
    }

    else if (x == "ms") {
        if (y == "month") {
            document.getElementById("result").innerHTML = input + " ms = " + msToMonth(input) + " month";
        }
    
        else if (y == "week") {  
            document.getElementById("result").innerHTML = input + " ms = " + msToWeek(input) + " week";
        }
    
        else if (y == "day") {
            document.getElementById("result").innerHTML = input + " ms = " + msToDay(input) + " day";
        }
    
        else if (y == "min") {
            document.getElementById("result").innerHTML = input + " ms = " + msToMin(input) + " min";
        }
    
        else if (y == "yr") {
            document.getElementById("result").innerHTML = input + " ms = " + msToYr(input) + " yr";
        }
    
        else if (y == "hr") {
            document.getElementById("result").innerHTML = input + " ms = " + msToHr(input) + " hr";
        }
    
        else if (y == "s") {
            document.getElementById("result").innerHTML = input + " ms = " + msToS(input) + " s";
        }
    
        else if (y == "micro") {
            document.getElementById("result").innerHTML = input + " ms = " + msToMicro(input) + " micro";
        }  
    }

    else if (x == "yr") {
        if (y == "month") {
            document.getElementById("result").innerHTML = input + " yr = " + yrToMonth(input) + " month";
        }
    
        else if (y == "week") {  
            document.getElementById("result").innerHTML = input + " yr = " + yrToWeek(input) + " week";
        }
    
        else if (y == "day") {
            document.getElementById("result").innerHTML = input + " yr = " + yrToDay(input) + " day";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " yr = " + yrToMs(input) + " ms";
        }
    
        else if (y == "min") {
            document.getElementById("result").innerHTML = input + " yr = " + yrToMin(input) + " min";
        }
    
        else if (y == "hr") {
            document.getElementById("result").innerHTML = input + " yr = " + yrToHr(input) + " hr";
        }
    
        else if (y == "s") {
            document.getElementById("result").innerHTML = input + " yr = " + yrToS(input) + " s";
        }
    
        else if (y == "micro") {
            document.getElementById("result").innerHTML = input + " yr = " + yrToMicro(input) + " micro";
        }  
    }

    else if (x == "hr") {
        if (y == "month") {
            document.getElementById("result").innerHTML = input + " hr = " + hrToMonth(input) + " month";
        }
    
        else if (y == "week") {  
            document.getElementById("result").innerHTML = input + " hr = " + hrToWeek(input) + " week";
        }
    
        else if (y == "day") {
            document.getElementById("result").innerHTML = input + " hr = " + hrToDay(input) + " day";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " hr = " + hrToMs(input) + " ms";
        }
    
        else if (y == "yr") {
            document.getElementById("result").innerHTML = input + " hr = " + hrToYr(input) + " yr";
        }
    
        else if (y == "min") {
            document.getElementById("result").innerHTML = input + " hr = " + hrToMin(input) + " min";
        }
    
        else if (y == "s") {
            document.getElementById("result").innerHTML = input + " hr = " + hrToS(input) + " s";
        }
    
        else if (y == "micro") {
            document.getElementById("result").innerHTML = input + " hr = " + hrToMicro(input) + " micro";
        }  
    }

    else if (x == "s") {
        if (y == "month") {
            document.getElementById("result").innerHTML = input + " s = " + sToMonth(input) + " month";
        }
    
        else if (y == "week") {  
            document.getElementById("result").innerHTML = input + " s = " + sToWeek(input) + " week";
        }
    
        else if (y == "day") {
            document.getElementById("result").innerHTML = input + " s = " + sToDay(input) + " day";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " s = " + sToMs(input) + " ms";
        }
    
        else if (y == "yr") {
            document.getElementById("result").innerHTML = input + " s = " + sToYr(input) + " yr";
        }
    
        else if (y == "hr") {
            document.getElementById("result").innerHTML = input + " s = " + sToHr(input) + " hr";
        }
    
        else if (y == "min") {
            document.getElementById("result").innerHTML = input + " s = " + sToMin(input) + " min";
        }
    
        else if (y == "micro") {
            document.getElementById("result").innerHTML = input + " s = " + sToMicro(input) + " micro";
        }  
    }

    else if (x == "micro") {
        if (y == "month") {
            document.getElementById("result").innerHTML = input + " micro = " + microToMonth(input) + " month";
        }
    
        else if (y == "week") {  
            document.getElementById("result").innerHTML = input + " micro = " + microToWeek(input) + " week";
        }
    
        else if (y == "day") {
            document.getElementById("result").innerHTML = input + " micro = " + microToDay(input) + " day";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " micro = " + microToMs(input) + " ms";
        }
    
        else if (y == "yr") {
            document.getElementById("result").innerHTML = input + " micro = " + microToYr(input) + " yr";
        }
    
        else if (y == "hr") {
            document.getElementById("result").innerHTML = input + " micro = " + microToHr(input) + " hr";
        }
    
        else if (y == "s") {
            document.getElementById("result").innerHTML = input + " micro = " + microToS(input) + " s";
        }
    
        else if (y == "min") {
            document.getElementById("result").innerHTML = input + " micro = " + microToMin(input) + " min";
        }  
    }
}