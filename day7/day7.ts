export {};
console.log("Q4");
// Q4: 任意の型の値を受け取り、そのまま返す関数をジェネリクスで書こう
function identity<T>(value: T): T {
  return value;
}

const x = identity<string>("hello"); // 推論される型は？
console.log(x)

const y = identity<number>(1);
console.log(y)

const z = identity<boolean>(true);
console.log(x)

const s = identity<number[]>([1,2,3]);
console.log(s)

type User1 = {
  name: string,
  age: number,
}
const t = identity<User1>({ name: "Apolo", age: 19});
console.log(t)

// Q5: lengthプロパティを持つものだけを引数に受け取れる関数を作ってください
console.log("Q5");

function printLength<T extends { length: number }>(value: T): void {
  console.log(value);
}

// 以下の呼び出しが通るように（NGな場合は型エラー）
printLength("hello");
printLength([1, 2, 3]);
printLength({ length: 10 });
// printLength(42); // これはエラーになるように


// Q6: オブジェクトから任意のキーを受け取り、その値を返す関数を作ってください
console.log("Q6");

function getProp<T, K extends keyof T>(value: T, key: K): void {
  return console.log(value[key]);
}

const user = { id: 1, name: "Alice" };
getProp(user, "id");   // OK
getProp(user, "name");   // OK
// getProp(user, "email"); // エラーになるように

// Q7: Partialを使って、全プロパティをオプショナルにした型を作ってください
console.log("Q7");

type User2 = { name: string; age: number };
type PartialUser = Partial<User2>/* ここにPartialを使って型を書く */

const u: PartialUser = { name: "Bob" }; // OK
console.log(u)

// Q8: Readonly を使ってプロパティを不変にする
type User3 = {
  name: string;
  age: number;
};
type ReadonlyUser = Readonly<User3>;
const readonly_user: ReadonlyUser = {
  name: "Alice",
  age: 30
};

// readonly_user.name = "Bob"; // ← エラーにすること

// Q9: Pick を使って、一部のプロパティだけを持つ型を作る
type User4 = {
  id: number;
  name: string;
  age: number;
};

type PreviewUser = Pick<User4, "name">/* ここを修正 */

const preview_user: PreviewUser = {
  name: "Charlie",
  // age: 30 // ← エラーになるように！
};

// Q10: Record を使ってキー付きオブジェクトを作る
const scores: Record<string, number> = {
  "user1": 80,
  "user2": 95,
  // "user3": "high" // ← エラーになるように！
};

// Q11: keyof と typeof を使ってリテラルキーだけ受け付ける関数
const labels = {
  home: "Home",
  about: "About Us",
  contact: "Contact"
};

function getLabel(key: keyof typeof labels): string {
  return labels[key];
}

getLabel("home"); // OK
// getLabel("privacy"); // ← エラーになるように！

const fruits = {
  apple: 100,
  banana: 200,
  orange: 300,
};

function getPrice(fruit: keyof typeof fruits): number {
  return fruits[fruit];
}

getPrice("apple");   // OK
getPrice("banana");  // OK
// getPrice("mango");   // ← エラーにする！
