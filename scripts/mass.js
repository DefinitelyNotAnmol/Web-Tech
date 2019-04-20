function calculate() {
    let json_text = {
        "mcg_g" : {
            "para" : "The Mass M in Gram(g) is equal to the Mass M in Microgram(mcg) divided by 1e+6",
            "formula" : "L(g) = L(mcg) / 1e+6"
        },
    
        "mcg_q" : {
            "para" : "The Mass M in Quintal(q) is equal to the Mass M in Microgram(mcg) divided by 1e+11",
            "formula" : "L(q) = L(mcg) / 1e+11"
        },
    
        "mcg_mg" : {
            "para" : "The Mass M in Miligram(mg) is equal to the Mass M in Microgram(mcg) divide by 1000",
            "formula" : "L(mg) = L(mcg) / 1000"
        },
    
        "mcg_t" : {
            "para" : "The Mass M in Tonne(t) is equal to the Mass M in Microgram(mcg) divided by 1e+12",
            "formula" : "L(t) = L(mcg) / 1e+12"
        },
    
        "mcg_oz" : {
            "para" : "The Mass M in Ounce(oz) is equal to the Mass M in Microgram(mcg) divided by 2.835e+7",
            "formula" : "L(oz) = L(mcg) / 2.835e+7"
        },
    
        "mcg_lb" : {
            "para" : "The Mass M in Pound(lb) is equal to the Mass M in Microgram(mcg) divided by 4.536e+8",
            "formula" : "L(lb) = L(mcg) / 4.536e+8"
        },
    
        "mcg_kg" : {
            "para" : "The Mass M in Kilogram(kg) is equal to the Mass M in Microgram(mcg) divide by 1e+9",
            "formula" : "L(kg) = L(mcg) / 1e+9"
        },
    
    
    
        "g_mcg" : {
            "para" : "The Mass M in Microgram(mcg) is equal to the Mass M in Gram(g) times 1e+6",
            "formula" : "L(mcg) = L(g) * 1e+6"
        },
    
        "g_q" : {
            "para" : "The Mass M in Quintal(q) is equal to the Mass M in Gram(g) divided by 100000",
            "formula" : "L(q) = L(g) / 100000"
        },
    
        "g_mg" : {
            "para" : "The Mass M in Miligram(mg) is equal to the Mass M in Gram(g) times 1000",
            "formula" : "L(mg) = L(g) * 1000"
        },
    
        "g_t" : {
            "para" : "The Mass M in Tonne(t) is equal to the Mass M in Gram(g) divide by 1e+6",
            "formula" : "L(t) = L(g) / 1e+6"
        },
    
        "g_oz" : {
            "para" : "The Mass M in Ounce(oz) is equal to the Mass M in Gram(g) divide by 28.35",
            "formula" : "L(oz) = L(g) / 28.35"
        },
    
        "g_lb" : {
            "para" : "The Mass M in Pound(lb) is equal to the Mass M in Gram(g) divided by 453.592",
            "formula" : "L(lb) = L(g) / 453.592"
        },
    
        "g_kg" : {
            "para" : "The Mass M in Kilogram(kg) is equal to the Mass M in Gram(g) divide by 1000",
            "formula" : "L(kg) = L(g) / 1000"
        },
    
    
    
        "q_mcg" : {
            "para" : "The Mass M in Microgram(mcg) is equal to the Mass M in Quintal(q) times 1e+11",
            "formula" : "L(mcg) = L(q) * 1e+11"
        },
    
        "q_g" : {
            "para" : "The Mass M in Gram(g) is equal to the Mass M in Quintal(q) times 100000",
            "formula" : "L(g) = L(q) * 100000"
        },
    
        "q_mg" : {
            "para" : "The Mass M in Miligram(mg) is equal to the Mass M in Quintal(q) times 1e+8",
            "formula" : "L(mg) = L(q) * 1e+8"
        },
    
        "q_t" : {
            "para" : "The Mass M in Tonne(t) is equal to the Mass M in Quintal(q) divide by 10",
            "formula" : "L(t) = L(q) / 10"
        },
    
        "q_oz" : {
            "para" : "The Mass M in Ounce(oz) is equal to the Mass M in Quintal(q) times 3527.396",
            "formula" : "L(oz) = L(q) * 3527.396"
        },
    
        "q_lb" : {
            "para" : "The Mass M in Pound(lb) is equal to the Mass M in Quintal(q) times 220.462",
            "formula" : "L(lb) = L(q) * 220.462"
        },
    
        "q_kg" : {
            "para" : "The Mass M in Kilogram(kg) is equal to the Mass M in Quintal(q) times 100",
            "formula" : "L(kg) = L(q) * 100"
        },
    
    
    
        "mg_mcg" : {
            "para" : "The Mass M in Microgram(mcg) is equal to the Mass M in Miligram(mg) times 1000",
            "formula" : "L(mcg) = L(mg) * 1000"
        },
    
        "mg_q" : {
            "para" : "The Mass M in Quintal(q) is equal to the Mass M in Miligram(mg) divide by 1e+8",
            "formula" : "L(q) = L(mg) / 1e+8"
        },
    
        "mg_g" : {
            "para" : "The Mass M in Gram(g) is equal to the Mass M in Miligram(mg) divide by 1000",
            "formula" : "L(g) = L(mg) / 1000"
        },
    
        "mg_t" : {
            "para" : "The Mass M in Tonne(t) is equal to the Mass M in Miligram(mg) divide by 1e+9",
            "formula" : "L(t) = L(mg) / 1e+9"
        },
    
        "mg_oz" : {
            "para" : "The Mass M in Ounce(oz) is equal to the Mass M in Miligram(mg) divide by 28349.523",
            "formula" : "L(oz) = L(mg) / 28349.523"
        },
    
        "mg_lb" : {
            "para" : "The Mass M in Pound(lb) is equal to the Mass M in Miligram(mg) divide by 453592.37",
            "formula" : "L(lb) = L(mg) / 453592.37"
        },
    
        "mg_kg" : {
            "para" : "The Mass M in Kilogram(kg) is equal to the Mass M in Miligram(mg) divide by 1e+6",
            "formula" : "L(kg) = L(mg) / 1e+6"
        },
    
    
    
        "t_mcg" : {
            "para" : "The Mass M in Microgram(mcg) is equal to the Mass M in Tonne(t) times 1e+12",
            "formula" : "L(mcg) = L(t) * 1e+12"
        },
    
        "t_q" : {
            "para" : "The Mass M in Quintal(q) is equal to the Mass M in Tonne(t) times 10",
            "formula" : "L(q) = L(t) * 10"
        },
    
        "t_g" : {
            "para" : "The Mass M in Gram(g) is equal to the Mass M in Tonne(t) times 1e+6",
            "formula" : "L(g) = L(t) * 1e+6"
        },
    
        "t_mg" : {
            "para" : "The Mass M in Miligram(mg) is equal to the Mass M in Tonne(t) times 1e+9",
            "formula" : "L(mg) = L(t) * 1e+9"
        },
    
        "t_oz" : {
            "para" : "The Mass M in Ounce(oz) is equal to the Mass M in Tonne(t) times 35273.962",
            "formula" : "L(oz) = L(t) * 35273.962"
        },
    
        "t_lb" : {
            "para" : "The Mass M in Pound(lb) is equal to the Mass M in Tonne(t) times 2204.623",
            "formula" : "L(lb) = L(t) * 2204.623"
        },
    
        "t_kg" : {
            "para" : "The Mass M in Kilogram(kg) is equal to the Mass M in Tonne(t) times 1000",
            "formula" : "L(kg) = L(t) * 1000"
        },
    
    
    
        "oz_mcg" : {
            "para" : "The Mass M in Microgram(mcg) is equal to the Mass M in Ounce(oz) times 2.835e+7",
            "formula" : "L(mcg) = L(oz) * 2.835e+7"
        },
    
        "oz_q" : {
            "para" : "The Mass M in Quintal(q) is equal to the Mass M in Ounce(oz) divide by 3527.396",
            "formula" : "L(q) = L(oz) / 3527.396"
        },
    
        "oz_g" : {
            "para" : "The Mass M in Gram(g) is equal to the Mass M in Ounce(oz) times 28.35",
            "formula" : "L(g) = L(oz) * 28.35"
        },
    
        "oz_mg" : {
            "para" : "The Mass M in Miligram(mg) is equal to the Mass M in Ounce(oz) times 28349.523",
            "formula" : "L(mg) = L(oz) * 28349.523"
        },
    
        "oz_t" : {
            "para" : "The Mass M in Tonne(t) is equal to the Mass M in Ounce(oz) divide by 35273.962",
            "formula" : "L(t) = L(oz) / 35273.962"
        },
    
        "oz_lb" : {
            "para" : "The Mass M in Pound(lb) is equal to the Mass M in Ounce(oz) divide by 16",
            "formula" : "L(lb) = L(oz) / 16"
        },
    
        "oz_kg" : {
            "para" : "The Mass M in Kilogram(kg) is equal to the Mass M in Ounce(oz) divide by 35.274",
            "formula" : "L(kg) = L(oz) / 35.274"
        },
    
    
    
        "lb_mcg" : {
            "para" : "The Mass M in Microgram(mcg) is equal to the Mass M in Pound(lb) times 4.536e+8",
            "formula" : "L(mcg) = L(lb) * 4.536e+8"
        },
    
        "lb_q" : {
            "para" : "The Mass M in Quintal(q) is equal to the Mass M in Pound(lb) divide by 220.462",
            "formula" : "L(q) = L(lb) / 220.462"
        },
    
        "lb_g" : {
            "para" : "The Mass M in Gram(g) is equal to the Mass M in Pound(lb) times 453.592",
            "formula" : "L(g) = L(lb) * 453.592"
        },
    
        "lb_mg" : {
            "para" : "The Mass M in Miligram(mg) is equal to the Mass M in Pound(lb) times 453592.37",
            "formula" : "L(mg) = L(lb) * 453592.37"
        },
    
        "lb_t" : {
            "para" : "The Mass M in Tonne(t) is equal to the Mass M in Pound(lb) divide by 2204.623",
            "formula" : "L(t) = L(lb) / 2204.623"
        },
    
        "lb_oz" : {
            "para" : "The Mass M in Ounce(oz) is equal to the Mass M in Pound(lb) times 16",
            "formula" : "L(oz) = L(lb) * 16"
        },
    
        "lb_kg" : {
            "para" : "The Mass M in Kilogram(kg) is equal to the Mass M in Pound(lb) times 2.205",
            "formula" : "L(kg) = L(lb) * 2.205"
        },
    
        
    
        "kg_mcg" : {
            "para" : "The Mass M in Microgram(mcg) is equal to the Mass M in Kilogram(kg) times 1e+9",
            "formula" : "L(mcg) = L(kg) * 1e+9"
        },
    
        "kg_q" : {
            "para" : "The Mass M in Quintal(q) is equal to the Mass M in Kilogram(kg) divide by 100",
            "formula" : "L(q) = L(kg) / 100"
        },
    
        "kg_g" : {
            "para" : "The Mass M in Gram(g) is equal to the Mass M in Kilogram(kg) times 1000",
            "formula" : "L(g) = L(kg) * 1000"
        },
    
        "kg_mg" : {
            "para" : "The Mass M in Miligram(mg) is equal to the Mass M in Kilogram(kg) times 1e+6",
            "formula" : "L(mg) = L(kg) * 1e+6"
        },
    
        "kg_t" : {
            "para" : "The Mass M in Tonne(t) is equal to the Mass M in Kilogram(kg) divide by 1000",
            "formula" : "L(t) = L(kg) / 1000"
        },
    
        "kg_oz" : {
            "para" : "The Mass M in Ounce(oz) is equal to the Mass M in Kilogram(kg) times 35.274",
            "formula" : "L(oz) = L(kg) * 35.274"
        },
    
        "kg_lb" : {
            "para" : "The Mass M in Pound(lb) is equal to the Mass M in Kilogram(kg) times 2.205",
            "formula" : "L(lb) = L(kg) * 2.205"
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

    if (x == "kg") {
        if (y == "lb") {
            document.getElementById("result").innerHTML = input + " kg = " + kgToLb(input) + " lb";
        }
    
        else if (y == "oz") {  
            document.getElementById("result").innerHTML = input + " kg = " + kgToOz(input) + " oz";
        }
    
        else if (y == "t") {
            document.getElementById("result").innerHTML = input + " kg = " + kgToT(input) + " t";
        }
    
        else if (y == "mg") {
            document.getElementById("result").innerHTML = input + " kg = " + kgToMg(input) + " mg";
        }
    
        else if (y == "q") {
            document.getElementById("result").innerHTML = input + " kg = " + kgToQ(input) + " q";
        }
    
        else if (y == "g") {
            document.getElementById("result").innerHTML = input + " kg = " + kgToG(input) + " g";
        }
    
        else if (y == "mcg") {
            document.getElementById("result").innerHTML = input + " kg = " + kgToMcg(input) + " mcg";
        }   
    }

    else if (x == "lb") {
        if (y == "kg") {
            document.getElementById("result").innerHTML = input + " lb = " + lbToKg(input) + " kg";
        }
    
        else if (y == "oz") {  
            document.getElementById("result").innerHTML = input + " lb = " + lbToOz(input) + " oz";
        }
    
        else if (y == "t") {
            document.getElementById("result").innerHTML = input + " lb = " + lbToT(input) + " t";
        }
    
        else if (y == "mg") {
            document.getElementById("result").innerHTML = input + " lb = " + lbToMg(input) + " mg";
        }
    
        else if (y == "q") {
            document.getElementById("result").innerHTML = input + " lb = " + lbToQ(input) + " q";
        }
    
        else if (y == "g") {
            document.getElementById("result").innerHTML = input + " lb = " + lbToG(input) + " g";
        }
    
        else if (y == "mcg") {
            document.getElementById("result").innerHTML = input + " lb = " + lbToMcg(input) + " mcg";
        }  
    }

    else if (x == "oz") {
        if (y == "lb") {
            document.getElementById("result").innerHTML = input + " oz = " + ozToLb(input) + " lb";
        }
    
        else if (y == "kg") {  
            document.getElementById("result").innerHTML = input + " oz = " + ozToKg(input) + " kg";
        }
    
        else if (y == "t") {
            document.getElementById("result").innerHTML = input + " oz = " + ozToT(input) + " t";
        }
    
        else if (y == "mg") {
            document.getElementById("result").innerHTML = input + " oz = " + ozToMg(input) + " mg";
        }
    
        else if (y == "q") {
            document.getElementById("result").innerHTML = input + " oz = " + ozToQ(input) + " q";
        }
    
        else if (y == "g") {
            document.getElementById("result").innerHTML = input + " oz = " + ozToG(input) + " g";
        }
    
        else if (y == "mcg") {
            document.getElementById("result").innerHTML = input + " oz = " + ozToMcg(input) + " mcg";
        }  
    }

    else if (x == "t") {
        if (y == "lb") {
            document.getElementById("result").innerHTML = input + " t = " + tToLb(input) + " lb";
        }
    
        else if (y == "oz") {  
            document.getElementById("result").innerHTML = input + " t = " + tToOz(input) + " oz";
        }
    
        else if (y == "kg") {
            document.getElementById("result").innerHTML = input + " t = " + tToKg(input) + " kg";
        }
    
        else if (y == "mg") {
            document.getElementById("result").innerHTML = input + " t = " + tToMg(input) + " mg";
        }

        else if (y == "q") {
            document.getElementById("result").innerHTML = input + " t = " + tToQ(input) + " q";
        }
    
        else if (y == "g") {
            document.getElementById("result").innerHTML = input + " t = " + tToG(input) + " g";
        }
    
        else if (y == "mcg") {
            document.getElementById("result").innerHTML = input + " t = " + tToMcg(input) + " mcg";
        }  
    }

    else if (x == "mg") {
        if (y == "lb") {
            document.getElementById("result").innerHTML = input + " mg = " + mgToLb(input) + " lb";
        }
    
        else if (y == "oz") {  
            document.getElementById("result").innerHTML = input + " mg = " + mgToOz(input) + " oz";
        }
    
        else if (y == "t") {
            document.getElementById("result").innerHTML = input + " mg = " + mgToT(input) + " t";
        }
    
        else if (y == "kg") {
            document.getElementById("result").innerHTML = input + " mg = " + mgToKg(input) + " kg";
        }

        else if (y == "q") {
            document.getElementById("result").innerHTML = input + " mg = " + mgToQ(input) + " q";
        }
    
        else if (y == "g") {
            document.getElementById("result").innerHTML = input + " mg = " + mgToG(input) + " g";
        }
    
        else if (y == "mcg") {
            document.getElementById("result").innerHTML = input + " mg = " + mgToMcg(input) + " mcg";
        }  
    }

    else if (x == "q") {
        if (y == "lb") {
            document.getElementById("result").innerHTML = input + " q = " + qToLb(input) + " lb";
        }
    
        else if (y == "oz") {  
            document.getElementById("result").innerHTML = input + " q = " + qToOz(input) + " oz";
        }
    
        else if (y == "t") {
            document.getElementById("result").innerHTML = input + " q = " + qToT(input) + " t";
        }
    
        else if (y == "mg") {
            document.getElementById("result").innerHTML = input + " q = " + qToMg(input) + " mg";
        }

        else if (y == "kg") {
            document.getElementById("result").innerHTML = input + " q = " + qToKg(input) + " kg";
        }
    
        else if (y == "g") {
            document.getElementById("result").innerHTML = input + " q = " + qToG(input) + " g";
        }
    
        else if (y == "mcg") {
            document.getElementById("result").innerHTML = input + " q = " + qToMcg(input) + " mcg";
        }  
    }

    else if (x == "g") {
        if (y == "lb") {
            document.getElementById("result").innerHTML = input + " g = " + gToLb(input) + " lb";
        }
    
        else if (y == "oz") {  
            document.getElementById("result").innerHTML = input + " g = " + gToOz(input) + " oz";
        }
    
        else if (y == "t") {
            document.getElementById("result").innerHTML = input + " g = " + gToT(input) + " t";
        }
    
        else if (y == "mg") {
            document.getElementById("result").innerHTML = input + " g = " + gToMg(input) + " mg";
        }

        else if (y == "q") {
            document.getElementById("result").innerHTML = input + " g = " + gToQ(input) + " q";
        }
    
        else if (y == "kg") {
            document.getElementById("result").innerHTML = input + " g = " + gToKg(input) + " kg";
        }
    
        else if (y == "mcg") {
            document.getElementById("result").innerHTML = input + " g = " + gToMcg(input) + " mcg";
        }  
    }

    else if (x == "mcg") {
        if (y == "lb") {
            document.getElementById("result").innerHTML = input + " mcg = " + mcgToLb(input) + " lb";
        }
    
        else if (y == "oz") {  
            document.getElementById("result").innerHTML = input + " mcg = " + mcgToOz(input) + " oz";
        }
    
        else if (y == "t") {
            document.getElementById("result").innerHTML = input + " mcg = " + mcgToT(input) + " t";
        }
    
        else if (y == "mg") {
            document.getElementById("result").innerHTML = input + " mcg = " + mcgToMg(input) + " mg";
        }

        else if (y == "q") {
            document.getElementById("result").innerHTML = input + " mcg = " + mcgToQ(input) + " q";
        }
    
        else if (y == "g") {
            document.getElementById("result").innerHTML = input + " mcg = " + mcgToG(input) + " g";
        }
    
        else if (y == "kg") {
            document.getElementById("result").innerHTML = input + " mcg = " + mcgToKg(input) + " kg";
        }  
    }
}