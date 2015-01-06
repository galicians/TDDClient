var Registration = require('../lib/registration')

describe("Registration", function() {

    describe("a valid application", function() {
        var regResult = {};

        beforeEach(function() {
            regResult = Registration.applyForMembership({email : "galicians@gmail.com"})
        });

        it("is successful", function() {
            regResult.success.should.equal(true);
        });
        it("creates a user");
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
})