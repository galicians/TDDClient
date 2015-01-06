var Application = require('../models/application')
var User = require("../models/user");
var db = require("secondthought");

var RegResult = function() {

    var result = {
        success : false,
        message : null
    }

    return result;
};

var Registration = function(db) {
    var self = this;
    var validateInputs = function(app){

        if(!app.email || !app.password){
            app.setInvalid("Email and password are required");
        }else if(app.password != app.confirm){
            app.setInvalid("Password don't match")
        }else {
            app.validate()
        }
    }


    var checkIfUserExists = function(app){
        db.connect({db : "membership"}, function(err,db){
            db.users.exists({email : app.email}, function(err, exists){
                assert.ok(err === null, err);
                if(exits){
                    app.setInvalid("Email already exists");
                    next(null,app);
                }
            })
        })
    }

    self.applyForMembership = function(args) {
        var regResult = new RegResult()
        var app = new Application(args);
        validateInputs(app);

        if(app.isValid()) {
            regResult.sucess = true;
            regResult.message = "Welcome!";
            regResult.user = new User(args);
        }
        regResult.success = true;
        regResult.message = "Welcome!"
        return regResult;
    };

    return self;

};

module.exports = Registration;