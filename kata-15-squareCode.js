const squareCode = function(message) {
  // Put your solution here
  const input = message;
  const normalizedInput = input.replace(/[^\w]/g, "").toLowerCase();
  const length = normalizedInput.length;
  const cols = Math.ceil(Math.sqrt(length));
  // const rows = Math.ceil(length / cols);

  let cypherText = "";

  for (let i = 0; i < cols; i++) {
    for (let j = i; j < normalizedInput.length; j += cols) {
      cypherText += normalizedInput[j];
    }
    return cypherText += ' ';
  }
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


// expected output
// clu hlt io
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau