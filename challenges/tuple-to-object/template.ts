type TupleToObject<T extends readonly (keyof any)[]> = {
  [K in T[number]]:K
}
// T[number]就是取数组中的值的集合 