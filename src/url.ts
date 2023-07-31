import { AssertionError } from "./errors";
import { isBrowser } from "./environment";

/**
 * Check if a URL is valid.
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Get the base URL (protocol + host) for the current browser window location.
 */
export const getBaseURL = (): string => {
  if (!isBrowser()) {
    throw new AssertionError("getBaseURL can only be used in the browser");
  }

  return `${window.location.protocol}//${window.location.host}`;
};
