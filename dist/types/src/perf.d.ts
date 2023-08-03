/**
 * Format a time interval between start/end timestamps.
 *
 * If no end time is given, use the current time.
 */
export declare const formatElapsedTime: (label: string, start: number, end?: number | undefined) => string;
/**
 * Print the elapsed time to console.debug.
 */
export declare const logElapsedTime: (label: string, start: number, end?: number | undefined) => void;
