'use strict';
const app = require('../server.js');
const server = 'http://localhost:3000';
const {describe, it} = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

describe('Integration test', function() {
    it('test1', (done) => {
        chai.request(server)
            .post("/calculate")
            .type('application/json')
            .send({calculatorState: null, input: "1"})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.display).to.equal("1");
                done();
            });
    });

    it('test2', (done) => {
        chai.request(server)
            .post("/calculate")
            .type('application/json')
            .send({calculatorState: {expression: "1", display: "1", clearDisplay: false, clearExpression: false}, input: "1"})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.display).to.equal("11");
                done();
            });
    })
});