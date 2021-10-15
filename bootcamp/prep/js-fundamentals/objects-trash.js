const smartGarbage = function (trash, bins) {
  // Your code in here ...
  if (trash == 'recycling'){
    bins.recycling = bins.recycling + 1 ;
  }
  else if(trash == 'waste'){
    bins.waste = bins.waste + 1;

  }
  else if(trash == 'compost'){
    bins.compost = bins.compost + 1;
  }
  return bins;
}

console.log(smartGarbage('compost', { waste: 5, recycling: 1, compost: 3 }));
