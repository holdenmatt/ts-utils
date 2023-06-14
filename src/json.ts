export type JSONPrimitive = string | number | boolean | null;

export type JSONValue =
  | JSONPrimitive
  | readonly JSONValue[]
  | { [key: string]: JSONValue };

export type JSONObject = Record<string, JSONValue>;

export type JSONArray = readonly JSONValue[];
