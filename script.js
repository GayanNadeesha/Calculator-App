const display = document.getElementById('display');

function appendValue(value) {
  display.textContent += value;
}

function clearAll() {
  display.textContent = '';
}

function backspace() {
  display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.textContent.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
    let result = eval(expression);
    display.textContent = result;
  } catch {
    display.textContent = 'Error';
  }
}
