var chai = require('chai');
var expect = chai.expect;
chai.should();

var recursiveChirp = require('./../recursive-chirp.js');

describe( 'recursive-chirp', function () {
  it( 'should be a function that exist', function () {
    expect( recursiveChirp ).to.be.a('function');
  });
});