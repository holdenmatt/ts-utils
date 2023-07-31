# ts-utils

A few simple zero-dependency Typescript utilities I commonly use across projects.

### Environment checks

- `getEnvironment`
- `isDevelopment`
- `isProduction`
- `isDebug`
- `isBrowser`
- `isServer`

### Basic type guards

- `isString`
- `isFunction`
- `isFile`
- `isArray`
- `isRecord`
- `isError`
- `isNotNull`

### JSON types

- `JSONPrimitive`
- `JSONArray`
- `JSONObject`
- `JSONValue`

### Simple perf timing

- `logElapsedTime`

Usage:

```
const start = performance.now();
// Do stuff...
logElapsedTime(`We did some stuff`, start);
```

### Errors

- `HttpError`
- `AssertionError`
- `assertError(message: string)`
- `assertTrue(condition: boolean, message: string)`

### URLs

- `isValidUrl`
- `getBaseURL` -> `https://example.com` (no path)
