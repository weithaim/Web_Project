'use strict';
const {describe, it} = require('mocha');
const {expect} = require('chai');

const calculateNextState = require('../calc.js');

let currState = null;

describe('calculator test', function() {
    it('display: "1"', () => {
        currState = calculateNextState(currState, "1");
        expect(JSON.parse(currState).display).to.equal("1");
    });

    it('display: "11"', () => {
        currState = calculateNextState(currState, "1");
        expect(JSON.parse(currState).display).to.equal("11");
    });

    it('display: "11" add', () => {
        currState = calculateNextState(currState, "+");
        expect(JSON.parse(currState).display).to.equal("11");
    });

    it('display: "5"', () => {
        currState = calculateNextState(currState, "5");
        expect(JSON.parse(currState).display).to.equal("5");
    });

    it('display: "5" mul', () => {
        currState = calculateNextState(currState, "*");
        expect(JSON.parse(currState).display).to.equal("5");
    });

    it('display: "2"', () => {
        currState = calculateNextState(currState, "2");
        expect(JSON.parse(currState).display).to.equal("2");
    });

    it('display: "32"', () => {
        currState = calculateNextState(currState, "=");
        expect(JSON.parse(currState).display).to.equal("32");
    });

    it('display: "32" add', () => {
        currState = calculateNextState(currState, "+");
        expect(JSON.parse(currState).display).to.equal("32");
    });

    it('display: "8"', () => {
        currState = calculateNextState(currState, "8");
        expect(JSON.parse(currState).display).to.equal("8");
    });

    it('display: "8" divide', () => {
        currState = calculateNextState(currState, "/");
        expect(JSON.parse(currState).display).to.equal("8");
    });

    it('display: "10"', () => {
        currState = calculateNextState(currState, "10");
        expect(JSON.parse(currState).display).to.equal("10");
    });

    it('display: "4"', () => {
        currState = calculateNextState(currState, "=");
        expect(JSON.parse(currState).display).to.equal("4");
    });

    it('display: "3"', () => {
        currState = calculateNextState(currState, "3");
        expect(JSON.parse(currState).display).to.equal("3");
    });

    it('display: "33"', () => {
        currState = calculateNextState(currState, "3");
        expect(JSON.parse(currState).display).to.equal("33");
    });

    it('display: "330"', () => {
        currState = calculateNextState(currState, "0");
        expect(JSON.parse(currState).display).to.equal("330");
    });

    it('display: "330" minus', () => {
        currState = calculateNextState(currState, "-");
        expect(JSON.parse(currState).display).to.equal("330");
    });

    it('display: "3" (part of 30)', () => {
        currState = calculateNextState(currState, "3");
        expect(JSON.parse(currState).display).to.equal("3");
    });

    it('display: "30"', () => {
        currState = calculateNextState(currState, "0");
        expect(JSON.parse(currState).display).to.equal("30");
    });

    it('display: "30" divide', () => {
        currState = calculateNextState(currState, "/");
        expect(JSON.parse(currState).display).to.equal("30");
    });

    it('display: "1" (part of 16)', () => {
        currState = calculateNextState(currState, "1");
        expect(JSON.parse(currState).display).to.equal("1");
    });

    it('display: "16"', () => {
        currState = calculateNextState(currState, "6");
        expect(JSON.parse(currState).display).to.equal("16");
    });

    it('display: "16" divide', () => {
        currState = calculateNextState(currState, "+");
        expect(JSON.parse(currState).display).to.equal("16");
    });

    it('display: "9"', () => {
        currState = calculateNextState(currState, "9");
        expect(JSON.parse(currState).display).to.equal("9");
    });

    it('display: "27.75"', () => {
        currState = calculateNextState(currState, "=");
        expect(JSON.parse(currState).display).to.equal("27.75");
    });


});