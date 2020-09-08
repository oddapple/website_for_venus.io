function calc() {
  var a = parseInt(document.querySelector("#value1").value);
  var op = document.querySelector("#operator").value;
  var calculate;


  if (op == "div") {
    calculate = Math.round(a / 1.5);
  } else if (op == "mul") {
    calculate = Math.round(a * 1.5);
  }
  //var n = /^[0-9]+$/;
  if (isNaN(a)) { //&& a.value.match(n)
    document.querySelector("#result").innerHTML = "Please, enter a number.";
  } else if (calculate < 0) {
    document.querySelector("#result").innerHTML = "Sorry, negative age is not allowed.";
  } else {
    document.querySelector("#result").innerHTML = calculate;
  }

}