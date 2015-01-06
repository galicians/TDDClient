var Log = require("../models/log");


describe("log", function() {

    describe("by default", function() {
        var log = {};

        it("must have an entry", function() {
            (function() { new Log({ subject:'maths', userId: 'galicians' }) }).should.throw(Error)
        });
        it("must have an subject", function() {
            (function() { new Log({ entry: 'aaa', userId: 'galicians' }) }).should.throw(Error)
        });
        it("must have an userId", function() {
            (function() { new Log({ subject:'maths', entry: 'aaa' }) }).should.throw(Error)
        });
        it("will have a createdAt", function() {
            log = new Log({ subject:'maths', entry: 'aaa', userId: 'galicians' })
            log.createdAt.should.be.defined;
        });
    });

});