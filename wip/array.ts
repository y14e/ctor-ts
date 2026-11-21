interface ArrayCtor extends ArrayConstructor {
  isArray<T>(
    arg: T,
    ..._: unknown extends T
      ? never
      : T extends T
        ? T extends ReadonlyArray<unknown>
          ? []
          : never
        : never
  ): arg is Extract<T, ReadonlyArray<unknown>>;
  isArray(arg: unknown): arg is unknown[];
}

// biome-ignore lint: enhanced type definitions for Array constructor
export declare const Array: ArrayCtor;
