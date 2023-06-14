export const isString = (obj: unknown): obj is string => {
  return typeof obj === "string";
};

export const isFunction = (obj: unknown): obj is Function => {
  return typeof obj === "function";
};

export const isFile = (obj: unknown): obj is File => {
  return obj instanceof File;
};

export const isArray = (obj: unknown): obj is any[] => {
  return Array.isArray(obj);
};

export const isRecord = (obj: unknown): obj is Record<string, unknown> => {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
};

export const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

export const isNotNull = <T>(value: T | null): value is T => {
  return value !== null;
};
