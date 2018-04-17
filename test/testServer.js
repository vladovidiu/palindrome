const chai = require("chai");
const request = require("supertest");
const proxyquire = require("proxyquire");

const expect = chai.expect;

describe("Palindrome API", () => {
    let server, app;

    before(done => {
        const testConfig = {
            apiPort: 3001,
            cache: {
                MAX_TIME: 1000,
            },
        };

        const cacheMock = {};

        app = proxyquire("../src", {
            "./cache/index.js": cacheMock,
        });

        server = request(app);

        cacheMock.addPalindrome("palap", new Date());
        cacheMock.addPalindrome("1palap1", new Date());
        cacheMock.addPalindrome("1palap1", new Date("2017-04-17T18:33:17.995Z"));
        done();
    });

    it("should retrieve 2 palindromes", done => {
        server.get("/palindromes").end((err, res) => {
            expect(res.body.length).to.be.equal(2);
            done();
        });
    });

    it("should add one palindrome", done => {
        server
            .post("/palindromes")
            .query({text: "ava"})
            .end((err, res) => {
                expect(res.body).to.be.equal(true);
                done();
            });
    });

    it("should retrieve 3 palindromes", done => {
        server.get("/palindromes").end((err, res) => {
            expect(res.body.length).to.be.equal(3);
            done();
        });
    });

    it("should add one palindrome", done => {
        server
            .post("/palindromes")
            .query({text: "ava"})
            .end((err, res) => {
                expect(res.body).to.be.equal("The palindrome already exists");
                done();
            });
    });

    it("should retrieve 3 palindromes", done => {
        server.get("/palindromes").end((err, res) => {
            expect(res.body.length).to.be.equal(3);
            done();
        });
    });
});
