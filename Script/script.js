window.onload = initPage;

function initPage() {
  console.log("Fabrício trabalha na Nuuvem2");
  var results = 3;
  var input = document.getElementById("input");
  console.log(input)
  var red = document.getElementById("RED");
  red.onclick = function () {
    if (input.value >= 10) {
      return
    }
    results = results + 1
    input.value = results
    console.log(results)
  }
  console.log(red)

  var green = document.getElementById("GREEN");
  green.onclick = function () {
    if (input.value <= 0) {
      return
    }
    results = results - 1
    input.value = results
    console.log(input.value)
    console.log(results)
  }
  console.log(green)

  var blue = document.getElementById("BLUE");
  blue.onclick = function () {
    if (input.value >= 10) {
      return
    }
    if (input.value == 9) {
      results = 10;
      input.value = results
      return
    }
    results = results + 2
    input.value = results
    console.log(results)
  }
  console.log(blue)


}
