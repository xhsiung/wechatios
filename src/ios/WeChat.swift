
@objc(WeChat) class WeChat : CDVPlugin {
    //init process
    override func pluginInitialize(){
        print("init pluginInitialize")
    }
    
    //start
    @objc(start:)
    func start(_ command: CDVInvokedUrlCommand) {
        print("WeChat Start")
    }


    //echo
    @objc(echo:)
    func echo(command: CDVInvokedUrlCommand) {
      var pluginResult = CDVPluginResult(
        status: CDVCommandStatus_ERROR
      )

     let obj = command.arguments[0] as? Dictionary ?? [:]
     if obj.count == 0 {
          self.commandDelegate!.send(
                pluginResult,
                callbackId: command.callbackId
          )

          //exit process 
          return;
      }
    
      pluginResult = CDVPluginResult(
          status: CDVCommandStatus_OK,
          messageAs: obj
      )
       
            
      self.commandDelegate!.send(
          pluginResult,
          callbackId: command.callbackId
      )
   }

}