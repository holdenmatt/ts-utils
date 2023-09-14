import { isDebug } from "./environment";

/**
 * An ErrorLogger can be any function that takes an error and optional cause object.
 *
 * `cause` values should be JSON serializable.
 */
type ErrorLogger = (error: Error, cause?: unknown) => void;

/**
 * By default, we log to the console in debug mode only.
 */
const defaultLogger = (error: Error, cause?: unknown) => {
  if (!isDebug()) {
    return;
  }

  if (cause) {
    const causeString = JSON.stringify(cause);
    console.error(error);
    console.error(`Cause: ${causeString}`);
  } else {
    console.error(error);
  }
};

const loggers: ErrorLogger[] = [defaultLogger];

/**
 * Add a logger, if it isn't already present.
 */
export const addLogger = (logger: ErrorLogger) => {
  if (!loggers.includes(logger)) {
    loggers.push(logger);
  }
};

/**
 * Log an error, if we have a registered Logger.
 */
export const logError = (error: Error, cause?: unknown) => {
  loggers.forEach((logger) => {
    logger(error, cause);
  });
};
