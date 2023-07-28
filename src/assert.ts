/**
 * An AssertionError indicates something that is never expected to happen.
 */
export class AssertionError extends Error {}

/**
 * Throw an assertion error.
 */
export function assertError(message: string) {
  throw new AssertionError(message);
}

/**
 * Assert a condition is true, or throw with a message.
 */
export function assertTrue(condition: boolean, message: string) {
  if (!condition) {
    assertError(message);
  }
}
