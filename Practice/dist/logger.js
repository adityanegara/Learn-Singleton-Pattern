"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor() {
        this._logs = [];
        this._instance = null;
        if (this._instance == null) {
            this._instance = this;
        }
        return this._instance;
    }
    log(message) {
        this._logs.push(message);
        console.log(`Message: ${message}`);
    }
    printLogCount() {
        console.log(`Number of logs: ${this._logs.length}`);
    }
}
const logger = new Logger();
Object.freeze(logger);
exports.default = logger;
