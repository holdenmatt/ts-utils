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
 * Normalize a URL string.
 *
 * Ensure it has a valid scheme (defaulting to http:// if none is present),
 * and remove any trailing slashes from the path.
 *
 * Return null if the URL is invalid.
 */
export const normalizeUrl = (url: string): string | null => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "http://" + url;
  }

  try {
    const parsedUrl = new URL(url);

    // Remove any trailing slashes from the pathname
    parsedUrl.pathname = parsedUrl.pathname.replace(/\/+$/, "");

    return parsedUrl.toString();
  } catch (error) {
    // URL is invalid
    return null;
  }
};
