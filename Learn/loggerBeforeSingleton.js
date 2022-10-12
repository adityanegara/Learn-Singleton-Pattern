export default class Logger{
    constructor(){
        this.logs = [];
    }
    log(message){
        this.logs.push(message);
        console.log(`Message : ${message}`);
    }
    printLogCount(){
        console.log(`Number of logs: ${this.logs.length}`)
    }
}

