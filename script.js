let expression = "";

function append(char) {
  if (expression === "Error") expression = "";
  expression += char;
  updateDisplay();
}

function clearDisplay() {
  expression = "";
  updateDisplay();
}

function deleteLast() {
  if (expression === "Error") {
    expression = "";
  } else {
    expression = expression.slice(0, -1);
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = expression || "0";
}

function calculate() {
  try {
    const result = Function('"use strict"; return (' + expression + ')')();
    expression = result.toString();
  } catch (e) {
    expression = "Error";
  }
  updateDisplay();
}
