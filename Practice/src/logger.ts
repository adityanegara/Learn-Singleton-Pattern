class Logger {
    private _logs: string[] = [];
    private _instance: Logger|null = null;
    constructor(){
        if(this._instance == null){
            this._instance = this;
        }
        return this._instance;
    }
    log(message: string):void{
        this._logs.push(message);
        console.log(`Message: ${message}`);
    }
    printLogCount(){
        console.log(`Number of logs: ${this._logs.length}`);
    }
}

const logger = new Logger();
Object.freeze(logger);
export default logger;