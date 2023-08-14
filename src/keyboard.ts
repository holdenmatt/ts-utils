const PLATFORM = typeof navigator === "object" ? navigator.platform : "";
const IS_WINDOWS = PLATFORM === "Win32";
const IS_MAC = PLATFORM.startsWith("Mac");
const IS_LINUX = PLATFORM === "Linux";

/**
 * Is the mod key (Command on macOS and Ctrl on Windows/Linux) pressed?
 *
 * On other devices (e.g. mobile), this is always false.
 */
export const isModKey = (e: KeyboardEvent): boolean => {
  if (IS_MAC) {
    return e.metaKey;
  }
  if (IS_WINDOWS || IS_LINUX) {
    return e.ctrlKey;
  }
  return false;
};

/**
 * Print a keyboard shortcut string with the mod key, like "⌘C" or "Ctrl+C".
 *
 * On non-desktop devices, returns undefined.
 */
export const modKey = (shortcut: string): string | undefined => {
  if (IS_MAC) {
    return `⌘${shortcut}`;
  }
  if (IS_WINDOWS || IS_LINUX) {
    return `Ctrl+${shortcut}`;
  }
  return undefined;
};
