export declare const isString: (obj: unknown) => obj is string;
export declare const isFunction: (obj: unknown) => obj is Function;
export declare const isFile: (obj: unknown) => obj is File;
export declare const isArray: (obj: unknown) => obj is any[];
export declare const isRecord: (obj: unknown) => obj is Record<string, unknown>;
export declare const isError: (error: unknown) => error is Error;
export declare const isNotNull: <T>(value: T) => value is T;
