'use strict'
const {describe, it} = require('mocha');
const {expect} = require('chai');

const calculateNextState = require('../calc.js');

describe('calculator test', function() {
    it('should display "1"', () => {
        expect(JSON.parse(calculateNextState(null, "1")).display).to.equal("1");
    });
});