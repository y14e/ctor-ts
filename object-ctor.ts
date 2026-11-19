interface ObjectCtor extends ObjectConstructor {
  entries<K extends string, V>(o: { [P in K]?: V }): [K, V][];
  fromEntries<K extends PropertyKey, V>(entries: Iterable<readonly [K, V]>): { [P in K]?: V };
}

// biome-ignore lint: enhanced type definitions for Object constructor
export declare const Object: ObjectCtor;
