function calculate() {
    let json_text = {
        "ml_cubicIn" : {
            "para" : "The Volume V in Cubic Inch(cubicIn) is equal to the Volume V in Mililitre(ml) divided by 16.387",
            "formula" : "L(cubicIn) = L(ml) / 16.387"
        },
    
        "ml_cubicM" : {
            "para" : "The Volume V in Cubic Meter(cubicM) is equal to the Volume V in Mililitre(ml) divided by 1e+6",
            "formula" : "L(cubicM) = L(ml) / 1e+6"
        },
    
        "ml_ltr" : {
            "para" : "The Volume V in Litre(ltr) is equal to the Volume V in Mililitre(ml) divide by 1000",
            "formula" : "L(ltr) = L(ml) / 1000"
        },
    
        "ml_qt" : {
            "para" : "The Volume V in Quart(qt) is equal to the Volume V in Mililitre(ml) divided by 1136.522",
            "formula" : "L(qt) = L(ml) / 1136.522"
        },
    
        "ml_pt" : {
            "para" : "The Volume V in Pint(pt) is equal to the Volume V in Mililitre(ml) divided by 568.261",
            "formula" : "L(pt) = L(ml) / 568.261"
        },
    
        "ml_gal" : {
            "para" : "The Volume V in Gallon(gal) is equal to the Volume V in Mililitre(ml) divided by 4546.09",
            "formula" : "L(gal) = L(ml) / 4546.09"
        },
    
        "ml_cubicFt" : {
            "para" : "The Volume V in Cubic Feet(cubicFt) is equal to the Volume V in Mililitre(ml) divide by 28316.847",
            "formula" : "L(cubicFt) = L(ml) / 28316.847"
        },
    
    
    
        "cubicIn_ml" : {
            "para" : "The Volume V in Mililitre(ml) is equal to the Volume V in Cubic Inch(cubicIn) times 16.387",
            "formula" : "L(ml) = L(cubicIn) * 16.387"
        },
    
        "cubicIn_cubicM" : {
            "para" : "The Volume V in Cubic Meter(cubicM) is equal to the Volume V in Cubic Inch(cubicIn) divided by 61023.744",
            "formula" : "L(cubicM) = L(cubicIn) / 61023.744"
        },
    
        "cubicIn_ltr" : {
            "para" : "The Volume V in Litre(ltr) is equal to the Volume V in Cubic Inch(cubicIn) divide by 61.024",
            "formula" : "L(ltr) = L(cubicIn) / 61.024"
        },
    
        "cubicIn_qt" : {
            "para" : "The Volume V in Quart(qt) is equal to the Volume V in Cubic Inch(cubicIn) divide by 69.335",
            "formula" : "L(qt) = L(cubicIn) / 69.335"
        },
    
        "cubicIn_pt" : {
            "para" : "The Volume V in Pint(pt) is equal to the Volume V in Cubic Inch(cubicIn) divide by 34.677",
            "formula" : "L(pt) = L(cubicIn) / 34.677"
        },
    
        "cubicIn_gal" : {
            "para" : "The Volume V in Gallon(gal) is equal to the Volume V in Cubic Inch(cubicIn) divided by 277.419",
            "formula" : "L(gal) = L(cubicIn) / 277.419"
        },
    
        "cubicIn_cubicFt" : {
            "para" : "The Volume V in Cubic Feet(cubicFt) is equal to the Volume V in Cubic Inch(cubicIn) divide by 1728",
            "formula" : "L(cubicFt) = L(cubicIn) / 1728"
        },
    
    
    
        "cubicM_ml" : {
            "para" : "The Volume V in Mililitre(ml) is equal to the Volume V in Cubic Meter(cubicM) times 1e+6",
            "formula" : "L(ml) = L(cubicM) * 1e+6"
        },
    
        "cubicM_cubicIn" : {
            "para" : "The Volume V in Cubic Inch(cubicIn) is equal to the Volume V in Cubic Meter(cubicM) times 61023.744",
            "formula" : "L(cubicIn) = L(cubicM) * 61023.744"
        },
    
        "cubicM_ltr" : {
            "para" : "The Volume V in Litre(ltr) is equal to the Volume V in Cubic Meter(cubicM) times 1000",
            "formula" : "L(ltr) = L(cubicM) * 1000"
        },
    
        "cubicM_qt" : {
            "para" : "The Volume V in Quart(qt) is equal to the Volume V in Cubic Meter(cubicM) times 879.877",
            "formula" : "L(qt) = L(cubicM) * 879.877"
        },
    
        "cubicM_pt" : {
            "para" : "The Volume V in Pint(pt) is equal to the Volume V in Cubic Meter(cubicM) times 1759.754",
            "formula" : "L(pt) = L(cubicM) * 1759.754"
        },
    
        "cubicM_gal" : {
            "para" : "The Volume V in Gallon(gal) is equal to the Volume V in Cubic Meter(cubicM) times 219.969",
            "formula" : "L(gal) = L(cubicM) * 219.969"
        },
    
        "cubicM_cubicFt" : {
            "para" : "The Volume V in Cubic Feet(cubicFt) is equal to the Volume V in Cubic Meter(cubicM) times 35.315",
            "formula" : "L(cubicFt) = L(cubicM) * 35.315"
        },
    
    
    
        "ltr_ml" : {
            "para" : "The Volume V in Mililitre(ml) is equal to the Volume V in Litre(ltr) times 1000",
            "formula" : "L(ml) = L(ltr) * 1000"
        },
    
        "ltr_cubicM" : {
            "para" : "The Volume V in Cubic Meter(cubicM) is equal to the Volume V in Litre(ltr) times 1000",
            "formula" : "L(cubicM) = L(ltr) * 1000"
        },
    
        "ltr_cubicIn" : {
            "para" : "The Volume V in Cubic Inch(cubicIn) is equal to the Volume V in Litre(ltr) times 61.024",
            "formula" : "L(cubicIn) = L(ltr) * 61.024"
        },
    
        "ltr_qt" : {
            "para" : "The Volume V in Quart(qt) is equal to the Volume V in Litre(ltr) divide by 1.137",
            "formula" : "L(qt) = L(ltr) / 1.137"
        },
    
        "ltr_pt" : {
            "para" : "The Volume V in Pint(pt) is equal to the Volume V in Litre(ltr) times 1.76",
            "formula" : "L(pt) = L(ltr) * 1.76"
        },
    
        "ltr_gal" : {
            "para" : "The Volume V in Gallon(gal) is equal to the Volume V in Litre(ltr) divide by 4.546",
            "formula" : "L(gal) = L(ltr) / 4.546"
        },
    
        "ltr_cubicFt" : {
            "para" : "The Volume V in Cubic Feet(cubicFt) is equal to the Volume V in Litre(ltr) divide by 28.317",
            "formula" : "L(cubicFt) = L(ltr) / 28.317"
        },
    
    
    
        "qt_ml" : {
            "para" : "The Volume V in Mililitre(ml) is equal to the Volume V in Quart(qt) times 1136.522",
            "formula" : "L(ml) = L(qt) * 1136.522"
        },
    
        "qt_cubicM" : {
            "para" : "The Volume V in Cubic Meter(cubicM) is equal to the Volume V in Quart(qt) divide by 879.877",
            "formula" : "L(cubicM) = L(qt) / 879.877"
        },
    
        "qt_cubicIn" : {
            "para" : "The Volume V in Cubic Inch(cubicIn) is equal to the Volume V in Quart(qt) times 69.335",
            "formula" : "L(cubicIn) = L(qt) * 69.335"
        },
    
        "qt_ltr" : {
            "para" : "The Volume V in Litre(ltr) is equal to the Volume V in Quart(qt) times 1.137",
            "formula" : "L(ltr) = L(qt) * 1.137"
        },
    
        "qt_pt" : {
            "para" : "The Volume V in Pint(pt) is equal to the Volume V in Quart(qt) times 2",
            "formula" : "L(pt) = L(qt) * 2"
        },
    
        "qt_gal" : {
            "para" : "The Volume V in Gallon(gal) is equal to the Volume V in Quart(qt) divide by 4",
            "formula" : "L(gal) = L(qt) / 4"
        },
    
        "qt_cubicFt" : {
            "para" : "The Volume V in Cubic Feet(cubicFt) is equal to the Volume V in Quart(qt) divide by 24.915",
            "formula" : "L(cubicFt) = L(qt) / 24.915"
        },
    
    
    
        "pt_ml" : {
            "para" : "The Volume V in Mililitre(ml) is equal to the Volume V in Pint(pt) times 568.261",
            "formula" : "L(ml) = L(pt) * 568.261"
        },
    
        "pt_cubicM" : {
            "para" : "The Volume V in Cubic Meter(cubicM) is equal to the Volume V in Pint(pt) divide by 1759.754",
            "formula" : "L(cubicM) = L(pt) / 1759.754"
        },
    
        "pt_cubicIn" : {
            "para" : "The Volume V in Cubic Inch(cubicIn) is equal to the Volume V in Pint(pt) times 34.677",
            "formula" : "L(cubicIn) = L(pt) * 34.677"
        },
    
        "pt_ltr" : {
            "para" : "The Volume V in Litre(ltr) is equal to the Volume V in Pint(pt) divide by 1.76",
            "formula" : "L(ltr) = L(pt) / 1.76"
        },
    
        "pt_qt" : {
            "para" : "The Volume V in Quart(qt) is equal to the Volume V in Pint(pt) divide by 2",
            "formula" : "L(qt) = L(pt) / 2"
        },
    
        "pt_gal" : {
            "para" : "The Volume V in Gallon(gal) is equal to the Volume V in Pint(pt) divide by 8",
            "formula" : "L(gal) = L(pt) / 8"
        },
    
        "pt_cubicFt" : {
            "para" : "The Volume V in Cubic Feet(cubicFt) is equal to the Volume V in Pint(pt) divide by 49.831",
            "formula" : "L(cubicFt) = L(pt) / 49.831"
        },
    
    
    
        "gal_ml" : {
            "para" : "The Volume V in Mililitre(ml) is equal to the Volume V in Gallon(gal) times 4546.09",
            "formula" : "L(ml) = L(gal) * 4546.09"
        },
    
        "gal_cubicM" : {
            "para" : "The Volume V in Cubic Meter(cubicM) is equal to the Volume V in Gallon(gal) divide by 219.969",
            "formula" : "L(cubicM) = L(gal) / 219.969"
        },
    
        "gal_cubicIn" : {
            "para" : "The Volume V in Cubic Inch(cubicIn) is equal to the Volume V in Gallon(gal) times 277.419",
            "formula" : "L(cubicIn) = L(gal) * 277.419"
        },
    
        "gal_ltr" : {
            "para" : "The Volume V in Litre(ltr) is equal to the Volume V in Gallon(gal) times 4.546",
            "formula" : "L(ltr) = L(gal) * 4.546"
        },
    
        "gal_qt" : {
            "para" : "The Volume V in Quart(qt) is equal to the Volume V in Gallon(gal) times 4",
            "formula" : "L(qt) = L(gal) * 3"
        },
    
        "gal_pt" : {
            "para" : "The Volume V in Pint(pt) is equal to the Volume V in Gallon(gal) times 8",
            "formula" : "L(pt) = L(gal) * 8"
        },
    
        "gal_cubicFt" : {
            "para" : "The Volume V in Cubic Feet(cubicFt) is equal to the Volume V in Gallon(gal) divide by 6.229",
            "formula" : "L(cubicFt) = L(gal) / 6.229"
        },
    
        
    
        "cubicFt_ml" : {
            "para" : "The Volume V in Mililitre(ml) is equal to the Volume V in Cubic Feet(cubicFt) times 28316.847",
            "formula" : "L(ml) = L(cubicFt) * 28316.847"
        },
    
        "cubicFt_cubicM" : {
            "para" : "The Volume V in Cubic Meter(cubicM) is equal to the Volume V in Cubic Feet(cubicFt) times 35.315",
            "formula" : "L(cubicM) = L(cubicFt) * 35.315"
        },
    
        "cubicFt_cubicIn" : {
            "para" : "The Volume V in Cubic Inch(cubicIn) is equal to the Volume V in Cubic Feet(cubicFt) times 1728",
            "formula" : "L(cubicIn) = L(cubicFt) * 1728"
        },
    
        "cubicFt_ltr" : {
            "para" : "The Volume V in Litre(ltr) is equal to the Volume V in Cubic Feet(cubicFt) times 28.317",
            "formula" : "L(ltr) = L(cubicFt) * 28.317"
        },
    
        "cubicFt_qt" : {
            "para" : "The Volume V in Quart(qt) is equal to the Volume V in Cubic Feet(cubicFt) times 24.915",
            "formula" : "L(qt) = L(cubicFt) * 24.915"
        },
    
        "cubicFt_pt" : {
            "para" : "The Volume V in Pint(pt) is equal to the Volume V in Cubic Feet(cubicFt) times 49.831",
            "formula" : "L(pt) = L(cubicFt) * 49.831"
        },
    
        "cubicFt_gal" : {
            "para" : "The Volume V in Gallon(gal) is equal to the Volume V in Cubic Feet(cubicFt) times 6.229",
            "formula" : "L(gal) = L(cubicFt) * 6.229"
        }
    };

    let s = JSON.stringify(json_text);
    let content = JSON.parse(s);

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

    if (x == "cubicFt") {
        if (y == "gal") {
            document.getElementById("result").innerHTML = input + " cubicFt = " + cubicFtToGal(input) + " gal";
        }
    
        else if (y == "pt") {  
            document.getElementById("result").innerHTML = input + " cubicFt = " + cubicFtToPt(input) + " pt";
        }
    
        else if (y == "qt") {
            document.getElementById("result").innerHTML = input + " cubicFt = " + cubicFtToQt(input) + " qt";
        }
    
        else if (y == "ltr") {
            document.getElementById("result").innerHTML = input + " cubicFt = " + cubicFtToLtr(input) + " ltr";
        }
    
        else if (y == "cubicM") {
            document.getElementById("result").innerHTML = input + " cubicFt = " + cubicFtToCubicM(input) + " cubicM";
        }
    
        else if (y == "cubicIn") {
            document.getElementById("result").innerHTML = input + " cubicFt = " + cubicFtToCubicIn(input) + " cubicIn";
        }
    
        else if (y == "ml") {
            document.getElementById("result").innerHTML = input + " cubicFt = " + cubicFtToMl(input) + " ml";
        }   
    }

    else if (x == "gal") {
        if (y == "cubicFt") {
            document.getElementById("result").innerHTML = input + " gal = " + galToCubicFt(input) + " cubicFt";
        }
    
        else if (y == "pt") {  
            document.getElementById("result").innerHTML = input + " gal = " + galToPt(input) + " pt";
        }
    
        else if (y == "qt") {
            document.getElementById("result").innerHTML = input + " gal = " + galToQt(input) + " qt";
        }
    
        else if (y == "ltr") {
            document.getElementById("result").innerHTML = input + " gal = " + galToLtr(input) + " ltr";
        }
    
        else if (y == "cubicM") {
            document.getElementById("result").innerHTML = input + " gal = " + galToCubicM(input) + " cubicM";
        }
    
        else if (y == "cubicIn") {
            document.getElementById("result").innerHTML = input + " gal = " + galToCubicIn(input) + " cubicIn";
        }
    
        else if (y == "ml") {
            document.getElementById("result").innerHTML = input + " gal = " + galToMl(input) + " ml";
        }  
    }

    else if (x == "pt") {
        if (y == "gal") {
            document.getElementById("result").innerHTML = input + " pt = " + ptToGal(input) + " gal";
        }
    
        else if (y == "cubicFt") {  
            document.getElementById("result").innerHTML = input + " pt = " + ptToCubicFt(input) + " cubicFt";
        }
    
        else if (y == "qt") {
            document.getElementById("result").innerHTML = input + " pt = " + ptToQt(input) + " qt";
        }
    
        else if (y == "ltr") {
            document.getElementById("result").innerHTML = input + " pt = " + ptToLtr(input) + " ltr";
        }
    
        else if (y == "cubicM") {
            document.getElementById("result").innerHTML = input + " pt = " + ptToCubicM(input) + " cubicM";
        }
    
        else if (y == "cubicIn") {
            document.getElementById("result").innerHTML = input + " pt = " + ptToCubicIn(input) + " cubicIn";
        }
    
        else if (y == "ml") {
            document.getElementById("result").innerHTML = input + " pt = " + ptToMl(input) + " ml";
        }  
    }

    else if (x == "qt") {
        if (y == "gal") {
            document.getElementById("result").innerHTML = input + " qt = " + qtToGal(input) + " gal";
        }
    
        else if (y == "pt") {  
            document.getElementById("result").innerHTML = input + " qt = " + qtToPt(input) + " pt";
        }
    
        else if (y == "cubicFt") {
            document.getElementById("result").innerHTML = input + " qt = " + qtToCubicFt(input) + " cubicFt";
        }
    
        else if (y == "ltr") {
            document.getElementById("result").innerHTML = input + " qt = " + qtToLtr(input) + " ltr";
        }

        else if (y == "cubicM") {
            document.getElementById("result").innerHTML = input + " qt = " + qtToCubicM(input) + " cubicM";
        }
    
        else if (y == "cubicIn") {
            document.getElementById("result").innerHTML = input + " qt = " + qtToCubicIn(input) + " cubicIn";
        }
    
        else if (y == "ml") {
            document.getElementById("result").innerHTML = input + " qt = " + qtToMl(input) + " ml";
        }  
    }

    else if (x == "ltr") {
        if (y == "gal") {
            document.getElementById("result").innerHTML = input + " ltr = " + ltrToGal(input) + " gal";
        }
    
        else if (y == "pt") {  
            document.getElementById("result").innerHTML = input + " ltr = " + ltrToPt(input) + " pt";
        }
    
        else if (y == "qt") {
            document.getElementById("result").innerHTML = input + " ltr = " + ltrToQt(input) + " qt";
        }
    
        else if (y == "cubicFt") {
            document.getElementById("result").innerHTML = input + " ltr = " + ltrToCubicFt(input) + " cubicFt";
        }

        else if (y == "cubicM") {
            document.getElementById("result").innerHTML = input + " ltr = " + ltrToCubicM(input) + " cubicM";
        }
    
        else if (y == "cubicIn") {
            document.getElementById("result").innerHTML = input + " ltr = " + ltrToCubicIn(input) + " cubicIn";
        }
    
        else if (y == "ml") {
            document.getElementById("result").innerHTML = input + " ltr = " + ltrToMl(input) + " ml";
        }  
    }

    else if (x == "cubicM") {
        if (y == "gal") {
            document.getElementById("result").innerHTML = input + " cubicM = " + cubicMToGal(input) + " gal";
        }
    
        else if (y == "pt") {  
            document.getElementById("result").innerHTML = input + " cubicM = " + cubicMToPt(input) + " pt";
        }
    
        else if (y == "qt") {
            document.getElementById("result").innerHTML = input + " cubicM = " + cubicMToQt(input) + " qt";
        }
    
        else if (y == "ltr") {
            document.getElementById("result").innerHTML = input + " cubicM = " + cubicMToLtr(input) + " ltr";
        }

        else if (y == "cubicFt") {
            document.getElementById("result").innerHTML = input + " cubicM = " + cubicMToCubicFt(input) + " cubicFt";
        }
    
        else if (y == "cubicIn") {
            document.getElementById("result").innerHTML = input + " cubicM = " + cubicMToCubicIn(input) + " cubicIn";
        }
    
        else if (y == "ml") {
            document.getElementById("result").innerHTML = input + " cubicM = " + cubicMToMl(input) + " ml";
        }  
    }

    else if (x == "cubicIn") {
        if (y == "gal") {
            document.getElementById("result").innerHTML = input + " cubicIn = " + cubicInToGal(input) + " gal";
        }
    
        else if (y == "pt") {  
            document.getElementById("result").innerHTML = input + " cubicIn = " + cubicInToPt(input) + " pt";
        }
    
        else if (y == "qt") {
            document.getElementById("result").innerHTML = input + " cubicIn = " + cubicInToQt(input) + " qt";
        }
    
        else if (y == "ltr") {
            document.getElementById("result").innerHTML = input + " cubicIn = " + cubicInTOLtr(input) + " ltr";
        }

        else if (y == "cubicM") {
            document.getElementById("result").innerHTML = input + " cubicIn = " + cubicInToCubicM(input) + " cubicM";
        }
    
        else if (y == "cubicFt") {
            document.getElementById("result").innerHTML = input + " cubicIn = " + cubicInToCubicFt(input) + " cubicFt";
        }
    
        else if (y == "ml") {
            document.getElementById("result").innerHTML = input + " cubicIn = " + cubicInTOMl(input) + " ml";
        }  
    }

    else if (x == "ml") {
        if (y == "gal") {
            document.getElementById("result").innerHTML = input + " ml = " + mlToGal(input) + " gal";
        }
    
        else if (y == "pt") {  
            document.getElementById("result").innerHTML = input + " ml = " + mlToPt(input) + " pt";
        }
    
        else if (y == "qt") {
            document.getElementById("result").innerHTML = input + " ml = " + mlToQt(input) + " qt";
        }
    
        else if (y == "ltr") {
            document.getElementById("result").innerHTML = input + " ml = " + mlToLtr(input) + " ltr";
        }

        else if (y == "cubicM") {
            document.getElementById("result").innerHTML = input + " ml = " + mlToCubicM(input) + " cubicM";
        }
    
        else if (y == "cubicIn") {
            document.getElementById("result").innerHTML = input + " ml = " + mlToCubicIn(input) + " cubicIn";
        }
    
        else if (y == "cubicFt") {
            document.getElementById("result").innerHTML = input + " ml = " + mlToCubicFt(input) + " cubicFt";
        }  
    }
}