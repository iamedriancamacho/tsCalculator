function dis(val) {
    document.getElementById("main").value += val;
}
function solve() {
    var x = document.getElementById("main").value;
    var y = eval(x);
    if (y == undefined) {
        alert("Error!: Undefined");
        return;
    }
    document.getElementById("main").value = y;
    alert(x + " = " + y);
    var table = document.getElementById("table");
    var td1 = document.createElement("td");
    var row = document.createElement("tr");
    td1.innerHTML = x + " = " + y;
    row.appendChild(td1);
    if (table != null) {
        table.children[0].appendChild(row);
        cls();
    }
}
function cls() {
    document.getElementById("main").value = "";
}
