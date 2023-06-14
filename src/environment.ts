/**
 * Are we running in a production or development environment?
 */
export enum Environment {
  Production = "production",
  Development = "development",
}

/**
 * Get the environment we're running in.
 */
export const getEnvironment = (): Environment => {
  switch (process.env.NODE_ENV) {
    case Environment.Development:
      return Environment.Development;
    case Environment.Production:
      return Environment.Production;
    default:
      throw new Error("Unknown environment");
  }
};

/**
 * Are we running in development?
 */
export const isDevelopment = () => getEnvironment() === Environment.Development;

/**
 * Are we running in production?
 */
export const isProduction = () => getEnvironment() === Environment.Production;

/**
 * Are we running in "debug" mode?
 *
 * Returns true if either a `DEBUG` or `NEXT_PUBLIC_DEBUG` env var is set,
 * and we're running in development, not production.
 */
export const isDebug = () =>
  isDevelopment() &&
  (process.env.NEXT_PUBLIC_DEBUG === "true" || process.env.DEBUG === "true");

/**
 * Are we running in the browser?
 */
export const isBrowser = () => typeof window !== "undefined";

/**
 * Are we running on the server?
 */
export const isServer = () => !isBrowser();
