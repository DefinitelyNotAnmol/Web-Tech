function calculate() {
    let json_text = {
        "cm_m" : {
            "para" : "The Length L in Meter(m) is equal to the Length L in Centimeter(cm) divided by 100",
            "formula" : "L(m) = L(cm) / 100"
        },
    
        "cm_nm" : {
            "para" : "The Length L in Nautical Mile(nm) is equal to the Length L in Centimeter(cm) divided by 185200",
            "formula" : "L(nm) = L(cm) / 185200"
        },
    
        "cm_km" : {
            "para" : "The Length L in Kilometer(km) is equal to the Length L in Centimeter(cm) divided by 100000",
            "formula" : "L(km) = L(cm) / 100000"
        },
    
        "cm_in" : {
            "para" : "The Length L in Inch(in) is equal to the Length L in Centimeter(cm) times 0.3927",
            "formula" : "L(in) = L(cm) * 0.3937"
        },
    
        "cm_ft" : {
            "para" : "The Length L in Foot(ft) is equal to the Length L in Centimeter(cm) divided by 30.48",
            "formula" : "L(ft) = L(cm) / 30.48"
        },
    
        "cm_yd" : {
            "para" : "The Length L in Yard(yd) is equal to the Length L in Centimeter(cm) divided by 91.44",
            "formula" : "L(yd) = L(cm) / 91.44"
        },
    
        "cm_mi" : {
            "para" : "The Length L in Mile(mi) is equal to the Length L in Centimeter(cm) divided by 160934.4",
            "formula" : "L(mi) = L(cm) / 160934.4"
        },
    
        "cm_mm" : {
            "para" : "The Length L in Milimeter(mm) is equal to the Length L in Centimeter(cm) times 10",
            "formula" : "L(mm) = L(cm) * 10"
        },
    
    
    
        "m_cm" : {
            "para" : "The Length L in Centimeter(cm) is equal to the Length L in Meter(m) times 100",
            "formula" : "L(cm) = L(m) * 100"
        },
    
        "m_nm" : {
            "para" : "The Length L in Nautical Mile(nm) is equal to the Length L in Meter(m) divided by 1852",
            "formula" : "L(nm) = L(m) / 1852"
        },
    
        "m_km" : {
            "para" : "The Length L in Kilometer(km) is equal to the Length L in Meter(m) divided by 1000",
            "formula" : "L(km) = L(m) / 1000"
        },
    
        "m_in" : {
            "para" : "The Length L in Inch(in) is equal to the Length L in Meter(m) times 39.37",
            "formula" : "L(in) = L(m) * 39.37"
        },
    
        "m_ft" : {
            "para" : "The Length L in Foot(ft) is equal to the Length L in Meter(m) times 3.281",
            "formula" : "L(ft) = L(m) * 3.281"
        },
    
        "m_yd" : {
            "para" : "The Length L in Yard(yd) is equal to the Length L in Meter(m) times 1.094",
            "formula" : "L(yd) = L(m) * 1.094"
        },
    
        "m_mi" : {
            "para" : "The Length L in Mile(mi) is equal to the Length L in Meter(m) divided by 1609.344",
            "formula" : "L(mi) = L(m) / 1609.344"
        },
    
        "m_mm" : {
            "para" : "The Length L in Milimeter(mm) is equal to the Length L in Meter(m) times 1000",
            "formula" : "L(mm) = L(m) * 1000"
        },
    
    
    
        "km_cm" : {
            "para" : "The Length L in Centimeter(cm) is equal to the Length L in Kilometer(km) times 100000",
            "formula" : "L(cm) = L(km) * 100000"
        },
    
        "km_nm" : {
            "para" : "The Length L in Nautical Mile(nm) is equal to the Length L in Kilometer(km) divide by 1.852",
            "formula" : "L(nm) = L(km) / 1.852"
        },
    
        "km_m" : {
            "para" : "The Length L in Meter(m) is equal to the Length L in Kilometer(km) times 1000",
            "formula" : "L(m) = L(km) * 1000"
        },
    
        "km_in" : {
            "para" : "The Length L in Inch(in) is equal to the Length L in Kilometer(km) times 39370.070",
            "formula" : "L(in) = L(km) * 39370.070"
        },
    
        "km_ft" : {
            "para" : "The Length L in Foot(ft) is equal to the Length L in Kilometer(km) times 3280.84",
            "formula" : "L(ft) = L(km) * 3280.84"
        },
    
        "km_yd" : {
            "para" : "The Length L in Yard(yd) is equal to the Length L in Kilometer(km) times 1093.613",
            "formula" : "L(yd) = L(km) * 1093.613"
        },
    
        "km_mi" : {
            "para" : "The Length L in Mile(mi) is equal to the Length L in Kilometer(km) divided by 1.609",
            "formula" : "L(mi) = L(km) / 1.609"
        },
    
        "km_mm" : {
            "para" : "The Length L in Milimeter(mm) is equal to the Length L in Kilometer(km) times 1000000",
            "formula" : "L(mm) = L(km) * 1000000"
        },
    
    
    
        "nm_cm" : {
            "para" : "The Length L in Centimeter(cm) is equal to the Length L in Nautical Mile(nm) times 185200",
            "formula" : "L(cm) = L(nm) * 185200"
        },
    
        "nm_m" : {
            "para" : "The Length L in Meter(m) is equal to the Length L in Nautical Mile(nm) times 1852",
            "formula" : "L(m) = L(nm) * 1852"
        },
    
        "nm_km" : {
            "para" : "The Length L in Kilometer(km) is equal to the Length L in Nautical Mile(nm) times 1.852",
            "formula" : "L(km) = L(nm) * 1.852"
        },
    
        "nm_in" : {
            "para" : "The Length L in Inch(in) is equal to the Length L in Nautical Mile(nm) times 72913.386",
            "formula" : "L(in) = L(nm) * 72913.386"
        },
    
        "nm_ft" : {
            "para" : "The Length L in Foot(ft) is equal to the Length L in Nautical Mile(nm) times 6076.12",
            "formula" : "L(ft) = L(nm) * 6076.12"
        },
    
        "nm_yd" : {
            "para" : "The Length L in Yard(m) is equal to the Length L in Nautical Mile(nm) times 2025.372",
            "formula" : "L(yd) = L(nm) * 2025.372"
        },
    
        "nm_mi" : {
            "para" : "The Length L in Mile(mi) is equal to the Length L in Nautical Mile(nm) times 1.151",
            "formula" : "L(mi) = L(nm) times 1.151"
        },
    
        "nm_mm" : {
            "para" : "The Length L in Milimeter(mm) is equal to the Length L in Nautical Mile(nm) times 1.852e+6",
            "formula" : "L(mm) = L(nm) * 1.852e+6"
        },
    
    
    
        "in_cm" : {
            "para" : "The Length L in Centimeter(cm) is equal to the Length L in Inch(in) times 2.54",
            "formula" : "L(cm) = L(in) * 2.54"
        },
    
        "in_km" : {
            "para" : "The Length L in Kilometer(km) is equal to the Length L in Inch(in) divide by 39370.079",
            "formula" : "L(km) = L(in) / 39370.079"
        },
    
        "in_m" : {
            "para" : "The Length L in Meter(m) is equal to the Length L in Inch(in) divide by 39.37",
            "formula" : "L(m) = L(in) / 39.37"
        },
    
        "in_nm" : {
            "para" : "The Length L in Nautical Mile(nm) is equal to the Length L in Inch(in) divide by 72913.386",
            "formula" : "L(nm) = L(in) 72913.386"
        },
    
        "in_ft" : {
            "para" : "The Length L in Foot(ft) is equal to the Length L in Inch(in) divide by 12",
            "formula" : "L(ft) = L(in) / 12"
        },
    
        "in_yd" : {
            "para" : "The Length L in Yard(yd) is equal to the Length L in Inch(in) divide by 36",
            "formula" : "L(yd) = L(in) / 36"
        },
    
        "in_mi" : {
            "para" : "The Length L in Mile(mi) is equal to the Length L in Inch(in) divide by 63360",
            "formula" : "L(mi) = L(in) / 63360"
        },
    
        "in_mm" : {
            "para" : "The Length L in Milimeter(mm) is equal to the Length L in Inch(in) times 25.4",
            "formula" : "L(mm) = L(in) * 25.4"
        },
    
    
    
        "ft_cm" : {
            "para" : "The Length L in Centimeter(cm) is equal to the Length L in Foot(ft) times 30.48",
            "formula" : "L(cm) = L(ft) * 30.48"
        },
    
        "ft_km" : {
            "para" : "The Length L in Kilometer(km) is equal to the Length L in Foot(ft) divide by 3280.84",
            "formula" : "L(km) = L(ft) / 3280.84"
        },
    
        "ft_m" : {
            "para" : "The Length L in Meter(m) is equal to the Length L in Foot(ft) divide by 3.281",
            "formula" : "L(m) = L(ft) / 3.281"
        },
    
        "ft_nm" : {
            "para" : "The Length L in Nautical Mile(nm) is equal to the Length L in Foot(ft) divide by 6076.115",
            "formula" : "L(nm) = L(ft) / 6076.115"
        },
    
        "ft_in" : {
            "para" : "The Length L in Inch(in) is equal to the Length L in Foot(ft) times 12",
            "formula" : "L(in) = L(ft) * 12"
        },
    
        "ft_yd" : {
            "para" : "The Length L in Yard(yd) is equal to the Length L in Foot(ft) divide by 3",
            "formula" : "L(yd) = L(ft) / 3"
        },
    
        "ft_mi" : {
            "para" : "The Length L in Mile(mi) is equal to the Length L in Foot(ft) divide by 5280",
            "formula" : "L(mi) = L(ft) / 5280"
        },
    
        "ft_mm" : {
            "para" : "The Length L in Milimeter(mm) is equal to the Length L in Foot(ft) times 304.8",
            "formula" : "L(mm) = L(ft) * 304.8"
        },
    
    
    
        "yd_cm" : {
            "para" : "The Length L in Centimeter(cm) is equal to the Length L in Yard(yd) times 91.44",
            "formula" : "L(cm) = L(yd) * 91.44"
        },
    
        "yd_km" : {
            "para" : "The Length L in Kilometer(km) is equal to the Length L in Yard(yd) divide by 1093.613",
            "formula" : "L(km) = L(yd) / 1093.613"
        },
    
        "yd_m" : {
            "para" : "The Length L in Meter(m) is equal to the Length L in Yard(yd) divide by 1.094",
            "formula" : "L(m) = L(yd) / 1.094"
        },
    
        "yd_nm" : {
            "para" : "The Length L in Nautical Mile(nm) is equal to the Length L in Yard(yd) divide by 2025.372",
            "formula" : "L(nm) = L(yd) / 2025.372"
        },
    
        "yd_in" : {
            "para" : "The Length L in Inch(in) is equal to the Length L in Yard(yd) times 36",
            "formula" : "L(in) = L(yd) * 36"
        },
    
        "yd_ft" : {
            "para" : "The Length L in Foot(ft) is equal to the Length L in Yard(yd) times 3",
            "formula" : "L(ft) = L(yd) * 3"
        },
    
        "yd_mi" : {
            "para" : "The Length L in Mile(mi) is equal to the Length L in Yard(yd) divide by 1760",
            "formula" : "L(mi) = L(yd) / 1760"
        },
    
        "yd_mm" : {
            "para" : "The Length L in Milimeter(mm) is equal to the Length L in Yard(yd) times 914.4",
            "formula" : "L(mm) = L(yd) * 914.4"
        },
    
    
    
        "mi_cm" : {
            "para" : "The Length L in Centimeter(cm) is equal to the Length L in Mile(mi) times 160934.4",
            "formula" : "L(cm) = L(mi) * 160934.4"
        },
    
        "mi_km" : {
            "para" : "The Length L in Kilometer(km) is equal to the Length L in Mile(mi) times 1.609",
            "formula" : "L(km) = L(mi) * 1.609"
        },
    
        "mi_m" : {
            "para" : "The Length L in Meter(m) is equal to the Length L in Mile(mi) times 1609.344",
            "formula" : "L(m) = L(mi) * 1609.344"
        },
    
        "mi_nm" : {
            "para" : "The Length L in Nautical Mile(nm) is equal to the Length L in Mile(mi) divide by 1.151",
            "formula" : "L(nm) = L(mi) / 1.151"
        },
    
        "mi_in" : {
            "para" : "The Length L in Inch(in) is equal to the Length L in Mile(mi) times 63360",
            "formula" : "L(in) = L(mi) * 63360"
        },
    
        "mi_ft" : {
            "para" : "The Length L in Foot(ft) is equal to the Length L in Mile(mi) times 5280",
            "formula" : "L(ft) = L(mi) * 5280"
        },
    
        "mi_yd" : {
            "para" : "The Length L in Yard(yd) is equal to the Length L in Mile(mi) times 1760",
            "formula" : "L(yd) = L(mi) * 1760"
        },
    
        "mi_mm" : {
            "para" : "The Length L in Milimeter(mm) is equal to the Length L in Mile(mi) times 1.609e+6",
            "formula" : "L(mm) = L(mi) * 1.609e+6"
        },
    
    
    
        "mm_cm" : {
            "para" : "The Length L in Centimeter(cm) is equal to the Length L in Milimeter(mm) divide by 10",
            "formula" : "L(cm) = L(mm) / 10"
        },
    
        "mm_km" : {
            "para" : "The Length L in Kilometer(km) is equal to the Length L in Milimeter(mm) divide by 1000000",
            "formula" : "L(km) = L(mm) / 1000000"
        },
    
        "mm_m" : {
            "para" : "The Length L in Meter(m) is equal to the Length L in Milimeter(mm) divide by 1000",
            "formula" : "L(m) = L(mm) / 1000"
        },
    
        "mm_nm" : {
            "para" : "The Length L in Nautical Mile(nm) is equal to the Length L in Milimeter(mm) divide by 1.852e+6",
            "formula" : "L(nm) = L(mm) / 1.852e+6"
        },
    
        "mm_in" : {
            "para" : "The Length L in Inch(in) is equal to the Length L in Milimeter(mm) divide by 25.4",
            "formula" : "L(in) = L(mm) / 25.4"
        },
    
        "mm_ft" : {
            "para" : "The Length L in Foot(ft) is equal to the Length L in Milimeter(mm) divide by 304.8",
            "formula" : "L(ft) = L(mm) / 304.8"
        },
    
        "mm_yd" : {
            "para" : "The Length L in Yard(yd) is equal to the Length L in Milimeter(mm) divide by 914.4",
            "formula" : "L(yd) = L(mm) / 914.4"
        },
    
        "mm_mi" : {
            "para" : "The Length L in Mile(mi) is equal to the Length L in Milimeter(mm) divide by 6.213711922e-7",
            "formula" : "L(mi) = L(mm) / 6.213711922e-7"
        }
    };

    let s = JSON.stringify(json_text);
    let content = JSON.parse(s);

    // document.getElementById("result").innerHTML = time.cmToMi;
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

    if (x == "mm") {
        if (y == "mi") {
            document.getElementById("result").innerHTML = input + " mm = " + mmToMi(input) + " mi";
        }
    
        else if (y == "yd") {  
            document.getElementById("result").innerHTML = input + " mm = " + mmToYd(input) + " yd";
        }
    
        else if (y == "ft") {
            document.getElementById("result").innerHTML = input + " mm = " + mmToFt(input) + " ft";
        }
    
        else if (y == "in") {
            document.getElementById("result").innerHTML = input + " mm = " + mmToIn(input) + " in";
        }
    
        else if (y == "nm") {
            document.getElementById("result").innerHTML = input + " mm = " + mmToNm(input) + " nm";
        }
    
        else if (y == "km") {
            document.getElementById("result").innerHTML = input + " mm = " + mmToKm(input) + " km";
        }
    
        else if (y == "m") {
            document.getElementById("result").innerHTML = input + " mm = " + mmToM(input) + " m";
        }
    
        else if (y == "cm") {
            document.getElementById("result").innerHTML = input + " mm = " + mmToCm(input) + " cm";
        }   
    }

    else if (x == "mi") {
        if (y == "mm") {
            document.getElementById("result").innerHTML = input + " mi = " + miToMm(input) + " mm";
        }
    
        else if (y == "yd") {  
            document.getElementById("result").innerHTML = input + " mi = " + miToYd(input) + " yd";
        }
    
        else if (y == "ft") {
            document.getElementById("result").innerHTML = input + " mi = " + miToFt(input) + " ft";
        }
    
        else if (y == "in") {
            document.getElementById("result").innerHTML = input + " mi = " + miToIn(input) + " in";
        }
    
        else if (y == "nm") {
            document.getElementById("result").innerHTML = input + " mi = " + miToNm(input) + " nm";
        }
    
        else if (y == "km") {
            document.getElementById("result").innerHTML = input + " mi = " + miToKm(input) + " km";
        }
    
        else if (y == "m") {
            document.getElementById("result").innerHTML = input + " mi = " + miToM(input) + " m";
        }
    
        else if (y == "cm") {
            document.getElementById("result").innerHTML = input + " mi = " + miToCm(input) + " cm";
        }  
    }

    else if (x == "yd") {
        if (y == "mi") {
            document.getElementById("result").innerHTML = input + " yd = " + ydToMi(input) + " mi";
        }
    
        else if (y == "mm") {  
            document.getElementById("result").innerHTML = input + " yd = " + ydToMm(input) + " mm";
        }
    
        else if (y == "ft") {
            document.getElementById("result").innerHTML = input + " yd = " + ydToFt(input) + " ft";
        }
    
        else if (y == "in") {
            document.getElementById("result").innerHTML = input + " yd = " + ydToIn(input) + " in";
        }
    
        else if (y == "nm") {
            document.getElementById("result").innerHTML = input + " yd = " + ydToNm(input) + " nm";
        }
    
        else if (y == "km") {
            document.getElementById("result").innerHTML = input + " yd = " + ydToKm(input) + " km";
        }
    
        else if (y == "m") {
            document.getElementById("result").innerHTML = input + " yd = " + ydToM(input) + " m";
        }
    
        else if (y == "cm") {
            document.getElementById("result").innerHTML = input + " yd = " + ydToCm(input) + " cm";
        }  
    }

    else if (x == "ft") {
        if (y == "mi") {
            document.getElementById("result").innerHTML = input + " ft = " + ftToMi(input) + " mi";
        }
    
        else if (y == "yd") {  
            document.getElementById("result").innerHTML = input + " ft = " + ftToYd(input) + " yd";
        }
    
        else if (y == "mm") {
            document.getElementById("result").innerHTML = input + " ft = " + ftToMm(input) + " mm";
        }
    
        else if (y == "in") {
            document.getElementById("result").innerHTML = input + " ft = " + ftToIn(input) + " in";
        }
    
        else if (y == "nm") {
            document.getElementById("result").innerHTML = input + " ft = " + ftToNm(input) + " nm";
        }
    
        else if (y == "km") {
            document.getElementById("result").innerHTML = input + " ft = " + ftToKm(input) + " km";
        }
    
        else if (y == "m") {
            document.getElementById("result").innerHTML = input + " ft = " + ftToM(input) + " m";
        }
    
        else if (y == "cm") {
            document.getElementById("result").innerHTML = input + " ft = " + ftToCm(input) + " cm";
        }  
    }

    else if (x == "in") {
        if (y == "mi") {
            document.getElementById("result").innerHTML = input + " in = " + inToMi(input) + " mi";
        }
    
        else if (y == "yd") {  
            document.getElementById("result").innerHTML = input + " in = " + inToYd(input) + " yd";
        }
    
        else if (y == "ft") {
            document.getElementById("result").innerHTML = input + " in = " + inToFt(input) + " ft";
        }
    
        else if (y == "mm") {
            document.getElementById("result").innerHTML = input + " in = " + inToMm(input) + " mm";
        }
    
        else if (y == "nm") {
            document.getElementById("result").innerHTML = input + " in = " + inToNm(input) + " nm";
        }
    
        else if (y == "km") {
            document.getElementById("result").innerHTML = input + " in = " + inToKm(input) + " km";
        }
    
        else if (y == "m") {
            document.getElementById("result").innerHTML = input + " in = " + inToM(input) + " m";
        }
    
        else if (y == "cm") {
            document.getElementById("result").innerHTML = input + " in = " + inToCm(input) + " cm";
        }  
    }

    else if (x == "nm") {
        if (y == "mi") {
            document.getElementById("result").innerHTML = input + " nm = " + nmToMi(input) + " mi";
        }
    
        else if (y == "yd") {  
            document.getElementById("result").innerHTML = input + " nm = " + nmToYd(input) + " yd";
        }
    
        else if (y == "ft") {
            document.getElementById("result").innerHTML = input + " nm = " + nmToFt(input) + " ft";
        }
    
        else if (y == "in") {
            document.getElementById("result").innerHTML = input + " nm = " + nmToIn(input) + " in";
        }
    
        else if (y == "mm") {
            document.getElementById("result").innerHTML = input + " nm = " + nmToMm(input) + " mm";
        }
    
        else if (y == "km") {
            document.getElementById("result").innerHTML = input + " nm = " + nmToKm(input) + " km";
        }
    
        else if (y == "m") {
            document.getElementById("result").innerHTML = input + " nm = " + nmToM(input) + " m";
        }
    
        else if (y == "cm") {
            document.getElementById("result").innerHTML = input + " nm = " + nmToCm(input) + " cm";
        }  
    }

    else if (x == "km") {
        if (y == "mi") {
            document.getElementById("result").innerHTML = input + " km = " + kmToMi(input) + " mi";
        }
    
        else if (y == "yd") {  
            document.getElementById("result").innerHTML = input + " km = " + kmToYd(input) + " yd";
        }
    
        else if (y == "ft") {
            document.getElementById("result").innerHTML = input + " km = " + kmToFt(input) + " ft";
        }
    
        else if (y == "in") {
            document.getElementById("result").innerHTML = input + " km = " + kmToIn(input) + " in";
        }
    
        else if (y == "nm") {
            document.getElementById("result").innerHTML = input + " km = " + kmToNm(input) + " nm";
        }
    
        else if (y == "mm") {
            document.getElementById("result").innerHTML = input + " km = " + kmToMm(input) + " mm";
        }
    
        else if (y == "m") {
            document.getElementById("result").innerHTML = input + " km = " + kmToM(input) + " m";
        }
    
        else if (y == "cm") {
            document.getElementById("result").innerHTML = input + " km = " + kmToCm(input) + " cm";
        }  
    }

    else if (x == "m") {
        if (y == "mi") {
            document.getElementById("result").innerHTML = input + " m = " + mToMi(input) + " mi";
        }
    
        else if (y == "yd") {  
            document.getElementById("result").innerHTML = input + " m = " + mToYd(input) + " yd";
        }
    
        else if (y == "ft") {
            document.getElementById("result").innerHTML = input + " m = " + mToFt(input) + " ft";
        }
    
        else if (y == "in") {
            document.getElementById("result").innerHTML = input + " m = " + mToIn(input) + " in";
        }
    
        else if (y == "nm") {
            document.getElementById("result").innerHTML = input + " m = " + mToNm(input) + " nm";
        }
    
        else if (y == "km") {
            document.getElementById("result").innerHTML = input + " m = " + mToKm(input) + " km";
        }
    
        else if (y == "mm") {
            document.getElementById("result").innerHTML = input + " m = " + mToMm(input) + " mm";
        }
    
        else if (y == "cm") {
            document.getElementById("result").innerHTML = input + " m = " + mToCm(input) + " cm";
        }  
    }

    else if (x == "cm") {
        if (y == "mi") {
            document.getElementById("result").innerHTML = input + " cm = " + cmToMi(input) + " mi";
        }
    
        else if (y == "yd") {  
            document.getElementById("result").innerHTML = input + " cm = " + cmToYd(input) + " yd";
        }
    
        else if (y == "ft") {
            document.getElementById("result").innerHTML = input + " cm = " + cmToFt(input) + " ft";
        }
    
        else if (y == "in") {
            document.getElementById("result").innerHTML = input + " cm = " + cmToIn(input) + " in";
        }
    
        else if (y == "nm") {
            document.getElementById("result").innerHTML = input + " cm = " + cmToNm(input) + " nm";
        }
    
        else if (y == "km") {
            document.getElementById("result").innerHTML = input + " cm = " + cmToKm(input) + " km";
        }
    
        else if (y == "m") {
            document.getElementById("result").innerHTML = input + " cm = " + cmToM(input) + " m";
        }
    
        else if (y == "mm") {
            document.getElementById("result").innerHTML = input + " cm = " + cmToMm(input) + " mm";
        }  
    }
}