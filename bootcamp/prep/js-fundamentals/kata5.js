//YET TO BE COMPLETED


const urlEncode = function(text) {
  // Put your solution here
  let str ;
  for(let i = 0; i < text.length; i++){
    if(text[i]== " "){
      str = text.replace(" ", "%20");
    }
  }
  return str;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));