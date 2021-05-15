function dis(val: any): void {
  (<HTMLInputElement>document.getElementById("main")).value += val;
}

function solve(): void {
  let x: string = (<HTMLInputElement>document.getElementById("main")).value;
  let y: any = eval(x);

  if (y == undefined) {
    alert("Error!: Undefined");
    return;
  }
  (<HTMLInputElement>document.getElementById("main")).value = y;
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
function cls(): void {
  (<HTMLInputElement>document.getElementById("main")).value = "";
}
