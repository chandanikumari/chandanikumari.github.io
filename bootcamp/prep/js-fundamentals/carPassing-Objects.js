const carPassing = function (cars, speed) {
  // Your code in here ...
  const newcar = Object.keys(cars);
  newcar.time = Date.now();
  newcar.speed = speed;
  cars.push(newcar);
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38;

console.log(carPassing(cars, speed));