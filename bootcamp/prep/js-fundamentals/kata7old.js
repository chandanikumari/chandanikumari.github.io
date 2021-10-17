const checkAir = function (samples, threshold) {
  let count = samples.filter(i => {
    return i !== 'clean'
  });

  if((count.length / samples.length) < threshold){
     return 'Clean'; 
    }  else return 'Polluted';
};