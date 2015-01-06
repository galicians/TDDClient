var Registration = require('../lib/registration');
var db = require("secondthought");


describe("Registration", function() {
    var reg = {};

    before(function(done) {
        db.connect({db : "membership"}, function(err, db){
            reg = new Registration(db);
            done();
        });
    })
    describe("a valid application", function() {
        var regResult = {};

        before(function(done) {
            regResult = reg.applyForMembership({ 
                email : "galicians@gmail.com",
                password : "password",
                confirm : "password" }, function(err, result){
                    regResult = result;
            done();
            });
        });
        it("is successful", function() {
            regResult.success.should.equal(true);
        });
        it("creates a user", function() {
            regResult.user.should.be.defined;
        });
        it("creates a log entry");
        it("sets the user's status to approved");
        it("offers a welcome message");
    });

    describe("an empty or null email", function() {
        it("is not successful");
        it("tells user that password is required");
    });

    describe("empty or null password", function() {
        it("is not successful");
        it("tells user that password is required");
    });

    describe("password and confirm mismatch", function() {
        it("is not successful");
        it("tells user password don't match");
    });

    describe("email already exists", function() {
        it("is not successful");
        it("tells user that email already exists");
    });
});