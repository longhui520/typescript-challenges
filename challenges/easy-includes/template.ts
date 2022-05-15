type MyEqual<T,U> = (<T>()=> T extends U?1:2) extends (<U>()=> U extends T?1:2)?true:false
// 思路: 每次从数组中获取一个类型，然后比较，如果是相同则返回true:否则递归处理
type Includes<T extends readonly any[], U> = T extends [infer P,...infer S] ?(MyEqual<P,U> extends true?true:Includes<S,U>):false