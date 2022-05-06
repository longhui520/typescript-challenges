// 联合类型T中排除掉在U中的类型
type MyExclude<T, U> = T extends U ? never: T