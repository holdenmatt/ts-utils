export declare const isString: (obj: unknown) => obj is string;
export declare const isArray: <T>(obj: unknown) => obj is T[];
export declare const isRecord: (obj: unknown) => obj is Record<string, unknown>;
export declare const isError: (error: unknown) => error is Error;
export declare const isNotNull: <T>(value: T | null) => value is T;
