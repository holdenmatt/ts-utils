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
