'use strict';
const server = require('../server.js');
const serverAddr = 'http://localhost:3000';
const {describe, it} = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

let currState = null;

function testConnector(input) {
    return chai.request(serverAddr)
        .post("/calculate")
        .type('application/json')
        .send({calculatorState: currState, input: input});
}

describe('Integration Test:', function() {
    describe('init connection test', function () {
        before(function () {
            currState = null;
        });

        it('connection test', function (done) {
            testConnector("5")
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    currState = res.body;
                    expect(currState.display).to.equal("5");
                    expect(currState.expression).to.equal("5");
                    expect(currState.clearDisplay && currState.clearExpression).to.be.false;
                    done();
                });
        });
    });

    describe('exercise test', function() {
        before(function () {
            currState = null;
        });

        it('display: 1', function (done) {
            testConnector("1")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    currState = res.body;
                    expect(currState.display).to.equal("1");
                    expect(currState.expression).to.equal("1");
                    expect(currState.clearDisplay && currState.clearExpression).to.be.false;
                    done();
                });
        });

        it('display: 1', function (done) {
            testConnector("+")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    currState = res.body;
                    expect(currState.display).to.equal("1");
                    expect(currState.expression).to.equal("1+");
                    expect(currState.clearExpression).to.be.false;
                    expect(currState.clearDisplay).to.be.true;
                    done();
                });
        });

        it('display: 5', function (done) {
            testConnector("5")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    currState = res.body;
                    expect(currState.display).to.equal("5");
                    expect(currState.expression).to.equal("1+5");
                    expect(currState.clearDisplay && currState.clearExpression).to.be.false;
                    done();
                });
        });

        it('display: 6', function (done) {
            testConnector("=")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    currState = res.body;
                    expect(currState.display).to.equal("6");
                    expect(currState.expression).to.equal("6");
                    expect(currState.clearDisplay && currState.clearExpression).to.be.true;
                    done();
                });
        });

        it('display: 6 mul', function (done) {
            testConnector("*")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    currState = res.body;
                    expect(currState.display).to.equal("6");
                    expect(currState.expression).to.equal("6*");
                    expect(currState.clearExpression).to.be.false;
                    expect(currState.clearDisplay).to.be.true;
                    done();
                });
        });

        it('display: 1 (part of 10)', function (done) {
            testConnector("1")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    currState = res.body;
                    expect(currState.display).to.equal("1");
                    expect(currState.expression).to.equal("6*1");
                    expect(currState.clearExpression).to.be.false;
                    expect(currState.clearDisplay).to.be.false;
                    done();
                });
        });

        it('display: 10', function (done) {
            testConnector("0")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    currState = res.body;
                    expect(currState.display).to.equal("10");
                    expect(currState.expression).to.equal("6*10");
                    expect(currState.clearExpression).to.be.false;
                    expect(currState.clearDisplay).to.be.false;
                    done();
                });
        });

        it('display: 10 (part of 10)', function (done) {
            testConnector("=")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    currState = res.body;
                    expect(currState.display).to.equal("60");
                    expect(currState.expression).to.equal("60");
                    expect(currState.clearExpression).to.be.true;
                    expect(currState.clearDisplay).to.be.true;
                    done();
                });
        });
    });

    after(function () {
        server.close();
    })
});