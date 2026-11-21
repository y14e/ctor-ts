interface ArrayCtor extends ArrayConstructor {
  isArray<T>(
    arg: T,
    ..._: unknown extends T
      ? never
      : T extends T
        ? T extends readonly unknown[]
          ? []
          : never
        : never
  ): arg is Extract<T, readonly unknown[]>;
  isArray(arg: unknown): arg is unknown[];
}

interface ArrayCtor extends ArrayConstructor {
  isArray<T>(arg: T): arg is Extract<T, readonly unknown[]>;
  isArray(arg: unknown): arg is unknown[];
}

// biome-ignore lint: enhanced type definitions for Array constructor
export declare const Array: ArrayCtor;
