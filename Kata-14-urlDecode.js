const urlDecode = function(text) {
  // Put your solution here

  text = decodeURIComponent((text).replace(/\+/g, '%20'));
  let arr = {};
  let a = text.split(/&(?!amp;)/g);
  for (let x in a) {
    let pair = a[x].split('=');
    arr[pair[0]] = pair[1];
  }
  return arr;

};


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// output
// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"