function calculateFactorialNumber(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * calculateFactorialNumber(number - 1);
}

let fact = calculateFactorialNumber(5);
console.log(fact); // Output: 120

