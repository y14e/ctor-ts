export {};

interface ArrayCtor extends ArrayConstructor {
  isArray<T>(arg: T): arg is Extract<T, ReadonlyArray<unknown>>;
}

// biome-ignore lint: enhanced type definitions for Array constructor
declare const Array: ArrayCtor;
