function Logging(target: Function) {
  console.log("Logging")
}

@Logging
class user {
  name = "Alice"
  constructor() {
    console.log("Class")
  }
}

type User = {
  surname: string;
  middleName?: string;
  givenName: string;
  age: number;
  address?: string;
  nationality: string;
  createdAt: string;
  updatedAt: string;
};

// TypeChallenge
// Pick

type Person = Pick<User, "surname">

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K extends keyof T> = { [P in K]: T[P] } ;

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
