var should = require("should");

describe("User", function() {

    describe("defaults", function(){
        var user = {};

        before(function() {
            user = new User({email : "galicians@gmail.com"});
        });

        it("email is galicians@gmail.com");
        it("has an authentication token");
        it("has a pending status");
        it("has a created date");
        it("has a signInCount of 0");
        it("has lastLogin");
        it("has currentLogin");
        it("has a sessionToken");
        it("has a reminderToken");
        it("has a reminder sent date");
    });

});