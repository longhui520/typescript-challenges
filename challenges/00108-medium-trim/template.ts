type whiteSpace = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${whiteSpace}${infer Rest}${whiteSpace}` | `${whiteSpace}${infer Rest}` | `${infer Rest}${whiteSpace}` ? Trim<Rest>:S