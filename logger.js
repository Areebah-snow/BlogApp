console.log(__filename);
console.log(__dirname)

const EventEmitter = require("node:events") 

    

var url = 'http://mylogger.io/log'

class Logger extends EventEmitter{
     log(message){
        //Send an http request
        console.log(message)
    
        //Raise an event
        this.emit("messageLogged",{id: 1, url: "http://"})
        
    }
    
}


module.exports= Logger;