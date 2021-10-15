const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  //const veggie = Object.values(vegetables);
  let index = 0;
  if(metric === 'redness'){
    for(let i = 0; i < vegetables.length ; i++){
      let redMetric = 0;
      if (vegetables[i].redness > redMetric) {
        redMetric = vegetables[i].redness;
        index = i;
      }
     } 
  }

  else if(metric === 'plumpness'){
    
    for(let i = 0; i < vegetables.length ; i++){
      let plumpMetric = 0;
      if (vegetables[i].plumpness > plumpMetric) {
        plumpMetric = vegetables[i].plumpness;
        index = i;
      }
      
   } 
   
  }
  return vegetables[index].submitter;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));