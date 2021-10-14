const range = function ( start, end, step){
  let numbers = [];
  for(let i = start ; i <= end ;){
    if(start > end || step <= 0 ){
      return numbers;
    }
    numbers.push(i);
    i = i + step;
  }
  return numbers;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
