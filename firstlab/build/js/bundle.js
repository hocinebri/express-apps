var text = require('./utils.js');
var result = text('welcome');
console.log(result);
module.exports = function(input){
	return input.toUpperCase();
};