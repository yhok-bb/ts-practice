export {};
const counter = (count = 0) => (adds = 1) => count += adds;
const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());

const TASK_STATUSES = ["todo", "in_progress", "done"] as const
type TaskStatus = typeof TASK_STATUSES[number]

class Task {
  private title: string;
  private status: TaskStatus = "todo";
  constructor(title: string)  {
    this.title = title;
  };

  getStatus(): TaskStatus {
    return this.status
  }

  getTitle(): string {
    return this.title
  }

  start(): void {
    if(this.status != "todo") {
      throw new Error("Cannot start task unless it is in 'todo' state.");
    }
    this.status = "in_progress";
  }

  complete(): void {
    if(this.status != "in_progress") {
      throw new Error("Cannot complete task unless it is in 'in_progress' state.");
    }
    this.status = "done"
  }
}

class TaskList {
  readonly _value: Task[]

  constructor(value: Task[]) {
    const titles = value.map(t => t.getTitle());
    if (new Set(titles).size !== titles.length) {
      throw new Error("Duplicate task titles are not allowed");
    }
    this._value = value;
  }

  add(task: Task): void {
    if(this._value.some(t => t.getTitle() === task.getTitle())) {
      throw new Error("Task with the same title already exists.")
    }
    this._value.push(task)
  }

  find(title: string): Task | undefined {
    const task = this._value.find(t => t.getTitle() === title);
    if(!task) throw new Error(`Task '${title}' not found.`);
    return task;
  }

  getAll(): Task[] {
    return [...this._value]; // 外部から変更できてしまうため、this._valueを直接返さない
  }

  getProgress(): { todo: number; in_progress: number; done: number } {
    return this._value.reduce(
      (progress, task) => {
        progress[task.getStatus()]++;
        return progress;
      },
      { todo: 0, in_progress: 0, done: 0 } as Record<TaskStatus, number>
    );
  }
}

class TaskService {
  constructor(private _value: TaskList) {};

  addTask(title: string): void {
    const task = new Task(title);
    this._value.add(task);
  }

  startTask(title: string): void {
    const task = this._value.find(title)
    task?.start();
  }

  completeTask(title: string): void {
    const task = this._value.find(title);
    task?.complete();
  }

  getProgress(): { todo: number, in_progress: number, done: number } {
    return this._value.getProgress();
  }
}