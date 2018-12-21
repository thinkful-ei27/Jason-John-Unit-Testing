'use strict';

const should = require('chai').should();
const {expect} = require('chai');

const fizzBuzzer = require('../fizzBuzzer');

describe('testing the fizzBuzzer function', function() {
  const normalCases = [
    {num: 15, expected: 'fizz-buzz'},
    {num: 5, expected: 'buzz'},
    {num: 3, expected: 'fizz'}
  ];

  it('15 should print fizz-buzz', function() {
    const answer = fizzBuzzer(normalCases[0].num);
    answer.should.equal(normalCases[0].expected);
  });

  it('5 should print buzz', function() {
    const answer = fizzBuzzer(normalCases[1].num);
    answer.should.equal(normalCases[1].expected);
  });
  
  it('3 should print fizz', function() {
    const answer = fizzBuzzer(normalCases[2].num);
    answer.should.equal(normalCases[2].expected);
  });

  it('should complete the fizz-buzz sequence', function() {
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if inputs are not numbers', function() {
    const badInputs = [
      'bad',
      undefined,
      'really bad'
    ];

    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input).to.throw(Error);
      });
    });
  });
});