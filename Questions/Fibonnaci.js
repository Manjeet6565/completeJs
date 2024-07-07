function fibonacciNumber(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return  fibonacciNumber(num - 1) + fibonacciNumber(num - 2);

}

console.log(fibonacciNumber(5));