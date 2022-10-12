"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
logger_1.default.printLogCount();
logger_1.default.log('Testing');
logger_1.default.log('Testing two');
logger_1.default.printLogCount();
