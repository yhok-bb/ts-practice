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
type MyPick<T, K> = { [P in keyof T as P extends K ? P : never]: T[P] }

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}