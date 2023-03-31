const result = document.getElementById("result");

function undo() {
    let res = result.value;
    result.value = res.substring(0, res.length - 1);
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function clearScreen() {
    document.getElementById("result").value = "";
}
