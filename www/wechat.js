var exec = require('cordova/exec');

class WeChat{
	constuctor(){
		console.log("constuctor");
	}

	echo(arg0 , success , error){
		 exec(success, error, 'WeChat', 'echo', [arg0]);
	}

	echojs(arg0, success, error){
		if (arg0 && typeof(arg0) === 'string' && arg0.length > 0) {
	   	 	success(arg0);
	  	} else {
	    	error('Empty message!');
  		}
	}

}

// var WeChat = function(){
// 	var self = this;
// }

// WeChat.prototype.echo = function( arg0 , success , error){
// 	exec(success, error, 'WeChat', 'echo', [arg0]);
// }

// WeChat.prototype.echojs = function( arg0 , success , error){
// 	if (arg0 && typeof(arg0) === 'string' && arg0.length > 0) {
// 		success(arg0);
//   	} else {
//     	error('Empty message!');
// 	}
// }

module.exports = new WeChat();
