// Function to append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to calculate the result of the expression
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);  // Evaluate the expression
    } catch (e) {
      display.value = 'Error';  // In case of error (e.g., invalid expression)
    }
  }
  