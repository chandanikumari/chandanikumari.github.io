const lastIndexOf = function(arr , number){
  let index = -1;
  if(!arr.length){
    index = -1 ;
  }
  for( let i = 0 ; i < arr.length ; i++){
    if(arr[i] == number){
      index = i;
    }
  }
  return index;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([0,0,0,0,5,0],5));

