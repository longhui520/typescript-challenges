// 是对象或数组时，递归处理
type DeepReadonly<T> = {
   readonly [K in keyof T]: T[K] extends Record<string,unknown> | Array<unknown>?DeepReadonly<T[K]>:T[K]
}