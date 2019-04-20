function calculate() {
    let json_text = {
        "cm2_m2" : {
            "para" : "The Area A in square meter(m2) is equal to the Area A in square centimeter(cm2) divided by 0.0001",
            "formula" : "A(m2) = A(cm2) / 0.0001"
        },
    
        "cm2_ha" : {
            "para" : "The Area A in Hectare(ha) is equal to the Area A in square centimeter(cm2) divided by 1e+8",
            "formula" : "A(ha) = A(cm2) / 1e+8"
        },
    
        "cm2_km2" : {
            "para" : "The Area A in square kilometer(km2) is equal to the Area A in square centimeter(cm2) divided by 1e+10",
            "formula" : "A(km2) = A(cm2) / 1e+10"
        },
    
        "cm2_in2" : {
            "para" : "The Area A in square inch(in2) is equal to the Area A in square centimeter(cm2) divided by 6.452",
            "formula" : "A(in2) = A(cm2) / 6.452"
        },
    
        "cm2_ft2" : {
            "para" : "The Area A in square foot(ft2) is equal to the Area A in square centimeter(cm2) divided by 929.03",
            "formula" : "A(ft2) = A(cm2) / 929.03"
        },
    
        "cm2_yd2" : {
            "para" : "The Area A in square yard(yd2) is equal to the Area A in square centimeter(cm2) divided by 8361.274",
            "formula" : "A(yd2) = A(cm2) / 8361.274"
        },
    
        "cm2_mi2" : {
            "para" : "The Area A in mile square(mi2) is equal to the Area A in square centimeter(cm2) divided by 2.59e+10",
            "formula" : "A(mi2) = A(cm2) / 2.59e+10"
        },
    
        "cm2_ac" : {
            "para" : "The Area A in Acre(ac) is equal to the Area A in square centimeter(cm2) divided by 4.047e+7",
            "formula" : "A(ac) = A(cm2) / 4.047e+7"
        },
    
    
    
        "m2_cm2" : {
            "para" : "The Area A in square centimeter(cm2) is equal to the Area A in square meter(m2) times 10000",
            "formula" : "A(cm2) = A(m2) * 10000"
        },
    
        "m2_ha" : {
            "para" : "The Area A in Hectare(ha) is equal to the Area A in square meter(m2) divided by 10000",
            "formula" : "A(ha) = A(m2) / 10000"
        },
    
        "m2_km2" : {
            "para" : "The Area A in square kilometer(km2) is equal to the Area A in square meter(m2) divided by 1e+6",
            "formula" : "A(km2) = A(m2) / 1e+6"
        },
    
        "m2_in2" : {
            "para" : "The Area A in Square Inch(in2) is equal to the Area A in square meter(m2) times 1550.003",
            "formula" : "A(in2) = A(m2) * 1550.003"
        },
    
        "m2_ft2" : {
            "para" : "The Area A in Square Foot(ft2) is equal to the Area A in square meter(m2) times 10.764",
            "formula" : "A(ft2) = A(m2) * 10.764"
        },
    
        "m2_yd2" : {
            "para" : "The Area A in Square Yard(yd2) is equal to the Area A in square meter(m2) times 1.196",
            "formula" : "A(yd2) = A(m2) * 1.196"
        },
    
        "m2_mi2" : {
            "para" : "The Area A in Square Mile(km2) is equal to the Area A in square meter(m2) divided by 2.59e+6",
            "formula" : "A(mi2) = A(m2) / 2.59e+6"
        },
    
        "m2_Ac" : {
            "para" : "The Area A in Acre(ac) is equal to the Area A in square meter(m2) divided by 4046.856",
            "formula" : "A(km2) = A(m2) / 4046.856"
        },
    
    
    
        "km2_cm2" : {
            "para" : "The Area A in Square Centimeter(cm2) is equal to the Area A in Square Kilometer(km2) times 1e+10",
            "formula" : "A(cm2) = A(km2) * 1e+10"
        },
    
        "km2_ha" : {
            "para" : "The Area A in Hectare(ha) is equal to the Area A in Square Kilometer(km2) times 100",
            "formula" : "A(ha) = A(km2) * 100"
        },
    
        "km2_m2" : {
            "para" : "The Area A in Square Meter(m2) is equal to the Area A in Square Kilometer(km2) times 1e+6",
            "formula" : "A(m2) = A(km2) * 1e+6"
        },
    
        "km2_in2" : {
            "para" : "The Area A in Square Inch(in2) is equal to the Area A in Square Kilometer(km2) times 1.55e+9",
            "formula" : "A(in2) = A(km2) * 1.55e+9"
        },
    
        "km2_ft2" : {
            "para" : "The Area A in Square Foot(ft2) is equal to the Area A in Square Kilometer(km2) times 1.076e+7",
            "formula" : "A(ft2) = A(km2) * 1.076e+7"
        },
    
        "km2_yd2" : {
            "para" : "The Area A in Square Yard(yd2) is equal to the Area A in Square Kilometer(km2) times 1.196e+6",
            "formula" : "A(yd2) = A(km2) * 1.196e+6"
        },
    
        "km2_mi2" : {
            "para" : "The Area A in Square Mile(mi2) is equal to the Area A in Square Kilometer(km2) divided by 2.59",
            "formula" : "A(cm2) = A(km2) / 2.59"
        },
    
        "km2_ac" : {
            "para" : "The Area A in Acre(ac) is equal to the Area A in Square Kilometer(km2) times 247.105",
            "formula" : "A(cm2) = A(km2) * 247.105"
        },
    
    
    
        "ha_cm2" : {
            "para" : "The Area A in Square Centimeter(cm2) is equal to the Area A in Hectare(ha) times 1e+8",
            "formula" : "A(cm2) = A(ha) * 1e+8"
        },
    
        "ha_m2" : {
            "para" : "The Area A in Square Meter(m2) is equal to the Area A in Hectare(ha) times 10000",
            "formula" : "A(m2) = A(ha) * 10000"
        },
    
        "ha_km2" : {
            "para" : "The Area A in Square Kilometer(km2) is equal to the Area A in Hectare(ha) divide by 100",
            "formula" : "A(km2) = A(ha) / 100"
        },
    
        "ha_in2" : {
            "para" : "The Area A in Square Inch(in2) is equal to the Area A in Hectare(ha) times 1.55e+7",
            "formula" : "A(in2) = A(ha) * 1.55e+7"
        },
    
        "ha_ft2" : {
            "para" : "The Area A in Square Foot(ft2) is equal to the Area A in Hectare(ha) times 107639.104",
            "formula" : "A(ft2) = A(ha) * 107639.104"
        },
    
        "ha_yd2" : {
            "para" : "The Area A in Square Yard(m2) is equal to the Area A in Hectare(ha) times 11959.9",
            "formula" : "A(yd2) = A(ha) * 11959.9"
        },
    
        "ha_mi2" : {
            "para" : "The Area A in Square Mile(mi2) is equal to the Area A in Hectare(ha) divide by 258.999",
            "formula" : "A(mi2) = A(ha) / 258.999"
        },
    
        "ha_ac" : {
            "para" : "The Area A in Acre(ac) is equal to the Area A in Hectare(ha) times 2.471",
            "formula" : "A(ac) = A(ha) * 2.471"
        },
    
    
    
        "in2_cm2" : {
            "para" : "The Area A in Square Centimeter(cm2) is equal to the Area A in Square Inch(in2) times 6.452",
            "formula" : "A(cm2) = A(in2) * 6.452"
        },
    
        "in2_km2" : {
            "para" : "The Area A in Square Kilometer(km2) is equal to the Area A in Square Inch(in2) divide by 1.55e+9",
            "formula" : "A(km2) = A(in2) / 1.55e+9"
        },
    
        "in2_m2" : {
            "para" : "The Area A in Square Meter(m2) is equal to the Area A in Square Inch(in2) divide by 1550.003",
            "formula" : "A(m2) = A(in2) / 1550.003"
        },
    
        "in2_ha" : {
            "para" : "The Area A in Hectare(ha) is equal to the Area A in Square Inch(in2) times 1.55e+7",
            "formula" : "A(ha) = A(in2) * 1.55e+7"
        },
    
        "in2_ft2" : {
            "para" : "The Area A in Square Foot(ft2) is equal to the Area A in Square Inch(in2) divide by 144",
            "formula" : "A(ft2) = A(in2) / 144"
        },
    
        "in2_yd2" : {
            "para" : "The Area A in Square Yard(yd2) is equal to the Area A in Square Inch(in2) divide by 1296",
            "formula" : "A(yd2) = A(in2) / 1296"
        },
    
        "in2_mi2" : {
            "para" : "The Area A in Square Mile(mi2) is equal to the Area A in Square Inch(in2) divide by 4.014e+9",
            "formula" : "A(mi2) = A(in2) / 4,0144e+9"
        },
    
        "in2_ac" : {
            "para" : "The Area A in Acre(ac) is equal to the Area A in Square Inch(in2) divide by 6.273e+6",
            "formula" : "A(ac) = A(in2) / 6.273e+6"
        },
    
        "in2_mi2" : {
            "para" : "The Area A in Square Mile(mi2) is equal to the Area A in Square Inch(in2) divide by 4.014e+9",
            "formula" : "A(mi2) = A(in2) / 4,0144e+9"
        },
    
    
    
        "ft2_cm2" : {
            "para" : "The Area A in Square Centimeter(cm2) is equal to the Area A in Square Foot(ft2) times 929.03",
            "formula" : "A(cm2) = A(ft2) * 929.03"
        },
    
        "ft2_km2" : {
            "para" : "The Area A in Square Kilometer(km2) is equal to the Area A in Square Foot(ft2) divide by 1.076e+7",
            "formula" : "A(km2) = A(ft2) / 1.076e+7"
        },
    
        "ft2_m2" : {
            "para" : "The Area A in Square Meter(mm2) is equal to the Area A in Square Foot(ft2) divide by 10.764",
            "formula" : "A(m2) = A(ft2) / 10.764"
        },
    
        "ft2_ha" : {
            "para" : "The Area A in Hectare(ha) is equal to the Area A in Square Foot(ft2) divide by 107639.104",
            "formula" : "A(ha) = A(ft2) / 107639.104"
        },
    
        "ft2_in2" : {
            "para" : "The Area A in Square Inch(in2) is equal to the Area A in Square Foot(ft2) times 144",
            "formula" : "A(in2) = A(ft2) * 144"
        },
    
        "ft2_yd2" : {
            "para" : "The Area A in Square Yard(yd2) is equal to the Area A in Square Foot(ft2) divide by 9",
            "formula" : "A(yd2) = A(ft2) / 9"
        },
    
        "ft2_mi2" : {
            "para" : "The Area A in Square Mile(mi2) is equal to the Area A in Square Foot(ft2) divide by 2.788e+7",
            "formula" : "A(mi2) = A(ft2) / 2.788e+7"
        },
    
        "ft2_ac" : {
            "para" : "The Area A in Acre(ac) is equal to the Area A in Square Foot(ft2) divide by 43560",
            "formula" : "A(ac2) = A(ft2) / 43560"
        },
    
    
    
        "yd2_cm2" : {
            "para" : "The Area A in Square Centimeter(cm2) is equal to the Area A in Square Yard(ft2) times 8361.274",
            "formula" : "A(cm2) = A(yd2) * 8361.274"
        },
    
        "yd2_km2" : {
            "para" : "The Area A in Square Kilometer(km2) is equal to the Area A in Square Yard(ft2) divide by 1.196e+6",
            "formula" : "A(km2) = A(yd2) / 1.196e+6"
        },
    
        "yd2_m2" : {
            "para" : "The Area A in Square Meter(m2) is equal to the Area A in Square Yard(ft2) divide by 1.196",
            "formula" : "A(m2) = A(yd2) / 1.196"
        },
    
        "yd2_ha" : {
            "para" : "The Area A in Hectare(ha) is equal to the Area A in Square Yard(ft2) divide by 11959.9",
            "formula" : "A(ha) = A(yd2) / 11959.9"
        },
    
        "yd2_in2" : {
            "para" : "The Area A in Square Inch(in2) is equal to the Area A in Square Yard(ft2) times 1296",
            "formula" : "A(in2) = A(yd2) * 1296"
        },
    
        "yd2_ft2" : {
            "para" : "The Area A in Square Foot(ft2) is equal to the Area A in Square Yard(ft2) times 9",
            "formula" : "A(ft2) = A(yd2) * 9"
        },
    
        "yd2_mi2" : {
            "para" : "The Area A in Square Mile(mi2) is equal to the Area A in Square Yard(ft2) divide by 3.098e+6",
            "formula" : "A(mi2) = A(yd2) / 3.098e+6"
        },
    
        "yd2_ac" : {
            "para" : "The Area A in Acre(ac) is equal to the Area A in Square Yard(ft2) divide by 4840",
            "formula" : "A(ac) = A(yd2) / 4840"
        },
    
    
    
        "mi2_cm2" : {
            "para" : "The Area A in Square Centimeter(cm2) is equal to the Area A in Square Mile(mi2) times 2.59e+10",
            "formula" : "A(cm2) = A(mi2) * 2.59e+10"
        },
    
        "mi2_km2" : {
            "para" : "The Area A in Square Kilometer(km2) is equal to the Area A in Square Mile(mi2) times 2.59",
            "formula" : "A(km2) = A(mi2) * 2.59"
        },
    
        "mi2_m2" : {
            "para" : "The Area A in Square Meter(m2) is equal to the Area A in Square Mile(mi2) times 2.59e+6",
            "formula" : "A(m2) = A(mi2) * 2.59e+6"
        },
    
        "mi2_ha" : {
            "para" : "The Area A in Hectare(ha) is equal to the Area A in Square Mile(mi2) times 258.999",
            "formula" : "A(ha) = A(mi2) * 258.999"
        },
    
        "mi2_in2" : {
            "para" : "The Area A in Square Inch(in2) is equal to the Area A in Square Mile(mi2) times 4.014e+9",
            "formula" : "A(in2) = A(mi2) * 4.014e+9"
        },
    
        "mi2_ft2" : {
            "para" : "The Area A in Square Foot(ft2) is equal to the Area A in Square Mile(mi2) times 2.788e+7",
            "formula" : "A(ft2) = A(mi2) * 2.788e+7"
        },
    
        "mi2_yd2" : {
            "para" : "The Area A in Square Yard(yd2) is equal to the Area A in Square Mile(mi2) times 3.098e+6",
            "formula" : "A(yd2) = A(mi2) * 3.098e+6"
        },
    
        "mi2_ac" : {
            "para" : "The Area A in Acre(ac) is equal to the Area A in Square Mile(mi2) times 640",
            "formula" : "A(ac) = A(mi2) * 640"
        },
    
    
    
        "ac_cm2" : {
            "para" : "The Area A in Square Centimeter(cm2) is equal to the Area A in Acre(ac) times 4.047e+7",
            "formula" : "A(cm2) = A(ac) * 4.047e+7"
        },
    
        "ac_km2" : {
            "para" : "The Area A in Square Kilometer(km2) is equal to the Area A in Acre(ac) divide by 247.105",
            "formula" : "A(km2) = A(ac) / 247.105"
        },
    
        "ac_m2" : {
            "para" : "The Area A in Square Meter(m2) is equal to the Area A in Acre(ac) times 4046.856",
            "formula" : "A(m2) = A(ac) * 4046.856"
        },
    
        "ac_ha" : {
            "para" : "The Area A in Hectare(ha) is equal to the Area A in Acre(ac) divide by 2.471",
            "formula" : "A(ha) = A(ac) / 2.471"
        },
    
        "ac_in2" : {
            "para" : "The Area A in Square Inch(in2) is equal to the Area A in Acre(ac) times 6.273e+6",
            "formula" : "A(in2) = A(ac) * 6.273e+6"
        },
    
        "ac_ft2" : {
            "para" : "The Area A in Square Foot(ft2) is equal to the Area A in Acre(ac) times 43560",
            "formula" : "A(ft2) = A(ac) * 43560"
        },
    
        "ac_yd2" : {
            "para" : "The Area A in Square Yard(yd2) is equal to the Area A in Acre(ac) times 4840",
            "formula" : "A(yd2) = A(ac) * 4840"
        },
    
        "ac_mi2" : {
            "para" : "The Area A in Square Mile(mi2) is equal to the Area A in Acre(ac) divide by 640",
            "formula" : "A(mi2) = A(ac) / 640"
        }
    };

    let s = JSON.stringify(json_text);
    let content = JSON.parse(s);

    // document.getElementById("result").innerHTML = time.cmToMi2;
    var x = document.getElementById("menu1").value;
    var y = document.getElementById("menu2").value;
    
    if (x === y || x === "" || y === "") {
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

    if (x == "ac") {
        if (y == "mi2") {
            document.getElementById("result").innerHTML = input + " ac = " + acToMi2(input) + " mi2";
        }
    
        else if (y == "yd2") {  
            document.getElementById("result").innerHTML = input + " ac = " + acToYd2(input) + " yd2";
        }
    
        else if (y == "ft2") {
            document.getElementById("result").innerHTML = input + " ac = " + acToFt2(input) + " ft2";
        }
    
        else if (y == "in2") {
            document.getElementById("result").innerHTML = input + " ac = " + acToIn2(input) + " in2";
        }
    
        else if (y == "ha") {
            document.getElementById("result").innerHTML = input + " ac = " + acToHa(input) + " ha";
        }
    
        else if (y == "km2") {
            document.getElementById("result").innerHTML = input + " ac = " + acToKm2(input) + " km2";
        }
    
        else if (y == "m2") {
            document.getElementById("result").innerHTML = input + " ac = " + acToM2(input) + " m2";
        }
    
        else if (y == "cm2") {
            document.getElementById("result").innerHTML = input + " ac = " + acToCm2(input) + " cm2";
        }   
    }

    else if (x == "mi2") {
        if (y == "ac") {
            document.getElementById("result").innerHTML = input + " mi2 = " + mi2toAc(input) + " ac";
        }
    
        else if (y == "yd2") {  
            document.getElementById("result").innerHTML = input + " mi2 = " + mi2toYd2(input) + " yd2";
        }
    
        else if (y == "ft2") {
            document.getElementById("result").innerHTML = input + " mi2 = " + mi2ToFt2(input) + " ft2";
        }
    
        else if (y == "in2") {
            document.getElementById("result").innerHTML = input + " mi2 = " + mi2ToIn2(input) + " in2";
        }
    
        else if (y == "ha") {
            document.getElementById("result").innerHTML = input + " mi2 = " + mi2ToHa(input) + " ha";
        }
    
        else if (y == "km2") {
            document.getElementById("result").innerHTML = input + " mi2 = " + mi2ToKm2(input) + " km2";
        }
    
        else if (y == "m2") {
            document.getElementById("result").innerHTML = input + " mi2 = " + mi2ToM2(input) + " m2";
        }
    
        else if (y == "cm2") {
            document.getElementById("result").innerHTML = input + " mi2 = " + mi2ToCm2(input) + " cm2";
        }  
    }

    else if (x == "yd2") {
        if (y == "mi2") {
            document.getElementById("result").innerHTML = input + " yd2 = " + yd2ToMi2(input) + " mi2";
        }
    
        else if (y == "ac") {  
            document.getElementById("result").innerHTML = input + " yd2 = " + yd2ToAc(input) + " ac";
        }
    
        else if (y == "ft2") {
            document.getElementById("result").innerHTML = input + " yd2 = " + yd2ToFt2(input) + " ft2";
        }
    
        else if (y == "in2") {
            document.getElementById("result").innerHTML = input + " yd2 = " + yd2ToIn2(input) + " in2";
        }
    
        else if (y == "ha") {
            document.getElementById("result").innerHTML = input + " yd2 = " + yd2ToHa(input) + " ha";
        }
    
        else if (y == "km2") {
            document.getElementById("result").innerHTML = input + " yd2 = " + yd2ToKm2(input) + " km2";
        }
    
        else if (y == "m2") {
            document.getElementById("result").innerHTML = input + " yd2 = " + yd2ToM2(input) + " m2";
        }
    
        else if (y == "cm2") {
            document.getElementById("result").innerHTML = input + " a = " + yd2ToCm2(input) + " cm2";
        }  
    }

    else if (x == "ft2") {
        if (y == "mi2") {
            document.getElementById("result").innerHTML = input + " ft2 = " + ft2ToMi2(input) + " mi2";
        }
    
        else if (y == "yd2") {  
            document.getElementById("result").innerHTML = input + " ft2 = " + ft2ToYd2(input) + " yd2";
        }
    
        else if (y == "ac") {
            document.getElementById("result").innerHTML = input + " ft2 = " + ft2ToAc(input) + " ac";
        }
    
        else if (y == "in2") {
            document.getElementById("result").innerHTML = input + " ft2 = " + ft2ToIn2(input) + " in2";
        }
    
        else if (y == "ha") {
            document.getElementById("result").innerHTML = input + " ft2 = " + ft2ToHa(input) + " ha";
        }
    
        else if (y == "km2") {
            document.getElementById("result").innerHTML = input + " ft2 = " + ft2ToKm2(input) + " km2";
        }
    
        else if (y == "m2") {
            document.getElementById("result").innerHTML = input + " ft2 = " + ft2ToM2(input) + " m2";
        }
    
        else if (y == "cm2") {
            document.getElementById("result").innerHTML = input + " ft2 = " + ft2ToCm2(input) + " cm2";
        }  
    }

    else if (x == "in2") {
        if (y == "mi2") {
            document.getElementById("result").innerHTML = input + " in2 = " + in2ToMi2(input) + " mi2";
        }
    
        else if (y == "yd2") {  
            document.getElementById("result").innerHTML = input + " in2 = " + in2ToYd2(input) + " yd2";
        }
    
        else if (y == "ft2") {
            document.getElementById("result").innerHTML = input + " in2 = " + in2ToFt2(input) + " ft2";
        }
    
        else if (y == "ac") {
            document.getElementById("result").innerHTML = input + " in2 = " + in2ToAc(input) + " ac";
        }
    
        else if (y == "ha") {
            document.getElementById("result").innerHTML = input + " in2 = " + in2ToHa(input) + " ha";
        }
    
        else if (y == "km2") {
            document.getElementById("result").innerHTML = input + " in2 = " + in2ToKm2(input) + " km2";
        }
    
        else if (y == "m2") {
            document.getElementById("result").innerHTML = input + " in2 = " + in2ToM2(input) + " m2";
        }
    
        else if (y == "cm2") {
            document.getElementById("result").innerHTML = input + " in2 = " + in2ToCm2(input) + " cm2";
        }  
    }

    else if (x == "ha") {
        if (y == "mi2") {
            document.getElementById("result").innerHTML = input + " ha = " + haToMi2(input) + " mi2";
        }
    
        else if (y == "yd2") {  
            document.getElementById("result").innerHTML = input + " ha = " + haToYd2(input) + " yd2";
        }
    
        else if (y == "ft2") {
            document.getElementById("result").innerHTML = input + " ha = " + haToFt2(input) + " ft2";
        }
    
        else if (y == "in2") {
            document.getElementById("result").innerHTML = input + " ha = " + haToIn2(input) + " in2";
        }
    
        else if (y == "ac") {
            document.getElementById("result").innerHTML = input + " ha = " + haToAc(input) + " ac";
        }
    
        else if (y == "km2") {
            document.getElementById("result").innerHTML = input + " ha = " + haToKm2(input) + " km2";
        }
    
        else if (y == "m2") {
            document.getElementById("result").innerHTML = input + " ha = " + haToM2(input) + " m2";
        }
    
        else if (y == "cm2") {
            document.getElementById("result").innerHTML = input + " ha = " + haToCm2(input) + " cm2";
        }  
    }

    else if (x == "km2") {
        if (y == "mi2") {
            document.getElementById("result").innerHTML = input + " km2 = " + km2ToMi2(input) + " mi2";
        }
    
        else if (y == "yd2") {  
            document.getElementById("result").innerHTML = input + " km2 = " + km2ToYd2(input) + " yd2";
        }
    
        else if (y == "ft2") {
            document.getElementById("result").innerHTML = input + " km2 = " + km2ToFt2(input) + " ft2";
        }
    
        else if (y == "in2") {
            document.getElementById("result").innerHTML = input + " km2 = " + km2ToIn2(input) + " in2";
        }
    
        else if (y == "ha") {
            document.getElementById("result").innerHTML = input + " km2 = " + km2ToHa(input) + " ha";
        }
    
        else if (y == "ac") {
            document.getElementById("result").innerHTML = input + " km2 = " + km2ToAc(input) + " ac";
        }
    
        else if (y == "m2") {
            document.getElementById("result").innerHTML = input + " km2 = " + km2ToM2(input) + " m2";
        }
    
        else if (y == "cm2") {
            document.getElementById("result").innerHTML = input + " km2 = " + km2ToCm2(input) + " cm2";
        }  
    }

    else if (x == "m2") {
        if (y == "mi2") {
            document.getElementById("result").innerHTML = input + " m2 = " + m2ToMi2(input) + " mi2";
        }
    
        else if (y == "yd2") {  
            document.getElementById("result").innerHTML = input + " m2 = " + m2ToYd2(input) + " yd2";
        }
    
        else if (y == "ft2") {
            document.getElementById("result").innerHTML = input + " m2 = " + m2ToFt2(input) + " ft2";
        }
    
        else if (y == "in2") {
            document.getElementById("result").innerHTML = input + " m2 = " + m2ToIn2(input) + " in2";
        }
    
        else if (y == "ha") {
            document.getElementById("result").innerHTML = input + " m2 = " + m2ToHa(input) + " ha";
        }
    
        else if (y == "km2") {
            document.getElementById("result").innerHTML = input + " m2 = " + m2ToKm2(input) + " km2";
        }
    
        else if (y == "ac") {
            document.getElementById("result").innerHTML = input + " m2 = " + m2ToAc(input) + " ac";
        }
    
        else if (y == "cm2") {
            document.getElementById("result").innerHTML = input + " m2 = " + m2ToCm2(input) + " cm2";
        }  
    }

    else if (x == "cm2") {
        if (y == "mi2") {
            document.getElementById("result").innerHTML = input + " cm2 = " + cm2ToMi2(input) + " mi2";
        }
    
        else if (y == "yd2") {  
            document.getElementById("result").innerHTML = input + " cm2 = " + cm2ToYd2(input) + " yd2";
        }
    
        else if (y == "ft2") {
            document.getElementById("result").innerHTML = input + " cm2 = " + cm2ToFt2(input) + " ft2";
        }
    
        else if (y == "in2") {
            document.getElementById("result").innerHTML = input + " cm2 = " + cm2ToIn2(input) + " in2";
        }
    
        else if (y == "ha") {
            document.getElementById("result").innerHTML = input + " cm2 = " + cm2ToHa(input) + " ha";
        }
    
        else if (y == "km2") {
            document.getElementById("result").innerHTML = input + " cm2 = " + cm2ToKm2(input) + " km2";
        }
    
        else if (y == "m2") {
            document.getElementById("result").innerHTML = input + " cm2 = " + cm2ToM2(input) + " m2";
        }
    
        else if (y == "ac") {
            document.getElementById("result").innerHTML = input + " cm2 = " + cm2ToAc(input) + " ac";
        }  
    }
}