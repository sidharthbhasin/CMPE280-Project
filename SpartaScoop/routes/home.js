
var winston = require('winston');

var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.File)({ filename: 'ebayLog.log' })
	]
});

exports.redirectToHome = function(req,res) {
	console.log(" I am going to home");
    res.render('index', { title: 'Express' });
};

exports.redirectToUserProfile = function(req,res) {
    res.render('feed');
};

exports.redirectToAdminProfile = function(req,res) {
    res.render('admin');
};

exports.redirectToProfileCompletion = function(req,res) {
    res.render('completeProfile');
};
