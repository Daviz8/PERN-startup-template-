import clc from "cli-color";
import winston from "winston";

class AppLogger {
  formatLogType(type ) {
    if (type === "error") return clc.red(type.toUpperCase());
    if (type === "success") return clc.green(type.toUpperCase());
    if (type === "info") return clc.yellow(type.toUpperCase());
    return clc.yellow(type.toUpperCase());
  }

  getLogDate() {
    return new Date().toISOString();
  }

  constructor() {
    const logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DDTHH:mm:ss.SSSZ', 
        }),
        winston.format.json()
      ),
      transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/app.log' }),
      ],
    });
    this.logger = logger;
  }

  logDebug(head, m) {
    const logType = this.formatLogType("info");
    this.logger.info(m);
    const logDate = this.getLogDate();
    const title = head ? `[${head.toUpperCase()}]` : "";
    console.log(`[${logType}] - [${logDate}] - ${title} - ${m}`);
  }

     logSuccess(m,head){
        const logType = this.formatLogType("success");
        this.logger.info(m);
        const logDate = this.getLogDate()
        const title = head ? `[${head.toUpperCase()}]` : "";
        console.log(`[${logType}] - [${logDate}] - ${title} - ${m}`)
    }
    logError(head,m){
        const logType = this.formatLogType("error");
        this.logger.error(m);
        const logDate = this.getLogDate()
        const title = head ? `[${head.toUpperCase()}]` : "";
        console.log(`[${logType}] - [${logDate}] - ${title} - ${m}`)
    }
}

export default new AppLogger();