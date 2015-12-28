module.exports = recursiveChirp;

var recursiveChirp = function (n) {
  //create base case
  if( n === 1 ) {
    return 'chirp';
  }
  return recursiveChirp(n - 1) + ' chirp';
};

console.log(recursiveChirp(3));