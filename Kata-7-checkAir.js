const checkAir = function(samples, threshold) {
  const dirtySamples = samples.filter(sample => sample === 'dirty');
  const dirtyFraction = dirtySamples.length / samples.length;
  return dirtyFraction > threshold ? 'Polluted' : 'Clean';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))