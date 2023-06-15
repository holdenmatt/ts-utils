export var isString = function (obj) {
    return typeof obj === "string";
};
export var isFunction = function (obj) {
    return typeof obj === "function";
};
export var isFile = function (obj) {
    return obj instanceof File;
};
export var isArray = function (obj) {
    return Array.isArray(obj);
};
export var isRecord = function (obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
};
export var isError = function (error) {
    return error instanceof Error;
};
export var isNotNull = function (value) {
    return value !== null;
};
