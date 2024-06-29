let counterElement = document.getElementById("counterValue");
function onDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  counterElement.textContent = updatedCounterValue;
  if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  if (updatedCounterValue == 0) {
    counterElement.style.color = "black";
  }
}
function onReset() {
  updatedCounterValue = 0;
  counterElement.textContent = updatedCounterValue;
  counterElement.style.color = "black";
}
function onIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  counterElement.textContent = updatedCounterValue;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  if (updatedCounterValue == 0) {
    counterElement.style.color = "black";
  }
}
