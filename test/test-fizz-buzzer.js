'use strict';

// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('testing fizzBuzzer app', function() {

    // test normal case
    it('should return appropriate response', function () {
        // range of normal inputs
        const normalCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 5, expected: 'buzz'},
            {num: 3, expected: 'fizz'}
        ];
        // for each input, 'fizzBuzzer' should
        // produce the expected value
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });

    });

    // test exceptional cases
    it('should raise error if arg is not a number', function() {
        // range of bad inputs that are not numbers
        const badInputs = [
            'a',
            '1',
            false,
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input).to.throw(Error);
            });
        });
    });
});

