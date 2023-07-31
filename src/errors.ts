/**
 * Extend the Error class to include an HTTP status code, and optional headers
 * that should be sent in a server response.
 */
export class HttpError extends Error {
  /**
   * HTTP status code to return (default 500).
   */
  status: number;

  /**
   * Optional headers (e.g. to include X-RateLimit-Limit).
   */
  headers?: HeadersInit;

  constructor(message: string, status: number = 500, headers?: HeadersInit) {
    super(message);
    this.status = status;
    this.headers = headers;
  }
}

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
