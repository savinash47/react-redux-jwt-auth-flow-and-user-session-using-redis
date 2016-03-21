 var jwt = require('jsonwebtoken');
 var SECRET = "39D4BC3114506644562E9A92F314EF1674FF7C045315BB0F2BCB6EF977D1DA8D";

 module.exports = function(useremail) {
 	var token = jwt.sign({token:useremail},SECRET)
 	return token;
 }