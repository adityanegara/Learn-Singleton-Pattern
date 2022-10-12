import Logger from "./loggerBeforeSingleton.js";
import logger from "./loggerAfterSingleton.js";

logger.printLogCount();
logger.log('Testing');
logger.printLogCount();
// const firstLogger = new Logger();
// const secondLogger = new Logger();

// firstLogger.log('Adit');
// firstLogger.printLogCount();
// secondLogger.log('Aura');
// secondLogger.printLogCount();
