const numberOfVowels = function(data) {

  let vowelList = 'aeiouAEIOU';
  let vcount = 0;

  for (let x = 0; x < data.length; x++) {
    if (vowelList.indexOf(data[x]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));