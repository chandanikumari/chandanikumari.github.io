const urlDecode = function(text) {
  result = {};
  newText = text.replace(/%20/g, ' ')
                  .split('&')
                  .map(x => x.split('='))

  for(let i of newText){
    result[i[0]] = i[1]
    //return result;
  }
  return result;
};

console.log(urlDecode("Lighthouse Labs"));
console.log(urlDecode(" Lighthouse Labs "));
console.log(urlDecode("blue is greener than purple for sure"));