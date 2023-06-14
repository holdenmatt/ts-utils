/**
 * Are we running in a production or development environment?
 */
export declare enum Environment {
    Production = "production",
    Development = "development"
}
/**
 * Get the environment we're running in.
 */
export declare const getEnvironment: () => Environment;
/**
 * Are we running in development?
 */
export declare const isDevelopment: () => boolean;
/**
 * Are we running in production?
 */
export declare const isProduction: () => boolean;
/**
 * Are we running in "debug" mode?
 *
 * Returns true if either a `DEBUG` or `NEXT_PUBLIC_DEBUG` env var is set,
 * and we're running in development, not production.
 */
export declare const isDebug: () => boolean;
/**
 * Are we running in the browser?
 */
export declare const isBrowser: () => boolean;
/**
 * Are we running on the server?
 */
export declare const isServer: () => boolean;
