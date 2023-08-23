document.getElementById('calculate').addEventListener('click', function() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
  
    const simpleInterest = (principal * rate * time) / 100;
    
    document.getElementById('result').textContent = `Simple Interest: {simpleInterest.toFixed(2)}`;
  });
  