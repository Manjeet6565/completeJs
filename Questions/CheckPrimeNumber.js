function PrimeNumber(num) {
  if (num === 0 || num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(PrimeNumber(8)); // Output: true