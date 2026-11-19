export {};

declare global {
  interface ObjectConstructor {
    entries<K extends string, V>(o: { [P in K]?: V }): [K, V][];
    fromEntries<K extends PropertyKey, V>(entries: Iterable<readonly [K, V]>): { [P in K]?: V };
  }
}
