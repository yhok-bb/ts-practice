// TypeChallenge
// Pick

interface Todo {
  title: string
  description: string
  completed: boolean
}

// 1. Mapped Type
// type MyPick<T, K extends keyof T> = { [P in K]: T[P]}

// 2. conditional type & mapped type
// type MyPick<T, K> = { [P in keyof T as P extends K ? P : never]: T[P] }

// 3. Extract
type MyPick<T, K> = { [P in Extract<keyof T, K>]: T[P] }

// 4. インターフェースの交差型を使う
// T & { … } で必要なキーだけ上書きするような構造を考える
// 目的: 型の結合・上書きの理解。ユニオンや交差型の応用力アップ。
// type MyPick<T, K> = { title: string } & { completed: boolean }

// type MyPick<T, K> = {
//   [P in K]: { [Q in P]: T[P] }
// }[K]

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}