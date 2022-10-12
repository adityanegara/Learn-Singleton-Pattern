class Logger{
    constructor(){
        if(Logger.instance == null){
            this.logs = [];
            Logger.instance = this;
        }
        return Logger.instance;
    
    }
    log(message){
        this.logs.push(message);
        console.log(`Message : ${message}`);
    }
    printLogCount(){
        console.log(`Number of logs: ${this.logs.length}`)
    }
}

const logger = new Logger();
Object.freeze(logger);
export default logger;