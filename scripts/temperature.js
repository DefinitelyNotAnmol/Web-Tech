function calculate() {
    let json_text = {
        "c_f" : {
            "para" : "The Temperature T in degrees Fahrenheit(F) is equal to the Temperature T in degrees Cesius(C) times 9/5 plus 32",
            "formula" : "T(F) = T(C) * 9/5 + 32"
        },
    
        "c_k" : {
            "para" : "The Temperature T in degrees Kelvin(K) is equal to the Temperature T in degrees Cesius(C) plus 273.15",
            "formula" : "T(K) = T(C) + 273.15"
        },
    
        "f_c" : {
            "para" : "The Temperature T in degrees Celsius(C) is equal to the Temperature T in degrees Fahrenheit(F) minus 32, times 5/9",
            "formula" : "T(C) = (T(F) - 32) * 5/9"
        },
    
        "f_k" : {
            "para" : "The Temperature T in degrees Kelvin(K) is equal to the Temperature T in degrees Fahrenheit(F) minus 32, times 5/9, plus 273.15",
            "formula" : "T(K) = ((T(F) - 32) * 5/9) + 273.15"
        },
    
        "k_c" : {
            "para" : "The Temperature T in degrees Celsius(C) is equal to the Temperature T in degrees Kelvin(K) minus 273.15",
            "formula" : "T(C) = T(K) - 273.15"
        },
    
        "k_f" : {
            "para" : "The Temperature T in degrees Fahrenheit(F) is equal to the Temperature T in degrees Kelvin(K) minus 273.15, times 9/5 plus 32",
            "formula" : "T(C) = (T(K) - 273.15) * 9/5 + 32"
        }
    };

    let s = JSON.stringify(json_text);
    let content = JSON.parse(s);

    var x = document.getElementById("menu1").value;
    var y = document.getElementById("menu2").value;
    
    if (x == y || x == "" || y == "") {
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

    if (x == "c") {
        if (y == "f") {
            document.getElementById("result").innerHTML = input + " C = " + cToF(input) + " F";
        }
    
        else if (y == "k") {
            document.getElementById("result").innerHTML = input + " C = " + cToK(input) + " K";
        }
    }

    else if (x == "f") {
        if (y == "c") {
            document.getElementById("result").innerHTML = input + " F = " + fToC(input) + " C";
        }
    
        else if (y == "k") {
            document.getElementById("result").innerHTML = input + " F = " + fToK(input) + " K";
        }
    }

    else if (x == "k") {
        if (y == "c") {
            document.getElementById("result").innerHTML = input + " K = " + kToC(input) + " C";
        }
    
        else if (y == "f") {
            document.getElementById("result").innerHTML = input + " K = " + kToF(input) + " F";
        }
    }
}