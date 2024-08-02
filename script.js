document.getElementById('btn').addEventListener('click', () => {
  // Get the input value
  const inputValue = parseFloat(document.getElementById('ip').value);
  
  // Check if inputValue is a number and not NaN
  if (isNaN(inputValue)) {
    document.getElementById('output').textContent = 'Please enter a valid number.';
    return;
  }

  // Helper function to create a promise that resolves after a given time
  function delay(ms, value) {
    return new Promise((resolve) => setTimeout(() => resolve(value), ms));
  }

  // Create the promise chain
  delay(2000, inputValue)
    .then(result => {
      document.getElementById('output').textContent = `Result: ${result}`;
      return delay(2000, result);
    })
    .then(result => {
      const multiplied = result * 2;
      document.getElementById('output').textContent = `Result: ${multiplied}`;
      return delay(1000, multiplied);
    })
    .then(result => {
      const subtracted = result - 3;
      document.getElementById('output').textContent = `Result: ${subtracted}`;
      return delay(1000, subtracted);
    })
    .then(result => {
      const divided = result / 2;
      document.getElementById('output').textContent = `Result: ${divided}`;
      return delay(1000, divided);
    })
    .then(result => {
      const added = result + 10;
      document.getElementById('output').textContent = `Result: ${added}`;
      return delay(1000, added);
    })
    .then(finalResult => {
      document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('output').textContent = 'An error occurred.';
    });
});
