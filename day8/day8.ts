// 【フェーズ1：簡易DDD】ドメイン小課題
// Q1：仕様（要件）定義

// 要件
// タスク（Task）はタイトル（文字列）とステータス（todo, in_progress, done のいずれか）を持つ

// タスクのステータスは、明示されたルールに従って変更される

// todo → in_progress へ遷移できる

// in_progress → done へ遷移できる

// done からは他の状態へ戻せない（immutable）

// タイトルはあとから変更可能

// タスク一覧は保持され、追加・検索ができる

// すべてのプロパティに適切な型注釈をつける

// Q1: Taskドメインモデルの作成
// 🎯 課題指示：
// 以下のルールを満たす Task クラスを実装してください：

// title（文字列）と status をプロパティとして持つ

// status は "todo" | "in_progress" | "done" のいずれか

// getStatus() で現在のステータスを返す

// start() を呼ぶと、todo → in_progress に遷移

// complete() を呼ぶと、in_progress → done に遷移

// done のタスクは start() や complete() を呼んでも変更されない

// すべての型は明示すること

// statusのユニオン型をtypeエイリアスで定義すること

// const TASK_STATUSES = ["todo", "in_progress", "done"] as const
// type TaskStatus = typeof TASK_STATUSES[number]

// class Task {
//   private title: string;
//   private status: TaskStatus = "todo";
//   constructor(title: string)  {
//     this.title = title;
//   };

//   getStatus(): TaskStatus {
//     return this.status
//   }

//   getTitle(): string {
//     return this.title
//   }

//   start(): void {
//     if(this.status != "todo") {
//       throw new Error("Cannot start task unless it is in 'todo' state.");
//     }
//     this.status = "in_progress";
//   }

//   complete(): void {
//     if(this.status != "in_progress") {
//       throw new Error("Cannot complete task unless it is in 'in_progress' state.");
//     }
//     this.status = "done"
//   }
// }