function calculate() {
    let json_text = {
        "ms_kmph" : {
            "para" : "The Speed S in Kilometer Per Hour(kmph) is equal to the Speed S in Meter per Second(ms) times 3.6",
            "formula" : "L(kmph) = L(ms) * 3.6"
        },
    
        "ms_kn" : {
            "para" : "The Speed S in Knot(kn) is equal to the Speed S in Meter per Second(ms) times 1.944",
            "formula" : "L(kn) = L(ms) * 1.944"
        },
    
        "ms_fts" : {
            "para" : "The Speed S in Foot Per Second(fts) is equal to the Speed S in Meter per Second(ms) times 3.281",
            "formula" : "L(fts) = L(ms) * 3.281"
        },
    
        "ms_a" : {
            "para" : "The Speed S in Speed of Sound(a) is equal to the Speed S in Meter per Second(ms) divided by 343",
            "formula" : "L(a) = L(ms) / 343"
        },
    
        "ms_c" : {
            "para" : "The Speed S in Speed of Light(c) is equal to the Speed S in Meter per Second(ms) divided by 2.998e+8",
            "formula" : "L(c) = L(ms) / 2.998e+8"
        },
    
        "ms_mph" : {
            "para" : "The Speed S in Mile Per Hour(mph) is equal to the Speed S in Meter per Second(ms) times 2.237",
            "formula" : "L(mph) = L(ms) * 2.237"
        },
    
    
    
        "kmph_ms" : {
            "para" : "The Speed S in Meter per Second(ms) is equal to the Speed S in Kilometer Per Hour(kmph) divide by 3.6",
            "formula" : "L(ms) = L(kmph) / 3.6"
        },
    
        "kmph_kn" : {
            "para" : "The Speed S in Knot(kn) is equal to the Speed S in Kilometer Per Hour(kmph) divided by 1.852",
            "formula" : "L(kn) = L(kmph) / 1.852"
        },
    
        "kmph_fts" : {
            "para" : "The Speed S in Foot Per Second(fts) is equal to the Speed S in Kilometer Per Hour(kmph) divide by 1.097",
            "formula" : "L(fts) = L(kmph) / 1.097"
        },
    
        "kmph_a" : {
            "para" : "The Speed S in Speed of Sound(a) is equal to the Speed S in Kilometer Per Hour(kmph) divide by 1234.8",
            "formula" : "L(a) = L(kmph) / 1234.8"
        },
    
        "kmph_c" : {
            "para" : "The Speed S in Speed of Light(c) is equal to the Speed S in Kilometer Per Hour(kmph) divide by 1.079e+9",
            "formula" : "L(c) = L(kmph) / 1.079e+9"
        },
    
        "kmph_mph" : {
            "para" : "The Speed S in Mile Per Hour(mph) is equal to the Speed S in Kilometer Per Hour(kmph) divide by 1.609",
            "formula" : "L(mph) = L(kmph) / 1.609"
        },
    
    
    
        "kn_ms" : {
            "para" : "The Speed S in Meter per Second(ms) is equal to the Speed S in Knot(kn) divide by 1.944",
            "formula" : "L(ms) = L(kn) / 1.944"
        },
    
        "kn_kmph" : {
            "para" : "The Speed S in Kilometer Per Hour(kmph) is equal to the Speed S in Knot(kn) times 1.852",
            "formula" : "L(kmph) = L(kn) * 1.852"
        },
    
        "kn_fts" : {
            "para" : "The Speed S in Foot Per Second(fts) is equal to the Speed S in Knot(kn) times 1.688",
            "formula" : "L(fts) = L(kn) * 1.688"
        },
    
        "kn_a" : {
            "para" : "The Speed S in Speed of Sound(a) is equal to the Speed S in Knot(kn) divide by 666.739",
            "formula" : "L(a) = L(kn) / 666.739"
        },
    
        "kn_c" : {
            "para" : "The Speed S in Speed of Light(c) is equal to the Speed S in Knot(kn) divide by 5.827e+8",
            "formula" : "L(c) = L(kn) / 5.827e+8"
        },
    
        "kn_mph" : {
            "para" : "The Speed S in Mile Per Hour(mph) is equal to the Speed S in Knot(kn) times 1.151",
            "formula" : "L(mph) = L(kn) * 1.151"
        },
    
    
    
        "fts_ms" : {
            "para" : "The Speed S in Meter per Second(ms) is equal to the Speed S in Foot Per Second(fts) divide by 3.281",
            "formula" : "L(ms) = L(fts) / 3.281"
        },
    
        "fts_kn" : {
            "para" : "The Speed S in Knot(kn) is equal to the Speed S in Foot Per Second(fts) divide by 1.688",
            "formula" : "L(kn) = L(fts) / 1.688"
        },
    
        "fts_kmph" : {
            "para" : "The Speed S in Kilometer Per Hour(kmph) is equal to the Speed S in Foot Per Second(fts) times 1.097",
            "formula" : "L(kmph) = L(fts) * 1.097"
        },
    
        "fts_a" : {
            "para" : "The Speed S in Speed of Sound(a) is equal to the Speed S in Foot Per Second(fts) divide by 1125.328",
            "formula" : "L(a) = L(fts) / 1125.328"
        },
    
        "fts_c" : {
            "para" : "The Speed S in Speed of Light(c) is equal to the Speed S in Foot Per Second(fts) divide by 9.836e+8",
            "formula" : "L(c) = L(fts) / 9.836e+8"
        },
    
        "fts_mph" : {
            "para" : "The Speed S in Mile Per Hour(mph) is equal to the Speed S in Foot Per Second(fts) divide by 1.467",
            "formula" : "L(mph) = L(fts) / 1.467"
        },
    
    
    
        "a_ms" : {
            "para" : "The Speed S in Meter per Second(ms) is equal to the Speed S in Speed of Sound(a) times 343",
            "formula" : "L(ms) = L(a) * 343"
        },
    
        "a_kn" : {
            "para" : "The Speed S in Knot(kn) is equal to the Speed S in Speed of Sound(a) times 666.739",
            "formula" : "L(kn) = L(a) * 666.739"
        },
    
        "a_kmph" : {
            "para" : "The Speed S in Kilometer Per Hour(kmph) is equal to the Speed S in Speed of Sound(a) times 1234.8",
            "formula" : "L(kmph) = L(a) * 1234.8"
        },
    
        "a_fts" : {
            "para" : "The Speed S in Foot Per Second(fts) is equal to the Speed S in Speed of Sound(a) times 1125.328",
            "formula" : "L(fts) = L(a) * 1125.328"
        },
    
        "a_c" : {
            "para" : "The Speed S in Speed of Light(c) is equal to the Speed S in Speed of Sound(a) divide by 874030.49",
            "formula" : "L(c) = L(a) / 874030.49"
        },
    
        "a_mph" : {
            "para" : "The Speed S in Mile Per Hour(mph) is equal to the Speed S in Speed of Sound(a) times 767.269",
            "formula" : "L(mph) = L(a) * 767.269"
        },
    
    
    
        "c_ms" : {
            "para" : "The Speed S in Meter per Second(ms) is equal to the Speed S in Speed of Light(c) times 2.998e+8",
            "formula" : "L(ms) = L(c) * 2.998e+8"
        },
    
        "c_kn" : {
            "para" : "The Speed S in Knot(kn) is equal to the Speed S in Speed of Light(c) times 5.827e+8",
            "formula" : "L(kn) = L(c) * 5.827e+8"
        },
    
        "c_kmph" : {
            "para" : "The Speed S in Kilometer Per Hour(kmph) is equal to the Speed S in Speed of Light(c) times 1.079e+9",
            "formula" : "L(kmph) = L(c) * 1.079e+9"
        },
    
        "c_fts" : {
            "para" : "The Speed S in Foot Per Second(fts) is equal to the Speed S in Speed of Light(c) times 9.836e+8",
            "formula" : "L(fts) = L(c) * 9.836e+8"
        },
    
        "c_a" : {
            "para" : "The Speed S in Speed of Sound(a) is equal to the Speed S in Speed of Light(c) times 874030.49",
            "formula" : "L(a) = L(c) * 874030.49"
        },
    
        "c_mph" : {
            "para" : "The Speed S in Mile Per Hour(mph) is equal to the Speed S in Speed of Light(c) times 6.706e+8",
            "formula" : "L(mph) = L(c) * 6.706e+8"
        },
        
        
        
        "mph_ms" : {
            "para" : "The Speed S in Meter per Second(ms) is equal to the Speed S in Mile Per Hour(mph) divide by 2.237",
            "formula" : "L(ms) = L(mph) / 2.237"
        },
    
        "mph_kn" : {
            "para" : "The Speed S in Knot(kn) is equal to the Speed S in Mile Per Hour(mph) divide by 1.151",
            "formula" : "L(kn) = L(mph) / 1.151"
        },
    
        "mph_kmph" : {
            "para" : "The Speed S in Kilometer Per Hour(kmph) is equal to the Speed S in Mile Per Hour(mph) times 1.609",
            "formula" : "L(kmph) = L(mph) * 1.609"
        },
    
        "mph_fts" : {
            "para" : "The Speed S in Foot Per Second(fts) is equal to the Speed S in Mile Per Hour(mph) times 1.467",
            "formula" : "L(fts) = L(mph) * 1.467"
        },
    
        "mph_a" : {
            "para" : "The Speed S in Speed of Sound(a) is equal to the Speed S in Mile Per Hour(mph) divide by 767.269",
            "formula" : "L(a) = L(mph) / 767.269"
        },
    
        "mph_c" : {
            "para" : "The Speed S in Speed of Light(c) is equal to the Speed S in Mile Per Hour(mph) divide by 6.706e+8",
            "formula" : "L(c) = L(mph) / 6.706e+8"
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

    if (x == "mph") {
        if (y == "c") {  
            document.getElementById("result").innerHTML = input + " mph = " + mphToC(input) + " c";
        }
    
        else if (y == "a") {
            document.getElementById("result").innerHTML = input + " mph = " + mphToA(input) + " a";
        }
    
        else if (y == "fts") {
            document.getElementById("result").innerHTML = input + " mph = " + mphToFts(input) + " fts";
        }
    
        else if (y == "kn") {
            document.getElementById("result").innerHTML = input + " mph = " + mphToKn(input) + " kn";
        }
    
        else if (y == "kmph") {
            document.getElementById("result").innerHTML = input + " mph = " + mphToKmph(input) + " kmph";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " mph = " + mphToMs(input) + " ms";
        }   
    }

    else if (x == "c") {
        if (y == "mph") {  
            document.getElementById("result").innerHTML = input + " c = " + cToMph(input) + " mph";
        }
    
        else if (y == "a") {
            document.getElementById("result").innerHTML = input + " c = " + cToA(input) + " a";
        }
    
        else if (y == "fts") {
            document.getElementById("result").innerHTML = input + " c = " + cToFts(input) + " fts";
        }
    
        else if (y == "kn") {
            document.getElementById("result").innerHTML = input + " c = " + cToKn(input) + " kn";
        }
    
        else if (y == "kmph") {
            document.getElementById("result").innerHTML = input + " c = " + cToKmph(input) + " kmph";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " c = " + cToMs(input) + " ms";
        }  
    }

    else if (x == "a") {
        if (y == "c") {  
            document.getElementById("result").innerHTML = input + " a = " + aToC(input) + " c";
        }
    
        else if (y == "mph") {
            document.getElementById("result").innerHTML = input + " a = " + aToMph(input) + " mph";
        }
    
        else if (y == "fts") {
            document.getElementById("result").innerHTML = input + " a = " + aToFts(input) + " fts";
        }

        else if (y == "kn") {
            document.getElementById("result").innerHTML = input + " a = " + aToKn(input) + " kn";
        }
    
        else if (y == "kmph") {
            document.getElementById("result").innerHTML = input + " a = " + aToKmph(input) + " kmph";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " a = " + aToMs(input) + " ms";
        }  
    }

    else if (x == "fts") {
        if (y == "c") {  
            document.getElementById("result").innerHTML = input + " fts = " + ftsToC(input) + " c";
        }
    
        else if (y == "a") {
            document.getElementById("result").innerHTML = input + " fts = " + ftsToA(input) + " a";
        }
    
        else if (y == "mph") {
            document.getElementById("result").innerHTML = input + " fts = " + ftsToMph(input) + " mph";
        }

        else if (y == "kn") {
            document.getElementById("result").innerHTML = input + " fts = " + ftsToKn(input) + " kn";
        }
    
        else if (y == "kmph") {
            document.getElementById("result").innerHTML = input + " fts = " + ftsToKmph(input) + " kmph";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " fts = " + ftsToMs(input) + " ms";
        }  
    }

    else if (x == "kn") {
        if (y == "c") {  
            document.getElementById("result").innerHTML = input + " kn = " + knToC(input) + " c";
        }
    
        else if (y == "a") {
            document.getElementById("result").innerHTML = input + " kn = " + knToA(input) + " a";
        }
    
        else if (y == "fts") {
            document.getElementById("result").innerHTML = input + " kn = " + knToFts(input) + " fts";
        }

        else if (y == "mph") {
            document.getElementById("result").innerHTML = input + " kn = " + knToMph(input) + " mph";
        }
    
        else if (y == "kmph") {
            document.getElementById("result").innerHTML = input + " kn = " + knToKmph(input) + " kmph";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " kn = " + knToMs(input) + " ms";
        }  
    }

    else if (x == "kmph") {
        if (y == "c") {  
            document.getElementById("result").innerHTML = input + " kmph = " + kmphToC(input) + " c";
        }
    
        else if (y == "a") {
            document.getElementById("result").innerHTML = input + " kmph = " + kmphToA(input) + " a";
        }
    
        else if (y == "fts") {
            document.getElementById("result").innerHTML = input + " kmph = " + kmphToFts(input) + " fts";
        }

        else if (y == "kn") {
            document.getElementById("result").innerHTML = input + " kmph = " + kmphToKn(input) + " kn";
        }
    
        else if (y == "mph") {
            document.getElementById("result").innerHTML = input + " kmph = " + kmphToMph(input) + " mph";
        }
    
        else if (y == "ms") {
            document.getElementById("result").innerHTML = input + " kmph = " + kmphToMs(input) + " ms";
        }  
    }

    else if (x == "ms") {
        if (y == "c") {  
            document.getElementById("result").innerHTML = input + " ms = " + msToC(input) + " c";
        }
    
        else if (y == "a") {
            document.getElementById("result").innerHTML = input + " ms = " + msToA(input) + " a";
        }
    
        else if (y == "fts") {
            document.getElementById("result").innerHTML = input + " ms = " + msToFts(input) + " fts";
        }

        else if (y == "kn") {
            document.getElementById("result").innerHTML = input + " ms = " + msToKn(input) + " kn";
        }
    
        else if (y == "kmph") {
            document.getElementById("result").innerHTML = input + " ms = " + msToKmph(input) + " kmph";
        }
    
        else if (y == "mph") {
            document.getElementById("result").innerHTML = input + " ms = " + msToMph(input) + " mph";
        }  
    }
}