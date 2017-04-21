var exec = require('cordova/exec');

// class WeChat{
// 	constuctor(){
// 		console.log("constuctor");
// 	}

// 	echo(arg0 , success , error){
// 		 exec(success, error, 'WeChat', 'echo', [arg0]);
// 	}

// 	echojs(arg0, success, error){
// 		if (arg0 && typeof(arg0) === 'string' && arg0.length > 0) {
// 	   	 	success(arg0);
// 	  	} else {
// 	    	error('Empty message!');
//   		}
// 	}

// }

var WeChat = function(){
 	var self = this;
    self.channels = {
        wechatevent :cordova.addWindowEventHandler("wechatevent")
    };
               
    //rigister Event
    self.channels["wechatevent"].onHasSubscribersChange = WeChat.onHasSubscribersChangeStart;
}

//listen  deviceready auto start
WeChat.onHasSubscribersChangeStart = function() {
    console.log("onHasSubscribersChangeStart");
    exec(wechat._status, wechat._error, "WeChat" , "start" , [] ) ;
};

WeChat.prototype._status = function(info){
    console.log("_status");
    //emit Event
    fireWindowEvent("wechatevent", info);
};

WeChat.prototype._error = function(e) {
    console.log("_error");
    console.log("Error initializing WeChat: " + e);
};
               

WeChat.prototype.echo = function( arg0 , success , error){
 	exec(success, error, 'WeChat', 'echo', [arg0]);
}

WeChat.prototype.echojs = function( arg0 , success , error){
 	if (arg0 && typeof(arg0) === 'string' && arg0.length > 0) {
 		success(arg0);
   	} else {
     	error('Empty message!');
 	}
}

module.exports = new WeChat();
