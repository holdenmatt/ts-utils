/**
 * Extend the Error class to include an HTTP status code, and optional headers
 * that should be sent in a server response.
 */
export declare class HttpError extends Error {
    /**
     * HTTP status code to return (default 500).
     */
    status: number;
    /**
     * Optional headers (e.g. to include X-RateLimit-Limit).
     */
    headers?: HeadersInit;
    constructor(message: string, status?: number, headers?: HeadersInit);
}
/**
 * An AssertionError indicates something that is never expected to happen.
 */
export declare class AssertionError extends Error {
}
/**
 * Throw an assertion error.
 */
export declare function assertError(message: string): void;
/**
 * Assert a condition is true, or throw with a message.
 */
export declare function assertTrue(condition: boolean, message: string): void;
