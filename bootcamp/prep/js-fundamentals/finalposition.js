const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let coordinate = [0,0];
  if(moves[0]== 'north'){
    coordinate[0]+=coordinate;
    console.log(coordinate);
  }
}

finalPosition(moves);