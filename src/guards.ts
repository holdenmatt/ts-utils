export const isString = (obj: unknown): obj is string => {
  return typeof obj === "string";
};

export const isArray = <T>(obj: unknown): obj is T[] => {
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
