var should = require("should");
var User = require('../models/user');

describe("User", function() {

    describe("by default", function(){
        var user = {};

        before(function() {
            user = new User({email : "galicians@gmail.com"});
        });

        it("email is galicians@gmail.com", function() {
            user.email.should.equal('galicians@gmail.com');
        });
        it("has an authentication token", function() {
            user.authToken.should.be.defined;
        });
        it("has a pending status", function() {
            user.status.should.equal('pending');
        });
        it("has a created date", function() {
            user.createdAt.should.be.defined;
        });
        it("has a signInCount of 0", function() {
            user.signInCount.should.equal(0);
        });
        it("has lastLogin", function() {
            user.currentLoginAt.should.be.defined;
        });

    });

});