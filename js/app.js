function calculate(value) {
  let display = document.getElementById('display');
  display.value += value;
}

function result() {
  let display = document.getElementById('display');
  display.value = eval(display.value)
}
function displayClear() {
  let display = document.getElementById('display');
  display.value = '';
}