function refresh() {
    var x = document.getElementById("menu1").value;
    var y = document.getElementById("menu2").value;

    if (x === y) {
        document.getElementById("input").value = "SI Units must be different";
        document.getElementById("data_heading").innerHTML = "";
        document.getElementById("formula_heading").innerHTML = "";
        document.getElementById("para").innerHTML = "";
        document.getElementById("formula").innerHTML = "";
        document.getElementById("result").innerHTML = "";
        return;
    }

    document.getElementById("input").value = "";
    document.getElementById("data_heading").innerHTML = "";
    document.getElementById("formula_heading").innerHTML = "";
    document.getElementById("para").innerHTML = "";
    document.getElementById("formula").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}