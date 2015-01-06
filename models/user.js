var assert = require('assert');
var token = require('../utils/utility');

var User = function(args) {
    var user = {};
    user.email = args.email;
    user.authToken = args.token || token.randomString(18);
    user.createdAt = args.createdAt || new Date();
    user.status = args.status || "pending";
    user.signInCount = args.lastLogin || 0;
    user.currentLoginAt = args.currentLoginAt || new Date();

    return user;
};

module.exports = User;