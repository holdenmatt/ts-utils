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
- `isArray`
- `isRecord`
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

### Keyboard

- `modKey(shortcut: string)`: Returns a string like "⌘C" (on macOS) or "Ctrl+C" (on Windows/Linux), or undefined (on other platforms).
- `isModKey(e: KeyboardEvent): boolean`: Is the mod key (Ctrl on Windows/Linux, Command on macOS) pressed?
