const howManyHundreds = function (num) {
  let remainder = num % 100;
  num = num - remainder;
  remainder = num / 100;
  return remainder;
}
console.log(howManyHundreds(1990));
