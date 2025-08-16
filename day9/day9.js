const counter = (count = 0) => (adds = 1) => count += adds;
const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());
const TASK_STATUSES = ["todo", "in_progress", "done"];
class Task {
    constructor(title) {
        this.status = "todo";
        this.title = title;
    }
    ;
    getStatus() {
        return this.status;
    }
    getTitle() {
        return this.title;
    }
    start() {
        if (this.status != "todo") {
            throw new Error("Cannot start task unless it is in 'todo' state.");
        }
        this.status = "in_progress";
    }
    complete() {
        if (this.status != "in_progress") {
            throw new Error("Cannot complete task unless it is in 'in_progress' state.");
        }
        this.status = "done";
    }
}
class TaskList {
    constructor(value) {
        const titles = value.map(t => t.getTitle());
        if (new Set(titles).size !== titles.length) {
            throw new Error("Duplicate task titles are not allowed");
        }
        this._value = value;
    }
    add(task) {
        if (this._value.some(t => t.getTitle() === task.getTitle())) {
            throw new Error("Task with the same title already exists.");
        }
        this._value.push(task);
    }
    find(title) {
        const task = this._value.find(t => t.getTitle() === title);
        if (!task)
            throw new Error(`Task '${title}' not found.`);
        return task;
    }
    getAll() {
        return [...this._value]; // 外部から変更できてしまうため、this._valueを直接返さない
    }
    getProgress() {
        return this._value.reduce((progress, task) => {
            progress[task.getStatus()]++;
            return progress;
        }, { todo: 0, in_progress: 0, done: 0 });
    }
}
class TaskService {
    constructor(_value) {
        this._value = _value;
    }
    ;
    addTask(title) {
        const task = new Task(title);
        this._value.add(task);
    }
    startTask(title) {
        const task = this._value.find(title);
        task === null || task === void 0 ? void 0 : task.start();
    }
    completeTask(title) {
        const task = this._value.find(title);
        task === null || task === void 0 ? void 0 : task.complete();
    }
    getProgress() {
        return this._value.getProgress();
    }
}
console.log(Number.isInteger(1.0));
const isSucceeded = Math.random() < 0.5;
const promise = new Promise((resolve, reject) => {
    if (isSucceeded) {
        resolve('Success');
    }
    else {
        reject(new Error('Failure'));
    }
});
promise.then((value) => {
    console.log('1.', value);
    return 'Success Again';
})
    .then((value) => {
    console.log('2.', value);
})
    .catch((error) => {
    console.error('3.', error);
})
    .finally(() => {
    console.log('4.', 'Completed');
});
export {};
