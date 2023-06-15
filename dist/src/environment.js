/**
 * Are we running in a production or development environment?
 */
export var Environment;
(function (Environment) {
    Environment["Production"] = "production";
    Environment["Development"] = "development";
})(Environment || (Environment = {}));
/**
 * Get the environment we're running in.
 */
export var getEnvironment = function () {
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
export var isDevelopment = function () { return getEnvironment() === Environment.Development; };
/**
 * Are we running in production?
 */
export var isProduction = function () { return getEnvironment() === Environment.Production; };
/**
 * Are we running in "debug" mode?
 *
 * Returns true if either a `DEBUG` or `NEXT_PUBLIC_DEBUG` env var is set,
 * and we're running in development, not production.
 */
export var isDebug = function () {
    return isDevelopment() &&
        (process.env.NEXT_PUBLIC_DEBUG === "true" || process.env.DEBUG === "true");
};
/**
 * Are we running in the browser?
 */
export var isBrowser = function () { return typeof window !== "undefined"; };
/**
 * Are we running on the server?
 */
export var isServer = function () { return !isBrowser(); };
